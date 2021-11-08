import { options } from "@acala-network/api";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { waitReady } from "@polkadot/wasm-crypto";
import { Codec } from "@polkadot/types/types";
import { WalletPromise } from "@acala-network/sdk-wallet";
import { SwapPromise } from "@acala-network/sdk-swap";
import { FixedPointNumber, Token } from "@acala-network/sdk-core";
import { KeyringPair } from "@polkadot/keyring/types";
import { SwapParameters } from "@acala-network/sdk-swap/swap-parameters";

const TIMEOUT = 60*1000;

type balance = {free: string; frozen: string; reserved: string};
interface KaruraClient {
    address: string
    currencies: string[]
    logger: any
    provider: WsProvider
    api: ApiPromise
    isReady: Promise<any>
    wallet: WalletPromise
    swap: SwapPromise
    keyring: Keyring
    key: KeyringPair
    config: {fees: {maker: number; taker: number}}
}
const availableCurrencies = ["KAR", "KUSD", "BNC", "LKSM", "KSM"];
const RPC_ENDPOINT = "wss://karura.api.onfinality.io/public-ws";

/**
 * KaruraClient connects to the Polkadot.js API
 */
class KaruraClient {
    constructor(phrase: string, currencies: string[], logger: any = console) {

        this.currencies = currencies.filter(c => availableCurrencies.includes(c));
        this.logger = logger;

        const connected = this.connect().then( ({api, wallet, swap}) => {
            this.api = api;
            this.wallet = wallet;
            this.swap = swap;
        })

        this.keyring = new Keyring({ type: 'sr25519' });
        waitReady().then(() => {
            this.key = this.keyring.addFromMnemonic(phrase);
            this.address = this.keyring.getPairs()[0].address;
        });
        this.isReady = Promise.all([connected , waitReady()]);
        this.config = {fees: {maker: 0.3/100, taker: 0.3/100}};
    }

    async connect(): Promise<{api: ApiPromise; wallet: WalletPromise; swap: SwapPromise}>{
        const provider = new WsProvider(RPC_ENDPOINT);

        let api; 
        try{
            api = await ApiPromise.create(options({ provider }));
        }catch(error){
            this.logger.error(`Error while trying to connect: ${error}, retry in 1 second.`);
            await new Promise(r => setTimeout(r, 1000));
            // retry
            return await this.connect();
        }
            
        const [chain, nodeName, nodeVersion] = await Promise.all([
            api.rpc.system.chain(),
            api.rpc.system.name(),
            api.rpc.system.version()
        ]);
        
        this.logger.info(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
        
        const wallet = new WalletPromise(api);
        const swap = new SwapPromise(api);

        return {api, wallet, swap};
    }

    async getPrice(currencyPair: string, direction: "buy"|"sell", volume: number, volumeCurrency = 'base'){
        if( volume == 0 )
            volume = 1;
        
        let [base, quote] = currencyPair.split('/');
        if( quote == 'USD' )
            quote = 'KUSD';

        let supplyCurrency: string, targetCurrency: string;
        if( direction == 'buy' ){
            supplyCurrency = quote;
            targetCurrency = base;
        }
        else{
            supplyCurrency = base;
            targetCurrency = quote;
        }
        const supplyToken = this.getToken(supplyCurrency);
        const targetToken = this.getToken(targetCurrency);

        // construct swap path and determine swap direction.
        const path: [Token, Token] = [supplyToken, targetToken];
        const supplyAmount = new FixedPointNumber(volume, 12);
        const swapTradeMode = direction == 'sell' ? "EXACT_INPUT" : "EXACT_OUTPUT";

        const parameters = await this.swap.swap(path, supplyAmount, swapTradeMode);
        if( parameters ){
            if( direction == 'buy' ){
                return parameters.input.balance.div(parameters.output.balance).toNumber();
            }
            else{
                return parameters.output.balance.div(parameters.input.balance).toNumber();
            }
        }
        else
            return 0;
    }

    async createOrder(currencyPair: string, orderType: "swap", direction: "buy" | "sell", volume: number, price: number, options = {}){
        let [base, quote] = currencyPair.split('/');
        if( quote == 'USD' )
            quote = 'KUSD';
            
        let supplyToken: Token, targetToken: Token;

        if( direction == 'buy' ){
            supplyToken = this.getToken(quote);
            targetToken = this.getToken(base);
        }
        else{
            supplyToken = this.getToken(base);
            targetToken = this.getToken(quote);
        } 

        // set slippage 0.3%
        const slippage = new FixedPointNumber(1-0.003);

        const path: [Token, Token] = [supplyToken, targetToken];
        let supplyAmount: FixedPointNumber;
        if( direction == 'sell' )
            supplyAmount = new FixedPointNumber(volume, supplyToken.decimal);
        else{
            supplyAmount = new FixedPointNumber(volume * price, supplyToken.decimal);
        }
        const parameters = await this.swap.swap(path, supplyAmount, "EXACT_INPUT");
        if( !parameters ){
            this.logger.error(`Could not get trade parameters, check connection.`);
            return {costs: 0, volumeExecuted: 0, fees: {}, timeClosed: undefined};
        }

        // Exec Exchange
        let resolveHook: Function, rejectHook: Function;
        const p = new Promise((r, rj) => {resolveHook = r, rejectHook = rj});
        setTimeout(() => {rejectHook('Connection timed out.')}, TIMEOUT);

        await this.api.tx.dex.swapWithExactSupply(
                                path.map((item) => item.toChainData()),
                                supplyAmount.toChainData(),
                                parameters.output.balance.mul(slippage).toChainData()
                                ).signAndSend(this.key, async ({events = [], status}) => {
                                    this.logger.info(`Swap status: ${status.type}`);

                                    if (status.isInBlock || status.isFinalized ) {
                                        // log event information
                                        this.logger.debug('Events:');
                                        events.forEach(({ event: { data, method, section }, phase }) => {
                                            this.logger.debug('\t', phase.toString(), `: ${section}.${method}`, data.toString());
                                        });

                                        // get trade costs from event data
                                        const swap = this.getSwapData(events);

                                        // create result object
                                        const result = {
                                            costs: swap[quote],
                                            volumeExecuted: swap[base],
                                            fees: {'KAR': swap.fee, [supplyToken.toString()]: supplyAmount.toNumber()*this.config.fees.taker},
                                            timeClosed: new Date(),
                                            error: undefined as any
                                        };
                                        resolveHook(result);
                                    }
                                }).catch( (error) => {
                                    this.logger.error(error);
                                    resolveHook({ costs:0, volumeExecuted: 0, fees:[{'KAR':0.0022}], timeClosed: new Date(), error });
                                });
        return p;
    }

    async getBalance(){
        const balance: {[key: string]: {free: number; placed: number; total: number}} = {};
        for( let currency of this.currencies ){
            const b = await this.accountData(currency);
            if( currency == 'KUSD' )
                currency = 'USD';
            balance[currency] = b;
        }
        return balance;
    }

    async accountData(token: string) {
        await this.isReady;

        try{
            let balance = {free: '0', frozen: '0', reserved: '0'};
       
            // api.query.tokens does not return KAR balance.
            if( token=='KAR'){
                const response = await this.api.query.system.account(this.address) as Codec;
                if( response ){
                    const responseObj = response.toHuman() as {data: {free: string; feeFrozen: string; miscFrozen: string; reserved: string}};
                    balance = {
                        free: responseObj.data.free,
                        frozen: responseObj.data.feeFrozen,
                        reserved: responseObj.data.reserved,
                    }
                }
            }
            else{
                const response = await this.api.query.tokens.accounts(this.address, {Token: token }) as Codec;
                if( response ){
                    balance = response.toHuman() as balance;
                }
            }
            return this.parseBalance(balance);
       }
        catch(error){
            this.logger.error(`Could not get ${token} balance`);
            return {free: 0, placed: 0, total: 0};
        }
    }

    /**
     * Gets potential fees for a transaction on Karura
     * 
     * @param {string}      recipient   transaction receiver address
     * @returns {Promise<RuntimeDispatchInfo>}
     */
    async getFees(recipient: string) {
        const api = new ApiPromise(options({ provider: this.provider }));
        await api.isReadyOrError;

        const info = await api.tx.balances
            .transfer(recipient, 123)
            .paymentInfo(this.address);

        const [amount, unit] = info.partialFee.toHuman().split(" ");
        return `KAR`;
    }

    getToken(token: string){
        if( !this.wallet ){
            this.wallet = new WalletPromise(this.api);
        }
        return this.wallet.getToken(token);
    }

    parseBalance(balance: balance) {
        const free = this.toNumber(balance.free);
        const frozen = this.toNumber(balance.frozen);
        const reserved = this.toNumber(balance.reserved);
        return {
            free,
            placed: frozen + reserved,
            total: free + frozen + reserved
        }
    }    

    toNumber(amount: string, unit: string = "Plank" ){
        return +amount.replace(/,/g, '') * 1e-12;
    }

    getSwapData(events: any[]){ // find event record type
        const swap = events.filter(e => e.get('event')?.method == 'Swap' ).pop();
        const swapParsed = JSON.parse(swap.event.toString()) as {index: string; data: [string, Array<{token: string}>, Array<number>]};

        const fee = events.filter(e => e.get('event')?.method == 'Deposit').pop();
        const feeParsed = JSON.parse(fee.event.toString()) as {index: string; data: Array<number>};

        return {
            [swapParsed.data[1][0].token]: swapParsed.data[2][0] * 1e-12,
            [swapParsed.data[1][1].token]: swapParsed.data[2][1] * 1e-12,
            fee: feeParsed.data[0] * 1e-12,
        }
    }

    async isCurrencyPairAvailable(currencyPair: string){
        const [base, quote] = currencyPair.split('/');
        // generate the path, KAR => KSM => USD not yet supported
        const status = await this.api.query.dex.tradingPairStatuses([
            { TOKEN: quote },
            { TOKEN: base }
        ]);
        return status.toString() == 'Enabled';
    }
}

module.exports = KaruraClient;

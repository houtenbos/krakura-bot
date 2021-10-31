import { options } from "@acala-network/api";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { waitReady } from "@polkadot/wasm-crypto";
import { Codec } from "@polkadot/types/types";
import { WalletPromise } from "@acala-network/sdk-wallet";
import { SwapPromise } from "@acala-network/sdk-swap";
import { FixedPointNumber, Token } from "@acala-network/sdk-core";
import { KeyringPair } from "@polkadot/keyring/types";
import { SwapParameters } from "@acala-network/sdk-swap/swap-parameters";

const TIMEOUT = 30*1000;

interface KaruraClient {
    address: string
    currencies: string[]
    logger: Console
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

/**
 * KaruraClient connects to the Polkadot.js API 
 */
class KaruraClient {
    constructor(address: string, phrase: string, currencies: string[], logger: Console = console) {

        this.address = address;
        this.currencies = currencies.filter(c => availableCurrencies.includes(c));
        this.logger = logger;
        this.provider = new WsProvider("wss://karura.api.onfinality.io/public-ws");
        this.api = new ApiPromise(options({ provider: this.provider }));
        this.api.isReadyOrError.then(() => {
            this.wallet = new WalletPromise(this.api);
            this.swap = new SwapPromise(this.api);
        })
        this.keyring = new Keyring({ type: 'sr25519' });
        waitReady().then(() => {
            this.key = this.keyring.addFromMnemonic(phrase);
        });
        this.isReady = Promise.all([this.api.isReadyOrError, waitReady()]);
        this.config = {fees: {maker: 0.3/100, taker: 0.3/100}};
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
        const exchangeFee = this.api.consts.dex.getExchangeFee;

        const path: [Token, Token] = [this.getToken(base), this.getToken(quote)];
        const supplyAmount = new FixedPointNumber(volume, 12);
    
        const parameters = await this.swap.swap(path, supplyAmount, "EXACT_INPUT");
        if( parameters )
            return parameters.output.balance.toNumber() / volume;
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
        const parameters: SwapParameters | undefined = await this.swap.swap(path, supplyAmount, "EXACT_INPUT");

        const beforeSupplyBalance = await this.wallet.queryBalance(this.key.address, supplyToken);
        const beforeTargetBalance = await this.wallet.queryBalance(this.key.address, targetToken);

        // Exec Exchange
        let resolveHook: Function, rejectHook: Function;
        const p = new Promise((r, rj) => {resolveHook = r, rejectHook = rj});

        setTimeout(() => {rejectHook()}, TIMEOUT);

        await this.api.tx.dex.swapWithExactSupply(
                                path.map((item) => item.toChainData()),
                                supplyAmount.toChainData(),
                                parameters.output.balance.mul(slippage).toChainData()
                                ).signAndSend(this.key, async (result) => {
                                    if (result.isInBlock) {
                                        // calculate trade costs
                                        const afterSupplyBalance = await this.wallet.queryBalance(this.key.address, supplyToken);
                                        const afterTargetBalance = await this.wallet.queryBalance(this.key.address, targetToken);
                              
                                        const deltaSupply = afterSupplyBalance.freeBalance.sub(beforeSupplyBalance.freeBalance).toNumber();
                                        const deltaTarget = afterTargetBalance.freeBalance.sub(beforeTargetBalance.freeBalance).toNumber();
                                        const result = {
                                            costs: 0,
                                            volumeExecuted: 0,
                                            fees: {'KAR': 0.0022, [supplyToken.toString()]: supplyAmount.toNumber()*this.config.fees.taker},
                                            timeClosed: new Date()
                                        };
                                        if( direction == 'sell' ){
                                            result.costs = deltaTarget;
                                            result.volumeExecuted = deltaSupply*-1;
                                        }
                                        else{
                                            result.costs = deltaSupply*-1;
                                            result.volumeExecuted = deltaTarget;
                                        }
                                        resolveHook(result);
                                    }
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

        let balance: Codec | undefined;
        try{
            balance = await this.api.query.tokens.accounts(this.address, {Token: token }) as Codec;
        }
        catch(error){
            this.logger.error(`Could not get ${token} balance`);
        }

        if( !!balance ){
            return this.parseBalance(balance.toHuman()); 
        }
        else
            return {free: 0, placed: 0, total: 0};
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

    parseBalance(balance: any) {
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
}

module.exports = KaruraClient;

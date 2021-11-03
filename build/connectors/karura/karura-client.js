"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@acala-network/api");
const api_2 = require("@polkadot/api");
const wasm_crypto_1 = require("@polkadot/wasm-crypto");
const sdk_wallet_1 = require("@acala-network/sdk-wallet");
const sdk_swap_1 = require("@acala-network/sdk-swap");
const sdk_core_1 = require("@acala-network/sdk-core");
const TIMEOUT = 60 * 1000;
const availableCurrencies = ["KAR", "KUSD", "BNC", "LKSM", "KSM"];
const RPC_ENDPOINT = "wss://karura.api.onfinality.io/public-ws";
/**
 * KaruraClient connects to the Polkadot.js API
 */
class KaruraClient {
    constructor(phrase, currencies, logger = console) {
        this.currencies = currencies.filter(c => availableCurrencies.includes(c));
        this.logger = logger;
        const connected = this.connect().then(({ api, wallet, swap }) => {
            this.api = api;
            this.wallet = wallet;
            this.swap = swap;
        });
        this.keyring = new api_2.Keyring({ type: 'sr25519' });
        (0, wasm_crypto_1.waitReady)().then(() => {
            this.key = this.keyring.addFromMnemonic(phrase);
            this.address = this.keyring.getPairs()[0].address;
        });
        this.isReady = Promise.all([connected, (0, wasm_crypto_1.waitReady)()]);
        this.config = { fees: { maker: 0.3 / 100, taker: 0.3 / 100 } };
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = new api_2.WsProvider(RPC_ENDPOINT);
            let api;
            try {
                api = yield api_2.ApiPromise.create((0, api_1.options)({ provider }));
            }
            catch (error) {
                this.logger.error(`Error while trying to connect: ${error}, retry in 1 second.`);
                yield new Promise(r => setTimeout(r, 1000));
                // retry
                return yield this.connect();
            }
            const [chain, nodeName, nodeVersion] = yield Promise.all([
                api.rpc.system.chain(),
                api.rpc.system.name(),
                api.rpc.system.version()
            ]);
            this.logger.info(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
            const wallet = new sdk_wallet_1.WalletPromise(api);
            const swap = new sdk_swap_1.SwapPromise(api);
            return { api, wallet, swap };
        });
    }
    getPrice(currencyPair, direction, volume, volumeCurrency = 'base') {
        return __awaiter(this, void 0, void 0, function* () {
            if (volume == 0)
                volume = 1;
            let [base, quote] = currencyPair.split('/');
            if (quote == 'USD')
                quote = 'KUSD';
            let supplyCurrency, targetCurrency;
            if (direction == 'buy') {
                supplyCurrency = quote;
                targetCurrency = base;
            }
            else {
                supplyCurrency = base;
                targetCurrency = quote;
            }
            const exchangeFee = this.api.consts.dex.getExchangeFee;
            const path = [this.getToken(base), this.getToken(quote)];
            const supplyAmount = new sdk_core_1.FixedPointNumber(volume, 12);
            const parameters = yield this.swap.swap(path, supplyAmount, "EXACT_INPUT");
            if (parameters)
                return parameters.output.balance.toNumber() / volume;
            else
                return 0;
        });
    }
    createOrder(currencyPair, orderType, direction, volume, price, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let [base, quote] = currencyPair.split('/');
            if (quote == 'USD')
                quote = 'KUSD';
            let supplyToken, targetToken;
            if (direction == 'buy') {
                supplyToken = this.getToken(quote);
                targetToken = this.getToken(base);
            }
            else {
                supplyToken = this.getToken(base);
                targetToken = this.getToken(quote);
            }
            // set slippage 0.3%
            const slippage = new sdk_core_1.FixedPointNumber(1 - 0.003);
            const path = [supplyToken, targetToken];
            let supplyAmount;
            if (direction == 'sell')
                supplyAmount = new sdk_core_1.FixedPointNumber(volume, supplyToken.decimal);
            else {
                supplyAmount = new sdk_core_1.FixedPointNumber(volume * price, supplyToken.decimal);
            }
            const parameters = yield this.swap.swap(path, supplyAmount, "EXACT_INPUT");
            if (!parameters) {
                this.logger.error(`Could not get trade parameters, check connection.`);
                return { costs: 0, volumeExecuted: 0, fees: {}, timeClosed: undefined };
            }
            // Exec Exchange
            let resolveHook, rejectHook;
            const p = new Promise((r, rj) => { resolveHook = r, rejectHook = rj; });
            setTimeout(() => { rejectHook('Connection timed out.'); }, TIMEOUT);
            yield this.api.tx.dex.swapWithExactSupply(path.map((item) => item.toChainData()), supplyAmount.toChainData(), parameters.output.balance.mul(slippage).toChainData()).signAndSend(this.key, ({ events = [], status }) => __awaiter(this, void 0, void 0, function* () {
                this.logger.info(`Swap status: ${status.type}`);
                if (status.isInBlock || status.isFinalized) {
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
                        fees: { 'KAR': swap.fee, [supplyToken.toString()]: supplyAmount.toNumber() * this.config.fees.taker },
                        timeClosed: new Date(),
                        error: undefined
                    };
                    resolveHook(result);
                }
            })).catch((error) => {
                this.logger.error(error);
                resolveHook({ costs: 0, volumeExecuted: 0, fees: [{ 'KAR': 0.0022 }], timeClosed: new Date(), error });
            });
            return p;
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = {};
            for (let currency of this.currencies) {
                const b = yield this.accountData(currency);
                if (currency == 'KUSD')
                    currency = 'USD';
                balance[currency] = b;
            }
            return balance;
        });
    }
    accountData(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isReady;
            try {
                let balance = { free: '0', frozen: '0', reserved: '0' };
                // api.query.tokens does not return KAR balance.
                if (token == 'KAR') {
                    const response = yield this.api.query.system.account(this.address);
                    if (response) {
                        const responseObj = response.toHuman();
                        balance = {
                            free: responseObj.data.free,
                            frozen: responseObj.data.feeFrozen,
                            reserved: responseObj.data.reserved,
                        };
                    }
                }
                else {
                    const response = yield this.api.query.tokens.accounts(this.address, { Token: token });
                    if (response) {
                        balance = response.toHuman();
                    }
                }
                return this.parseBalance(balance);
            }
            catch (error) {
                this.logger.error(`Could not get ${token} balance`);
                return { free: 0, placed: 0, total: 0 };
            }
        });
    }
    /**
     * Gets potential fees for a transaction on Karura
     *
     * @param {string}      recipient   transaction receiver address
     * @returns {Promise<RuntimeDispatchInfo>}
     */
    getFees(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            const api = new api_2.ApiPromise((0, api_1.options)({ provider: this.provider }));
            yield api.isReadyOrError;
            const info = yield api.tx.balances
                .transfer(recipient, 123)
                .paymentInfo(this.address);
            const [amount, unit] = info.partialFee.toHuman().split(" ");
            return `KAR`;
        });
    }
    getToken(token) {
        if (!this.wallet) {
            this.wallet = new sdk_wallet_1.WalletPromise(this.api);
        }
        return this.wallet.getToken(token);
    }
    parseBalance(balance) {
        const free = this.toNumber(balance.free);
        const frozen = this.toNumber(balance.frozen);
        const reserved = this.toNumber(balance.reserved);
        return {
            free,
            placed: frozen + reserved,
            total: free + frozen + reserved
        };
    }
    toNumber(amount, unit = "Plank") {
        return +amount.replace(/,/g, '') * 1e-12;
    }
    getSwapData(events) {
        const swap = events.filter(e => { var _a; return ((_a = e.get('event')) === null || _a === void 0 ? void 0 : _a.method) == 'Swap'; }).pop();
        const swapParsed = JSON.parse(swap.event.toString());
        const fee = events.filter(e => { var _a; return ((_a = e.get('event')) === null || _a === void 0 ? void 0 : _a.method) == 'Deposit'; }).pop();
        const feeParsed = JSON.parse(fee.event.toString());
        return {
            [swapParsed.data[1][0].token]: swapParsed.data[2][0] * 1e-12,
            [swapParsed.data[1][1].token]: swapParsed.data[2][1] * 1e-12,
            fee: feeParsed.data[0] * 1e-12,
        };
    }
}
module.exports = KaruraClient;
//# sourceMappingURL=karura-client.js.map
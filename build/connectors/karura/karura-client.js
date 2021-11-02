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
const TIMEOUT = 30 * 1000;
const availableCurrencies = ["KAR", "KUSD", "BNC", "LKSM", "KSM"];
/**
 * KaruraClient connects to the Polkadot.js API
 */
class KaruraClient {
    constructor(address, phrase, currencies, logger = console) {
        this.address = address;
        this.currencies = currencies.filter(c => availableCurrencies.includes(c));
        this.logger = logger;
        this.provider = new api_2.WsProvider("wss://karura.api.onfinality.io/public-ws");
        this.api = new api_2.ApiPromise((0, api_1.options)({ provider: this.provider }));
        this.api.isReadyOrError.then(() => {
            this.wallet = new sdk_wallet_1.WalletPromise(this.api);
            this.swap = new sdk_swap_1.SwapPromise(this.api);
        });
        this.keyring = new api_2.Keyring({ type: 'sr25519' });
        (0, wasm_crypto_1.waitReady)().then(() => {
            this.key = this.keyring.addFromMnemonic(phrase);
        });
        this.isReady = Promise.all([this.api.isReadyOrError, (0, wasm_crypto_1.waitReady)()]);
        this.config = { fees: { maker: 0.3 / 100, taker: 0.3 / 100 } };
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
            const beforeSupplyBalance = yield this.wallet.queryBalance(this.key.address, supplyToken);
            const beforeTargetBalance = yield this.wallet.queryBalance(this.key.address, targetToken);
            // Exec Exchange
            let resolveHook, rejectHook;
            const p = new Promise((r, rj) => { resolveHook = r, rejectHook = rj; });
            setTimeout(() => { rejectHook(); }, TIMEOUT);
            yield this.api.tx.dex.swapWithExactSupply(path.map((item) => item.toChainData()), supplyAmount.toChainData(), parameters.output.balance.mul(slippage).toChainData()).signAndSend(this.key, (result) => __awaiter(this, void 0, void 0, function* () {
                if (result.isInBlock) {
                    // calculate trade costs
                    const afterSupplyBalance = yield this.wallet.queryBalance(this.key.address, supplyToken);
                    const afterTargetBalance = yield this.wallet.queryBalance(this.key.address, targetToken);
                    const deltaSupply = afterSupplyBalance.freeBalance.sub(beforeSupplyBalance.freeBalance).toNumber();
                    const deltaTarget = afterTargetBalance.freeBalance.sub(beforeTargetBalance.freeBalance).toNumber();
                    const result = {
                        costs: 0,
                        volumeExecuted: 0,
                        fees: { 'KAR': 0.0022, [supplyToken.toString()]: supplyAmount.toNumber() * this.config.fees.taker },
                        timeClosed: new Date()
                    };
                    if (direction == 'sell') {
                        result.costs = deltaTarget;
                        result.volumeExecuted = deltaSupply * -1;
                    }
                    else {
                        result.costs = deltaSupply * -1;
                        result.volumeExecuted = deltaTarget;
                    }
                    resolveHook(result);
                }
            }));
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
            let balance;
            try {
                balance = (yield this.api.query.tokens.accounts(this.address, { Token: token }));
            }
            catch (error) {
                this.logger.error(`Could not get ${token} balance`);
            }
            if (!!balance) {
                return this.parseBalance(balance.toHuman());
            }
            else
                return { free: 0, placed: 0, total: 0 };
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
}
module.exports = KaruraClient;
//# sourceMappingURL=karura-client.js.map
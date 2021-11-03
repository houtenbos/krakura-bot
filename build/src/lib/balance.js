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
const Client = require("../../connectors/client");
class Balance {
    /**
     * @param {Array<[String, Client]>} clients
     * @param {Array<String>} currencies
     */
    constructor(clients, currencies) {
        /** @type {Map<String, BalanceObject>} */
        this.platformBalances = new Map();
        for (const [exchange, client] of clients) {
            this.platformBalances.set(exchange, new BalanceObject(client, currencies));
        }
        this.isReady = Promise.all([...this.platformBalances.values()].map(b => b.isReady));
    }
    /**
     * @param {String} platform
     * @param {String} currency
     * @return {Number} the balance on the exchange.
     */
    getBalance(platform, currency) {
        var _a;
        return ((_a = this.platformBalances.get(platform)) === null || _a === void 0 ? void 0 : _a.getBalance(currency)) || 0;
    }
    /**
     * @param {String} platform
     * @param {String} currency
     * @param {Number} amount
     * @return {Void}
     */
    setBalance(platform, currency, amount) {
        var _a;
        (_a = this.platformBalances.get(platform)) === null || _a === void 0 ? void 0 : _a.setBalance(currency, amount);
    }
}
class BalanceObject {
    /**
     * @param {Client} client
     * @param {Array<String>} currencies
     */
    constructor(client, currencies) {
        /** @type {Map<String, Number>} */
        this.balances = new Map();
        // initiate zero balances
        for (const currency of currencies) {
            this.setBalance(currency, 0);
        }
        this._isReadyHook = (/** @type {any} */ x) => { };
        this.isReady = new Promise(r => this._isReadyHook = r);
        this.client = client;
        this.build();
    }
    build() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const balance = yield this.client.getBalance();
            for (const currency of this.currencies) {
                this.setBalance(currency, ((_a = balance[currency]) === null || _a === void 0 ? void 0 : _a.free) || 0);
            }
            this._isReadyHook();
        });
    }
    /**
     * @param {String} currency
     * @param {Number} amount
     * @return {Void}
     */
    setBalance(currency, amount) {
        this.balances.set(currency, amount);
    }
    /**
     * @param {String} currency
     * @return {Number} the balance on the exchange.
     */
    getBalance(currency) {
        return this.balances.get(currency) || 0;
    }
    /**
     * Returns all the different currencies on this exchange.
     * @return {Array<String>}       An array with all the currencies.
    */
    get currencies() {
        return [...this.balances.keys()];
    }
}
module.exports = Balance;
//# sourceMappingURL=balance.js.map
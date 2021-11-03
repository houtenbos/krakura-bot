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
//@ts-check
class Client {
    /**
     * @param {any} key
     * @param {any} secret
     */
    constructor(key, secret) {
        this.key = key;
        this.secret = secret;
        this.hasApiKey = !!key;
    }
    /**
     * @return {Promise<Object>}
     */
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    /**
     * @param {String} currencyPair
     * @param {String} direction
     * @param {Number} [volume]
     * @param {'base'|'quote'} [volumeCurrency]
     * @return {Promise<Number>}
     */
    getPrice(currencyPair, direction, volume, volumeCurrency) {
        return __awaiter(this, void 0, void 0, function* () {
            return 0;
        });
    }
    /**
     * @param {String} currencyPair
     * @param {'market' | 'limit' | 'swap'} orderType
     * @param {'buy' | 'sell'} direction
     * @param {Number} volume
     * @param {Number} price
     * @return {Promise<{orderId: String, volume: Number, volumeExecuted: Number, costs: Number, fees:{}}>}
     */
    createOrder(currencyPair, orderType, direction, volume, price, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return { orderId: '', volume: 0, volumeExecuted: 0, costs: 0, fees: { USD: 0, KSM: 0, KAR: 0 } };
        });
    }
    /**
     * @return {Promise<Object>}
     */
    loadCurrencyPairConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            // get minimum order size, decimals points, fees etc.
            return {};
        });
    }
}
module.exports = Client;
//# sourceMappingURL=client.js.map
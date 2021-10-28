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
/**
 * KaruraClient connects to the Polkadot.js API
 */
class KaruraClient {
    /**
     *
     * @param {string}      address  Karura account address
     * @param {Object}      [logger=console]    A logger function, (default is console logging)
     */
    constructor(address, logger = console) {
        this.address = address;
        this.logger = logger;
        this.provider = new api_2.WsProvider("wss://karura.api.onfinality.io/public-ws");
    }
    /**
     * Retrieves account data for the Karura account address of the class
     *
     * @returns {Promise<FrameSystemAccountInfo>}
     */
    accountData() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = new api_2.WsProvider("wss://karura.api.onfinality.io/public-ws");
            const api = new api_2.ApiPromise((0, api_1.options)({ provider }));
            yield api.isReadyOrError;
            const accountData = yield api.query.system.account(this.address);
            return accountData.toHuman();
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
            return `${this.karUnitsToKAR(amount, unit)} KAR`;
        });
    }
    karUnitsToKAR(amount, unit) {
        if (unit === "Plank") {
            return (parseFloat(amount) * 0.000000000001).toString();
        }
        else if (unit === "uKAR") {
            return (parseFloat(amount) * 0.000001000000).toString();
        }
        else if (unit === "mKAR") {
            return (parseFloat(amount) * 0.001000000000).toString();
        }
        else if (unit === "KAR") {
            return amount;
        }
    }
    /**
     * Transfers a token from the class address to a recipient Karura account address
     *
     * @param {string}      recipient   transfer receiver address
     * @param {string}      token   id of token to transfer - Examples "KSM", "KAR"
     * @param {string}      amount  amount of tokens to transfer
     */
    transfer(recipient, token, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const api = new api_2.ApiPromise((0, api_1.options)({ provider: this.provider }));
            yield api.isReadyOrError;
            this.accountData().then((data) => this.logger.log("Before transfer account data", data));
            const hash = yield api.tx.currencies
                .transfer(recipient, { Token: token, }, amount)
                .signAndSend(this.address);
            this.logger.log("Transfer sent with hash", hash.toHex());
        });
    }
}
module.exports = KaruraClient;

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
class KaruraClient {
    constructor(address, logger = console) {
        this.address = address;
        this.logger = logger;
        this.provider = new api_2.WsProvider("wss://karura.api.onfinality.io/public-ws");
    }
    accountData() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = new api_2.WsProvider("wss://karura.api.onfinality.io/public-ws");
            const api = new api_2.ApiPromise((0, api_1.options)({ provider }));
            yield api.isReadyOrError;
            const accountData = yield api.query.system.account(this.address);
            return accountData.toHuman();
        });
    }
    getFees(recipient, sender) {
        return __awaiter(this, void 0, void 0, function* () {
            const api = new api_2.ApiPromise((0, api_1.options)({ provider: this.provider }));
            yield api.isReadyOrError;
            const info = yield api.tx.balances
                .transfer(recipient, 123)
                .paymentInfo(sender);
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
}
module.exports = KaruraClient;

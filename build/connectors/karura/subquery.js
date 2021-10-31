"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const queries_1 = require("../../src/generated/queries");
class Subquery {
    constructor() {
        this.client = new graphql_request_1.GraphQLClient('https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton', { headers: {} });
        this.sdk = (0, queries_1.getSdk)(this.client);
    }
    /**
     *
     * @returns {Promise}
     */
    getTokens() {
        return this.sdk.Tokens();
    }
    /**
     *
     * @param {string} name
     * @returns {Promise}
     */
    getToken(name = "KSM") {
        return this.sdk.Token({ "name": name });
    }
    /**
     *
     * @param {string} signerId
     * @returns {Promise}
     */
    getAccountExtrinsics(signerId = "") {
        return this.sdk.AccountExtrinsics({ "signerId": signerId });
    }
}
module.exports = Subquery;
//# sourceMappingURL=subquery.js.map
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../src/generated/queries';

interface Subquery {
    client: GraphQLClient
    sdk: ReturnType<typeof getSdk>
}

class Subquery {

    constructor() {
        this.client = new GraphQLClient(
            'https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton',
            { headers: {} });
        this.sdk = getSdk(this.client);
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
    getToken(name: string = "KSM") {
        return this.sdk.Token({"name": name});
    }

    /**
     * 
     * @param {string} signerId 
     * @returns {Promise}
     */
    getAccountExtrinsics(signerId: string = "") {
        return this.sdk.AccountExtrinsics({"signerId": signerId})
    }
}

module.exports = Subquery;

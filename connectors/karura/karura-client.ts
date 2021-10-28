import { options } from "@acala-network/api";
import { ApiPromise, WsProvider } from "@polkadot/api";

interface KaruraClient {
    address: string
    logger: Console
    provider: WsProvider
}

/**
 * KaruraClient connects to the Polkadot.js API 
 */
class KaruraClient {

    /**
     * 
     * @param {string}      address  Karura account address
     * @param {Object}      [logger=console]    A logger function, (default is console logging) 
     */
    constructor(address: string, logger: Console = console) {
        this.address = address;
        this.logger = logger;
        this.provider = new WsProvider("wss://karura.api.onfinality.io/public-ws");
    }

    /**
     * Retrieves account data for the Karura account address of the class
     * 
     * @returns {Promise<FrameSystemAccountInfo>}
     */
    async accountData() {
        const provider = new WsProvider("wss://karura.api.onfinality.io/public-ws");
        const api = new ApiPromise(options({ provider }));
        await api.isReadyOrError;

        const accountData = await api.query.system.account(this.address);
        return accountData.toHuman();
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
        return `${this.karUnitsToKAR(amount, unit)} KAR`;
    }

    karUnitsToKAR(amount: string, unit: string) {
        if (unit === "Plank") {
            return (parseFloat(amount) * 0.000000000001).toString();
        } else if (unit === "uKAR") {
            return (parseFloat(amount) * 0.000001000000).toString();
        } else if (unit === "mKAR") {
            return (parseFloat(amount) * 0.001000000000).toString();
        } else if (unit === "KAR") {
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
    async transfer(recipient: string, token: string, amount: string) {
        const api = new ApiPromise(options({ provider: this.provider }));
        await api.isReadyOrError;

        this.accountData().then((data) => this.logger.log("Before transfer account data", data));

        const hash = await api.tx.currencies
            .transfer(recipient, { Token: token,}, amount)
            .signAndSend(this.address);

        this.logger.log("Transfer sent with hash", hash.toHex());
    }
}

module.exports = KaruraClient;

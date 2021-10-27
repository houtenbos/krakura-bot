import { options } from "@acala-network/api";
import { ApiPromise, WsProvider } from "@polkadot/api";

interface KaruraClient {
    address: string
    logger: Console
    provider: WsProvider
}

class KaruraClient {

    constructor(address: string, logger: Console = console) {
        this.address = address;
        this.logger = logger;
        this.provider = new WsProvider("wss://karura.api.onfinality.io/public-ws");
    }

    async accountData() {
        const provider = new WsProvider("wss://karura.api.onfinality.io/public-ws");
        const api = new ApiPromise(options({ provider }));
        await api.isReadyOrError;

        const accountData = await api.query.system.account(this.address);
        return accountData.toHuman();
    }

    async getFees(recipient: string, sender: string) {
        const api = new ApiPromise(options({ provider: this.provider }));
        await api.isReadyOrError;

        const info = await api.tx.balances
            .transfer(recipient, 123)
            .paymentInfo(sender);

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
}

module.exports = KaruraClient;
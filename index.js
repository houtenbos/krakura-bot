const KrakenClient = require("./connectors/kraken/kraken-client");
const { askPassword, getOrSetApi } = require("./config/get-api-key");


(async () => {
	await askPassword();
	const {key, secret} = await getOrSetApi('kraken');
	const krakenClient = new KrakenClient(key, secret);

	const krakenBalance = await krakenClient.getBalance();
	const karuraBalance = {KSM: 0, KAR: 0, kUSD: 0};

})();
// start kraken connector
// start karura connector

// check balances
// check prices

// if trade opportunity
// execute 2 trades
// calculate PnL
// do accounting
lest
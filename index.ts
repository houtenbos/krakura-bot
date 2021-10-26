import { Config } from 'apollo-server-core';
import { GraphQLClient } from 'graphql-request';
import { InterfaceType } from 'typescript';
import { getSdk } from './src/generated/queries';

const KrakenClient = require("./connectors/kraken/kraken-client");
const KaruraClient = require("./connectors/karura/karura-client");
const Balance = require("./lib/balance");
const { askPassword, getOrSetApi } = require("./config/get-api-key");

interface maxTradeSize {
    [key: string]: number
}

interface config {
    currencies: Array<string>,
    currencyPairs: Array<string>,
    maxTradeSize: maxTradeSize
    minProfitMargin: number
}

const config: config = {
	currencies: ['KSM', 'KAR', 'USD', 'kUSD'],
	currencyPairs: ['KSM/USD', 'KAR/USD'],
	maxTradeSize: {
		'KSM/USD': 1,
		'KAR/USD': 10
	},
	minProfitMargin: 0.005,
}

const balances = new Map();

(async () => {
	await askPassword();
	const {key, secret} = await getOrSetApi('kraken');
	const krakenClient = new KrakenClient(key, secret);
	const karuraClient = new KaruraClient(key, secret);

	balances.set('kraken', new Balance(krakenClient, config.currencies));
	balances.set('karura', new Balance(karuraClient, config.currencies));

	// check buy kraken sell karura opportunity
	for( const currencyPair of config.currencyPairs){
		const [base, quote] = currencyPair.split('/');
		
		// calculate trade volume
		const buyVolumeQuote = balances.get('kraken').getBalance(quote);
		const buyPrice = await krakenClient.getPrice(currencyPair, 'buy', buyVolumeQuote);
		const buyVolumeBase = buyVolumeQuote / buyPrice;
		
		const sellVolumeBase = balances.get('karura').getBalance(base);
		const tradeVolume = Math.min(buyVolumeBase, sellVolumeBase, config.maxTradeSize[currencyPair]);

		if( tradeVolume < krakenClient.config.minOrderVolume[currencyPair] )
			continue;
		
		// calculate profitability
		const buyCostsGross = tradeVolume * buyPrice;
		const buyFees = buyCostsGross * krakenClient.config.fees.taker;
		const buyCostsNett = buyCostsGross + buyFees;

		const sellPrice = await karuraClient.getPrice(currencyPair, 'sell', tradeVolume);
		const sellCostsGross = tradeVolume * sellPrice;
		const sellFees = sellCostsGross * karuraClient.config.fees.taker;
		const sellCostsNett = sellCostsGross - sellFees;

		const PnL = sellCostsNett - buyCostsNett;
		const profitMargin = PnL / buyCostsNett;
		if( profitMargin < config.minProfitMargin )
			continue;
		

		// make trade
		const buyOrder = krakenClient.createOrder(currencyPair, 'market', 'buy', tradeVolume);
		const sellOrder = karuraClient.createOrder(currencyPair, 'swap', 'sell', tradeVolume);

		// calculate profit and loss
		const profitQuote = sellOrder.costs - sellOrder.fees[quote] - buyOrder.costs - buyOrder.fees[quote];
		const profitBase = buyOrder.volumeExecuted - buyOrder.fees[base] - sellOrder.volumeExecuted - sellOrder.fees[base];
	}

})();



const client = new GraphQLClient(
    'https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton',
    { headers: {} });
const sdk = getSdk(client);
const response = sdk.Test().then((data) => console.log(data.query.blocks));


// start kraken connector
// start karura connector

// check balances
// check prices

// if trade opportunity
// execute 2 trades
// calculate PnL
// do accounting














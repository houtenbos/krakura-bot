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
const graphql_request_1 = require("graphql-request");
const queries_1 = require("./src/generated/queries");
const KrakenClient = require("./connectors/kraken/kraken-client");
const KaruraClient = require("./connectors/karura/karura-client");
const Balance = require("./lib/balance");
const { askPassword, getOrSetApi } = require("./config/get-api-key");
const config = {
    currencies: ['KSM', 'KAR', 'USD', 'kUSD'],
    currencyPairs: ['KSM/USD', 'KAR/USD'],
    maxTradeSize: {
        'KSM/USD': 1,
        'KAR/USD': 10
    },
    minProfitMargin: 0.005,
};
const balances = new Map();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield askPassword();
    const { key, secret } = yield getOrSetApi('kraken');
    const krakenClient = new KrakenClient(key, secret);
    const karuraClient = new KaruraClient(key, secret);
    balances.set('kraken', new Balance(krakenClient, config.currencies));
    balances.set('karura', new Balance(karuraClient, config.currencies));
    // check buy kraken sell karura opportunity
    for (const currencyPair of config.currencyPairs) {
        const [base, quote] = currencyPair.split('/');
        // calculate trade volume
        const buyVolumeQuote = balances.get('kraken').getBalance(quote);
        const buyPrice = yield krakenClient.getPrice(currencyPair, 'buy', buyVolumeQuote);
        const buyVolumeBase = buyVolumeQuote / buyPrice;
        const sellVolumeBase = balances.get('karura').getBalance(base);
        const tradeVolume = Math.min(buyVolumeBase, sellVolumeBase, config.maxTradeSize[currencyPair]);
        if (tradeVolume < krakenClient.config.minOrderVolume[currencyPair])
            continue;
        // calculate profitability
        const buyCostsGross = tradeVolume * buyPrice;
        const buyFees = buyCostsGross * krakenClient.config.fees.taker;
        const buyCostsNett = buyCostsGross + buyFees;
        const sellPrice = yield karuraClient.getPrice(currencyPair, 'sell', tradeVolume);
        const sellCostsGross = tradeVolume * sellPrice;
        const sellFees = sellCostsGross * karuraClient.config.fees.taker;
        const sellCostsNett = sellCostsGross - sellFees;
        const PnL = sellCostsNett - buyCostsNett;
        const profitMargin = PnL / buyCostsNett;
        if (profitMargin < config.minProfitMargin)
            continue;
        // make trade
        const buyOrder = krakenClient.createOrder(currencyPair, 'market', 'buy', tradeVolume);
        const sellOrder = karuraClient.createOrder(currencyPair, 'swap', 'sell', tradeVolume);
        // calculate profit and loss
        const profitQuote = sellOrder.costs - sellOrder.fees[quote] - buyOrder.costs - buyOrder.fees[quote];
        const profitBase = buyOrder.volumeExecuted - buyOrder.fees[base] - sellOrder.volumeExecuted - sellOrder.fees[base];
    }
}))();
const client = new graphql_request_1.GraphQLClient('https://api.subquery.network/sq/matthewashley1/karura-bot-polkadothackaton', { headers: {} });
const sdk = (0, queries_1.getSdk)(client);
const response = sdk.Test().then((data) => console.log(data.query.blocks));
// start kraken connector
// start karura connector
// check balances
// check prices
// if trade opportunity
// execute 2 trades
// calculate PnL
// do accounting

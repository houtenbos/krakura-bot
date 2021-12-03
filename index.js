const KrakenClient = require("./connectors/kraken/kraken-client");
const { KaruraClient } = require("./build/connectors/karura/karura-client");
const Balance = require("./src/lib/balance");
const { askPassword, getOrSetApi } = require("./build/src/lib/get-credentials");
const config = require("./src/config/trading-config");
const Logger = require("./src/config/logger-config");
const { PriceAggregator } = require("./build/src/lib/price");
const { saveOrder, saveTrade } = require("./build/src/data/data-log");

const log = new Logger('krakura');
const clients = new Map();

(async () => {
	await askPassword();
	const {key, secret} = await getOrSetApi('kraken');
	const {phrase} = await getOrSetApi('karura');
	const krakenClient = new KrakenClient(key, secret, log);
	const karuraClient = new KaruraClient(phrase, config.currencies, log);
	log.info('Waiting for kraken client to be ready.');
	await krakenClient.isReady;
	log.info('Waiting for karura client to be ready.');
	await karuraClient.isReady;
	const platforms = new Map([['kraken', krakenClient], ['karura', karuraClient]]);
	const priceAggregator = new PriceAggregator(platforms, config.currencyPairs);

	clients.set('kraken', krakenClient);
	clients.set('karura', karuraClient);

	let balance = new Balance([...clients.entries()], config.currencies);
	await balance.isReady;
	balance.saveBalances();
	setInterval(() => balance.saveBalances(), 60000);

	await new Promise(r => setTimeout(r, 10000));

	// check buy kraken sell karura opportunity
	while( true ){
		for( const [buyPlatform, sellPlatform] of config.crossPlatforms){
			for( const currencyPair of config.currencyPairs){
				const [base, quote] = currencyPair.split('/');
				
				// calculate trade volume
				const buyVolumeQuote = balance.getBalance(buyPlatform, quote);
				const buyPrice = await clients.get(buyPlatform).getPrice(currencyPair, 'buy', buyVolumeQuote);
				const buyVolumeBase = buyVolumeQuote / buyPrice;
				
				const sellVolumeBase = balance.getBalance(sellPlatform, base);
				const tradeVolume = Math.min(buyVolumeBase, sellVolumeBase, config.maxTradeSize[currencyPair]);
		
				// check for krakens minimum order volumes
				if( tradeVolume < krakenClient.config.minOrderVolume[currencyPair] ){
					log.info(`Order too small to place on kraken. Order size: ${tradeVolume}, min order size: ${krakenClient.config.minOrderVolume[currencyPair]}`);
					continue;
				}
				
				// calculate profitability
				const buyCostsGross = tradeVolume * buyPrice;
				const buyFees = buyCostsGross * clients.get(buyPlatform).config.fees.taker;
				const buyCostsNett = buyCostsGross + buyFees;
		
				const sellPrice = await clients.get(sellPlatform).getPrice(currencyPair, 'sell', tradeVolume);
				const sellCostsGross = tradeVolume * sellPrice;
				const sellFees = sellCostsGross * clients.get(sellPlatform).config.fees.taker;
				const sellCostsNett = sellCostsGross - sellFees;
		
				const PnL = sellCostsNett - buyCostsNett;
				const profitMargin = PnL / buyCostsNett;

				log.info(`Buy ${tradeVolume} ${base} @ ${buyPlatform} for ${buyPrice.toFixed(2)}, sell @ ${sellPlatform} for ${sellPrice.toFixed(2)}  - margin: ${profitMargin.toFixed(4)*100} %`);
				if( profitMargin < config.minProfitMargin ){
					continue;
				}
				
				log.info('Profitable trade detected');
				// make trade
				const buyOrderType = buyPlatform == 'kraken' ? 'market' : 'swap';
				const sellOrderType = sellPlatform == 'kraken' ? 'market' : 'swap';
				const buyOrder = await clients.get(buyPlatform).createOrder(currencyPair, buyOrderType, 'buy', tradeVolume, buyPrice);
				const sellOrder = await clients.get(sellPlatform).createOrder(currencyPair, sellOrderType, 'sell', tradeVolume, sellPrice);
		
				// calculate profit and loss
				const profitQuote = sellOrder.costs - (sellOrder.fees[quote] || 0) - buyOrder.costs - (buyOrder.fees[quote] || 0);
				const profitBase = buyOrder.volumeExecuted - (buyOrder.fees[base] || 0) - sellOrder.volumeExecuted - (sellOrder.fees[base] || 0);

				log.info(`Trade profits: ${profitQuote.toFixed(2)} ${quote}, ${profitBase.toFixed(5)} ${base}.`);

				// add some additional info
				const buyOrderExtended = Object.assign({
					platform: buyPlatform,
					assetPair: currencyPair,
					time: new Date(),
					direction: 'buy',
					volume: tradeVolume,
					},
					buyOrder);
				const sellOrderExtended = Object.assign({
					platform: sellPlatform,
					assetPair: currencyPair,
					time: new Date(),
					direction: 'sell',
					volume: tradeVolume,
					},
					sellOrder);

				saveOrder(buyOrderExtended);
				saveOrder(sellOrderExtended);
				saveTrade({buyOrder: buyOrderExtended, sellOrder: sellOrderExtended, time: new Date()});

				// refresh balance by getting the balances from the platforms
				balance = new Balance([...clients.entries()], config.currencies);
				await balance.isReady;
			}
		}
		await new Promise(r => setTimeout(r, 5000));
		process.exit(0);
	}

})();
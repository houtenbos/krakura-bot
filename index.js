const KrakenClient = require("./connectors/kraken/kraken-client");
const KaruraClient = require("./build/connectors/karura/karura-client");
const Balance = require("./lib/balance");
const { askPassword, getOrSetApi } = require("./build/lib/get-credentials");
const config = require("./config/trading-config");

const clients = new Map();

(async () => {
	await askPassword();
	const {key, secret} = await getOrSetApi('kraken');
	const {address, phrase} = await getOrSetApi('karura');
	const krakenClient = new KrakenClient(key, secret);
	const karuraClient = new KaruraClient(address, phrase, config.currencies);
	await krakenClient.isReady;
	await karuraClient.isReady;

	clients.set('kraken', krakenClient);
	clients.set('karura', karuraClient);

	let balance = new Balance([...clients.entries()], config.currencies);
	await balance.isReady;

	console.log("Credentials configured");
	console.log("Looking for profitable trades");

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
					console.log(`Order too small to place on kraken. Order size: ${tradeVolume}, min order size: ${krakenClient.config.minOrderVolume[currencyPair]}`);
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

				console.log(`Buy ${tradeVolume} ${base} @ ${buyPlatform} for ${buyPrice.toFixed(2)}, sell @ ${sellPlatform} for ${sellPrice.toFixed(2)}  - margin: ${profitMargin.toFixed(4)*100} %`);
				if( profitMargin < config.minProfitMargin ){
					continue;
				}
				
		
				console.log('Profitable trade detected');
				// make trade
				const buyOrder = await clients.get(buyPlatform).createOrder(currencyPair, 'market', 'buy', tradeVolume);
				const sellOrder = await clients.get(sellPlatform).createOrder(currencyPair, 'swap', 'sell', tradeVolume);
		
				// calculate profit and loss
				const profitQuote = sellOrder.costs - (sellOrder.fees[quote] || 0) - buyOrder.costs - (buyOrder.fees[quote] || 0);
				const profitBase = buyOrder.volumeExecuted - (buyOrder.fees[base] || 0) - sellOrder.volumeExecuted - (sellOrder.fees[base] || 0);

				console.log(`Trade profits: ${profitQuote.toFixed(2)} ${quote}, ${profitBase.toFixed(5)} ${base}.`);


				// refresh balance by getting the balances from the platforms
				balance = new Balance([...clients.entries()], config.currencies);
				await balance.isReady;
			}
		}
		await new Promise(r => setTimeout(r, 1000));
	}

})();
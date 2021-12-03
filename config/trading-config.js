module.exports = {
	currencies: ['KSM', 'KAR', 'USD', 'KUSD'],
	currencyPairs: ['KSM/USD'],
	maxTradeSize: {
		'KSM/USD': 0.02,
		'KAR/USD': 10
	},
	minProfitMargin: 0.010,
	crossPlatforms: [['kraken', 'karura'], ['karura', 'kraken']]
}
//@ts-check
class Client{
	/**
	 * @param {any} key
	 * @param {any} secret
	 */
	constructor(key, secret){
		this.key = key;
		this.secret = secret;
		this.hasApiKey = !!key;
	}

	/**
	 * @return {Promise<Object>}
	 */
	async getBalance(){
		return {};
	}

	/**
	 * @param {String} currencyPair
	 * @param {String} direction
	 * @param {Number} [volume]
	 * @param {'base'|'quote'} [volumeCurrency]
	 * @return {Promise<Number>}
	 */
	async getPrice(currencyPair, direction, volume, volumeCurrency){
		return 0;
	}

	/**
	 * @param {String} currencyPair
	 * @param {'market' | 'limit' | 'swap'} orderType
	 * @param {'buy' | 'sell'} direction
	 * @param {Number} volume
	 * @param {Number} price
	 * @return {Promise<{orderId: String, volume: Number, volumeExecuted: Number, costs: Number, fees:{}}>}
	 */
	async createOrder(currencyPair, orderType, direction, volume, price, options = {}){
		return {orderId: '', volume: 0, volumeExecuted: 0, costs: 0, fees: {USD:0, KSM: 0, KAR:0}};
	}

	/**
	 * @return {Promise<Object>}
	 */
	async loadCurrencyPairConfig(){
		// get minimum order size, decimals points, fees etc.
		return {};
	}
}

module.exports = Client;
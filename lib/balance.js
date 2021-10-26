//@ts-check

const Client = require("../connectors/client");

class Balance{
	/** @type {Map<String, Number>} */
	#balances = new Map();

	/**
	 * @param {Client} client
	 * @param {Array<String>} currencies
	 */
	constructor(client, currencies){
		// initiate zero balances
		for( const currency of currencies ){
			this.#balances[currency] = 0;
		}
		this._isReadyHook = (x) => {};
		this.isReady = new Promise(r => this._isReadyHook = r);
		this.client = client;
		this.build();
	}

	async build(){
		const balance = await this.client.getBalance();
		for( const currency of this.currencies ){
			this.setBalance(currency, balance[currency].total );
		}
		this._isReadyHook();
	}

	/**
	 * @param {String} currency
	 * @param {Number} amount
     * @return {Void}
	 */
	setBalance(currency, amount){
		this.#balances.set(currency, amount);
	}

	/**
	 * @param {String} currency
     * @return {Number} the balance on the exchange.
	 */
	getBalance(currency){
		return this.#balances.get(currency) || 0;
	}

	/**
     * Returns all the different currencies on this exchange.
     * @return {Array<String>}       An array with all the currencies.
	*/
	get currencies(){
		return [...this.#balances.keys()];
	}
}

module.exports = Balance;
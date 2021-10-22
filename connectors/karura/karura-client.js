//@ts-check
const Client = require('../client');

class KaruraClient extends Client{
	/**
	 * @param {any} key
	 * @param {any} secret
	 */
	constructor(key, secret){
		super(key, secret);
	}
}

module.exports = KaruraClient;
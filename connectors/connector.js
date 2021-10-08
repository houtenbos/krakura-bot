//@ts-check

class Connector{
    #currencies = [];
    #currencyPairs = [];
    /**
	 * @param {String} name - Exchange eg. 'kraken', 'deribit.
	 * @param {Object} client
     */
    constructor(name, client){
        this.name = name;
        this.client = client;
        this.balance = {};
        this.config = {};
        this.status = 'offline';
        
        // set variables
        this.isReady = Promise.all([client.isReady]);
    }
}

module.exports = Connector;
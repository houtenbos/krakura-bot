//@ts-check
const KrakenAPI = require('kraken-api');
const Client = require('../client');
const _ = require('lodash');

const apiCurrencyPairs = {};
const apiCurrencies = {};

/**
 * KrakenClient connects to the Kraken.com API 
 */
class KrakenClient extends Client{
    /**
	 * @param {String}        key               API Key
	 * @param {String}        secret            API Secret
	 * @param {Object}        [logger=console]  A logger function, (default is console logging)
	 */
    constructor(key, secret, logger = console){
        super(key, secret);
        this.client = new KrakenAPI(key, secret, {timeout: 25000});
        this.logger = logger;
		this.hasApiKey = !!key;

        // load currency pair config
        this.config = {};
        this.isReady = this.loadconfig();
    }

    /**
     * get price
     * @param {String}        currencyPair      Currency pair to be traded
     * @param {String}        direction              Side, buy or sell
     * @param {Number}        [volume]            Order volume
     * @param {'base'|'quote'}[volumeCurrency]           Order volume
     * @return {Promise<Number>}                        
     */
    async getPrice(currencyPair, direction, volume, volumeCurrency = 'base'){
        const orderbook = await this.getOrderbook(currencyPair, 500);
        const side = direction == 'buy' ? 'asks' : 'bids';
        let remainingVolume = volume;
        if( !(remainingVolume > 0) )
            return orderbook[side][0].price;

        let weightedPrice = 0;
        if( volumeCurrency == 'base' ){
            for( const order of orderbook[side] ){
                const fillVolume = Math.min(order.volume, remainingVolume);
                weightedPrice += order.price * fillVolume;
                remainingVolume -= fillVolume;
                if( remainingVolume <= 0 )
                    break;
            }
            const filledVolume = volume-remainingVolume;
            weightedPrice /= filledVolume;
        }
        else{
            let baseVolume = 0;
            for( const order of orderbook[side] ){
                const fillVolume = Math.min(order.volume * order.price, remainingVolume);
                weightedPrice += fillVolume;
                remainingVolume -= fillVolume;
                baseVolume += fillVolume / order.price;
                if( remainingVolume <= 0 )
                    break;
            }
            weightedPrice /= baseVolume;
        }
        return weightedPrice;
    }

    /**
     * createOrder places an order on kraken.
     * @param {String}        currencyPair      Currency pair to be traded
     * @param {String}        orderType         Order type - market|limit|stop-loss|take-profit|stop-loss-limit|take-profit-limit|settle-position 
     * @param {String}        direction              Side, buy or sell
     * @param {Number}        volume            Order volume
     * @param {Number}        price             Order price
     * @param {Object}        [options]         Options such as userref
     * @return {Promise<Object>}                         Object w/ {orderId, description, status}
     */
    async createOrder(currencyPair, orderType, direction, volume, price, options = {}){
        const timeOpened = new Date();
        const payload = [currencyPair, orderType, direction, volume, price, options, timeOpened];

		await this.isReady;
        let volumeDecimals = 8, priceDecimals = 1, minimumVolume = 0.0002;
        if( this.config[currencyPair] ){
            volumeDecimals = this.config[currencyPair].volumeDecimals;
            priceDecimals = this.config[currencyPair].priceDecimals;
            minimumVolume = this.config[currencyPair].minimumVolume;
        }

        const roundedVolume = toFixedNoRounding(volume, volumeDecimals);
        if( roundedVolume < minimumVolume ){
            const error = new Error('Invalid order size');
            error.name = "ExchangeError";
            throw error;
        }

        const param = {
            ordertype: orderType,
            type: direction,
            volume: roundedVolume,
            pair: parseApiCurrencyPair(currencyPair),
        }
        if( orderType == 'limit' ){
            param.price = price.toFixed(priceDecimals);
        }

        // add options
        const supportedOptions = ['oflags', 'userref', 'deadline', 'timeinforce'];
        for( const [key, option] of Object.entries(options) ){
            if( supportedOptions.includes(key) )
                param[key] = option;
            else
                this.logger.warn(`Unsupported option: ${key} - ${option}`);
        }

        try{
            const response = await this.client.api('AddOrder', param, _.noop);
            if( orderType == 'market' )
                return await this.checkMarketOrder(response.result.txid[0]);
            else
                return await this.checkOrder(response.result.txid[0]);
        }
        catch(error){
            return await this.handleErrors(error, this.createOrder, payload);
        }
    }
    /**
     * cancelOrder cancels open order
     * @param {String}        orderId       Order id of order to be cancelled
     * @return {Promise<Object>}            {status: 'ok'}
     */
    async cancelOrder(orderId){
        const payload = [orderId];

        const param = {
            txid: orderId,
        }

        try{
            const response = await this.client.api('CancelOrder', param, _.noop);
			return response;
        }
        catch(error){
            return await this.handleErrors(error, this.cancelOrder, payload);
        }
    }

    /**
     * Checks the status of an open/closed/cancelled order 
     * @param {String}        		orderId       Order id of order to be cancelled
     * @return {Promise<Object>}                  Order object w/ {orderId, status, currencyPair, ...}
     */
    async checkOrder(orderId){
        const payload = [orderId];
        const params = {txid: orderId};

        try{
            const response = await this.client.api('QueryOrders', params, _.noop);
            return this.parseOrders(response.result)[0] || {};
        }
        catch(error){
            return this.handleErrors(error, this.checkOrder, payload);
        }
    }
    /**
     * Checks the status of an open market order. Retries if the order is still open.
     * @param {String}        		orderId       Order id of order to be cancelled
     * @return {Promise<Object>}                  Order object w/ {orderId, status, currencyPair, ...}
     */
    async checkMarketOrder(orderId){
        const order = await this.checkOrder(orderId);
        if( order.status == 'open' ){
            await new Promise(r => setTimeout(r, 1000));
            return this.checkMarketOrder(orderId);
        }
        return order;
    }
    /**
     * Gets the account balance on Kraken and calculates the free and placed balance 
     * @return {Promise<Object>}                     Balance object w/ {currency: {total, free, placed}, ...}
     */
    async getBalance(){
        const payload = [];
        try{
            const response = await this.client.api('Balance', {}, _.noop);
            return this.parseBalance(response.result);
        }
        catch(error){
            return this.handleErrors(error, this.getBalance, payload);
        }
    }

    /**
	 * @param {{ [s: string]: any; } | ArrayLike<any>} krakenBalance
	 * @return {Object}
	 */
    parseBalance(krakenBalance){
        const balance = {};
        for( const [c, b] of Object.entries(krakenBalance) ){
            const currency = apiCurrencies[c];
            balance[currency] = {total: parseFloat(b), free: parseFloat(b), placed: 0};
        }
        return balance;
    }
    /**
     * Gets the orderbook of a currencyPair
     * @param {String}        currencyPair  Currency Pair of the orderbook
     * @param {Number}        [count=100]         number of orderbook enties
     * @return {Promise<Object>}                     Orderbook object w/ {bids: [{side, price, volume}, ...], asks: [{...}, ...]}
     */
    async getOrderbook(currencyPair, count=100){
        let orderbook = {};
        const book = {};
        const apiCurrencyPair = parseApiCurrencyPair(currencyPair);

        try{
            const response = await this.client.api('Depth', {pair: apiCurrencyPair, count}, _.noop);
            orderbook = Object.values(response.result)[0];
        }
        catch(error){
            // some error
            return this.handleErrors(error, this.getOrderbook, [currencyPair])
        }
        book.bids = [];
        book.asks = [];

        // construct input data for orderbook object from response
        orderbook.bids.forEach(order =>
            book.bids.push({
                id: '',
                side: 'bids',
                price: +order[0],
                volume: +order[1],
                }));
        orderbook.asks.forEach(order =>
                book.asks.push({
                    id: '',
                    side: 'asks',
                    price: +order[0],
                    volume: +order[1],
                }));

        // rewrite orderbook data to orderbook object format
        return book;
    }

    async getAssetPairs(){
        const payload = [];
        let result = {};
        const params = {};

        try{
            result = await this.client.api('AssetPairs', params, _.noop);
        }
        catch(error){
            return this.handleErrors(error, this.getAssetPairs, payload);
        }

        return result.result; 
    }

    async getFees(){
        const params = {pair: 'XBTEUR'};
        try{
            return await this.client.api('TradeVolume', params, _.noop);
        }
        catch(error){
            return this.handleErrors(error, this.getFees, []);
        }
    }

    async loadconfig(){
        if( !this.config.currencyPairs ){
            const assetPairs = await this.getAssetPairs();
            this.config = {currencyPairs: {}, pairDecimals: {}, volumeDecimals: {}, minOrderAmount: {}, minOrderVolume: {}};
            for( const [key, value] of Object.entries(assetPairs) ){
                const currencyPair = value.wsname;
                if( !currencyPair )continue;

                this.config[currencyPair] = {
                    priceDecimals: value.pair_decimals,
                    volumeDecimals: value.lot_decimals,
                    minimumVolume: value.ordermin *1,
                    name: key,
                    altName: value.altname,
                    feeCurrency: value.fee_volume_currency
                };
                this.config.currencyPairs[currencyPair] = key;
                this.config.volumeDecimals[currencyPair] = value.lot_decimals;
                this.config.pairDecimals[currencyPair] = value.pair_decimals;
                this.config.minOrderVolume[currencyPair] = +value.ordermin;
                this.config.minOrderAmount[currencyPair] = undefined;
                // save currencypairs
                apiCurrencyPairs[key] = currencyPair;
                apiCurrencyPairs[value.altname] = currencyPair;
                // save currencies
                const [base, quote] = currencyPair.split('/');
                apiCurrencies[value.base] = base;
                apiCurrencies[value.quote] = quote;
            }
			if( this.hasApiKey ){
				const fees = await this.getFees();
				this.config.fees = {taker: +fees?.result?.fees?.XXBTZEUR?.fee/100 || undefined, maker: +fees?.result?.fees_maker?.XXBTZEUR?.fee/100 || 0};
			}
		}
    }

    async loadAltNames(){
        if( !this.altNames ){
            const assetPairs = await this.getAssetPairs();
            this.altNames = {};
            for( const [key, value] of Object.entries(assetPairs) ){
                this.altNames[value.altname] = key;
            }
        }
    }

    async getOpenOrders(options = {}){
        const payload = [];
        let result = {};
        const params = {};

        try{
            result = await this.client.api('OpenOrders', params, _.noop);
        }
        catch(error){
            return this.handleErrors(error, this.getOpenOrders, payload);
        }

        return this.parseOrders(result.result.open);
    }

    async getClosedOrders(options = {}){
        const payload = [];
        let result = {};
        const params = {};
        
        const optionalOptions = ['trades', 'userref', 'start', 'end', 'ofs', 'closetime'];
        Object.keys(options).forEach( key => {
            if( optionalOptions.includes(key) ){
                params[key] = options[key];
            }
        });

        try{
            result = await this.client.api('ClosedOrders', params, _.noop);
        }
        catch(error){
            return this.handleErrors(error, this.getClosedOrders, payload);
        }

        return this.parseOrders(result.result.closed);
    }

    parseOrders(orders){
        const result = [];
        for( const [txid, order] of Object.entries(orders) ){
            const currencyPair = parseApiCurrencyPair(order.descr.pair);
            const feeCurrency = currencyPair.split('/')[1]; 
            const o = {
                txid,
                costs: parseFloat(order.cost),
                fees: {[feeCurrency]: +order.fee},
                orderId: txid,
                timeOpened: new Date(order.opentm * 1000),
                orderType: order.descr.ordertype,
                type: order.descr.type,
                status: order.status == 'canceled' ? 'cancelled' : order.status,
                currencyPair,
                price: parseFloat(order.descr.price),
                priceExecuted: parseFloat(order.price),
                volume: parseFloat(order.vol),
                volumeExecuted: parseFloat(order.vol_exec),
            }
            if( 'reason' in order )o.reason = order.reason;
            if( 'closetm' in order)o.timeClosed = new Date(order.closetm*1000);
                
            result.push(o);
        };
        result.sort((a,b) => a.timeOpened.getTime()-b.timeOpened.getTime() );
        return result;    
    }

    async handleErrors(error, func, payload){
        this.logger.error('Kraken API:', {error: error.name, message: error.message, function: func.name, payload: JSON.stringify(payload)});
        const mutatingFunctionNames = ['createOrder', 'cancelOrder', 'withdrawFunds'];
        const retry = async (sleep = 0) => {if( sleep ) await new Promise(r => setTimeout(r, sleep)); return this[func.name](...payload)};
        const solve = () => {
            switch(func.name){
                case 'createOrder':
                    return this.checkCreatedOrder(...payload);
                case 'cancelOrder':
                    return this.checkCancelledOrder(...payload);
        }}
        // connection error?
        switch(error.name){
            // network errors
            case 'RequestError':
            case 'TimeoutError':
            case 'ConnectionError':
            if( !mutatingFunctionNames.includes(func.name) ){
                // retry
                return retry();
            }
            else{
                // figure out what to do
                return solve();
            }

            case 'EOrder':
                if(func.name == 'cancelOrder')
                    return solve();
                if( error.message.includes("nsufficient funds") ){
                    error.name = 'InsufficientFunds';
                    throw error;
                }
                if( error.message.includes("Rate limit") ){
                    error.name = "RateLimitExceeded";
                    throw error;
                }
            case 'Malformed request':
            case 'Pair(s) not found':
            case 'EGeneral':
                throw error;
        }
        // retry function for invalid nonce
        switch(error.message){
            case('API:Invalid nonce'):
                return retry();
            case('API:Rate limit exceeded' ):
                const p = pause.time; 
                this.logger.warn(`Rate limit exceeded, Retry ${func.name} in ${p}s`);
                return retry(p);
            case('Kraken connection closed.'):
            case('Kraken not connected.'):
                this.logger.warn('Kraken connection closed:', error, 'Retry in 1s');
                return retry(1000);
            default:
                this.logger.error('Kraken API: Unknown error,', error.name, JSON.stringify(error.message));
                throw error;
        }

    }

    async checkCancelledOrder(id){
        const payload = {id}; 
        this.logger.warn(`Broken cancel order: ${JSON.stringify(payload)}`);

        const order = await this.checkOrder(id);

        if(!_.isObject(order) ){
            throw new Error(`Refetched broken cancel, cannot find order ${id}`);
        }

        // @ts-ignore
        switch(order.status){
            case 'open':
                this.logger.warn('Broken cancel order is still open, retry cancelling');
                return this.cancelOrder(id);
            case 'closed':
                this.logger.warn('Broken cancel order is already closed');
                return order;
            case 'cancelled':
                this.logger.info('Order was successfully cancelled');
                return order;
            default:
                this.logger.error(`Unknown order status while cancelling order: ${JSON.stringify(order)}`);
                throw new Error(`Unknown order status while cancelling order: ${JSON.stringify(order)}`);
        }
    }

    async checkCreatedOrder(currencyPair, orderType, type, volume, price, options, timeOpened){
        const payload = [currencyPair, orderType, type, volume, price, options,];
        const params = {currencyPair, orderType, type, volume, price, options};

        this.logger.warn(`Broken create order: ${JSON.stringify(params)}`);

        // check open orders
        let order;
        await new Promise(r => setTimeout(r, 2000)); // sleep for half a second to let kraken process order
        const openOrders = await this.getOpenOrders();
        this.logger.debug(`Looking for order ${JSON.stringify(params)}`);
        for( const openOrder of openOrders ){
            this.logger.debug(`Open order: ${JSON.stringify(openOrder)}`);
            if( openOrder.currencyPair == currencyPair && 
                openOrder.type == type &&
                openOrder.volume == volume && 
                openOrder.price == price &&
                openOrder.timeOpened >= timeOpened){
                    order = openOrder;
                    break;
                }
        }

        // check closed orders
        if(!order){
            const closedOrders = await this.getClosedOrders();
            for( const closedOrder of closedOrders ){
                this.logger.debug(`Closed order: ${JSON.stringify(closedOrder)}`);
                if( closedOrder.currencyPair == currencyPair && 
                    closedOrder.type == type &&
                    closedOrder.volume == volume && 
                    closedOrder.price == price &&
                    closedOrder.timeOpened >= timeOpened ){
                        order = closedOrder;
                        break;
                    }
            }
        }

        if(!order) {
            // retry opening
            this.logger.warn(`Could not find broken order, appears not created:, ${JSON.stringify(payload)}`);
            // @ts-ignore
            return this.createOrder(...payload);
        }
        else{
            this.logger.info(`Broken order was succesfully placed: ${JSON.stringify(order)}`);
            return order;
        }
    }
}

module.exports = KrakenClient;

function parseApiCurrencyPair(currencyPair){
    if( typeof(currencyPair)!='string' )
        return;
	if( currencyPair.includes('/') ){
		const [base, quote] = currencyPair.split('/');
		return base + quote;
	}
	else{
		return apiCurrencyPairs[currencyPair] || currencyPair;
	}
}


function toFixedNoRounding(value, n){
    if( n == 0 )
        return Math.floor(value).toString();
    // do type checking
    const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
    const a = value.toString().match(reg)[0];
    const dot = a.indexOf(".");
    if (dot === -1) { // integer, insert decimal dot and pad up zeros
        return a + "." + "0".repeat(n);
    }
    const b = n - (a.length - dot) + 1;
    return b > 0 ? (a + "0".repeat(b)) : a;
}

// function for call rate limiter.
const pause = new (function() {
    let pause = 0;
    const error = new Error('Kraken rate limit exceeded, pause is over 100s');
    error.name = 'RateLimitExceeded';
    Object.defineProperty(this, 'time', {
        get: () => { if( pause > 100*1000 )throw error; return pause += 3000 }
    })
    setInterval(() => pause = Math.max(0, pause - 1000), 1000);
})
const WebSocket = require('ws');
const ReconnectingWebSocket = require('reconnecting-websocket');
const EventEmitter = require('events');
const _ = require('lodash');

const privateSubscriptions = ['ownTrades', 'openOrders'];
const publicSubscriptions = ['ticker', 'ohlc', 'trade', 'book', 'spread'];

class KrakenWebsocket extends EventEmitter{
    constructor(logger = console) {
        super();

        this.logger = logger;

        // url private websocket
        this.publicWebsocketURI = "wss://ws.kraken.com";
        this.privateWebsocketURI = "wss://ws-auth.kraken.com";
        this.websocketURI = "wss://ws-auth.kraken.com";
        
        // object to store channel id
        this.channelID = {};
        this.status = 'offline';

        // status variables
        this.connected = false;

        this.isReadyHook = false;
        this.isReady = new Promise((r => this.isReadyHook = r));

        this.isAuthenticatedHook = false;
        this.isAuthenticated = new Promise((r => this.isAuthenticatedHook = r));

        this.authenticated = false;

        this.afterReconnect;
    
        // lists 
        this.queue = [];
        this.subscriptions = [];
    
        // id to recognize requests
        this.id = +new Date;
    }

    newId() {
        return ++this.id;
    }

    _connect(){
        if(this.connected) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.socket = new ReconnectingWebSocket(this.websocketURI, [], {WebSocket});

            this.socket.addEventListener('open', this.onOpen.bind(this, resolve));
            this.socket.addEventListener('close', this.onClose.bind(this, resolve));
            this.socket.addEventListener('error', this.onError.bind(this));
            this.socket.addEventListener('message', this.processMessage.bind(this));
        });
    }

    async connect(){
        if( this.token) {
            await this._connect();
        }
        else{
            this.websocketURI = this.publicWebsocketURI;
            await this._connect();
        }
    }

    async authenticate(){
        if(!this.connected) {
            this.logger.error('Not connected, cannot authenticate');
            return;
        }
        try{
            await this.subscribe('openOrders');
        }
        catch(error){
            this.logger.error('Subscribing to open orders failed:', error.message);
        }
        try{
            await this.subscribe('ownTrades');
        }
        catch(error){
            this.logger.error('Subscribing to own trades failed:', error.message);
        }

        this.authenticated = true;
        this.isAuthenticatedHook();
    }

    disconnect(){
        if (!this.socket){
            this.logger.error('Kraken socket: could not disconnect (not connected)');
            return;
        }
        try{
            this.socket.close();
        }
        catch(err){
            // probably closed before disconnecting.
            this.logger.error(`Kraken socket: ${err}`);
        }
        this.socket = null;
        this.connected = false;
        this.isReadyHook = false;
        this.isReady = new Promise((r => this.isReadyHook = r));
        this.isAuthenticatedHook = false;
        this.isAuthenticated = new Promise((r => this.isAuthenticatedHook = r));
        return;
    }

    async reconnect(){
        if( !this.socket )
            throw Error('No websocket to reconnect to.');
        
        this.socket.reconnect();
        
        await new Promise(r => setTimeout(r, 1000));

        // resubscribe to all channels
        this.subscriptions.forEach(async sub => {
            try{
                await this.subscribe(sub.subscription, sub.args);
            }
            catch(error){
                this.logger.warn('Resubscribe after reconnect failed:', error.message);
            }
        });

    }

    async onOpen(resolve){
        this.logger.info('Kraken connection opened.');
        this.keepAlive();
        this.connected = true;

        if( this.token )
            await this.authenticate();

        this.isReadyHook();
        resolve(); 
    }

    async onClose(resolve, event){
        this.logger.error('Kraken closed connection. Code:', event.code, ', Reason:', event.reason, ', Clean:', event.wasClean);
        // clear ping timeout
        clearTimeout(this.pingTimeout);
        // empty queue and set state
        this.queue.forEach((queueElement) => {
            const error = new Error('Kraken connection closed.');
            error.stack = queueElement.stack;
            error.name = 'ConnectionError';
            queueElement.onError(error);
        });
        this.queue = [];
        this.authenticated = false;
        this.connected = false;
        resolve();
    }

    onError(err) {
        if (!err) {
            return;
        }
        if (err.message === 'unexpected server response (429)') {
            throw new Error(
                'You are connecting too fast and are being throttled! Make sure you subscribe to multiple books on one connection.'
            );
        }
        else{
            this.logger.error(err.message);
        }
    }

    processMessage(data){
        const message = JSON.parse(data.data);

        if( _.isObject(message) && 'event' in message ){
            switch(message.event){
                case 'systemStatus':
                    return this.processSystemStatus(message);
                case 'pong':
                    return this.processPong();
                case 'heartbeat':
                    return;
                case 'subscriptionStatus':
                    this.processSubscriptionStatus(message);
                    break;
                case 'addOrderStatus':
                case 'cancelOrderStatus':
                    break;
                default:
                    this.logger.warn('Kraken socket: Unknown message,', message);
            }
        }
        if( _.isArray(message) ){
            if( typeof message[0] == 'number'){
                if( this.channelID[message[0]] ){
                    // public websocket data
                    this.emit('public', message);
                }
                else{
                    this.logger.warn(`Kraken socket: Unknown channelId, ${message}`);
                }
                
            }
            else{
                // private websocket data
                switch( message[1] ){
                    case 'openOrders':
                        this.emit('own order', message);
                    case 'ownTrades':
                        this.emit('own trade', message);
                    default:
                        this.logger.warn('Kraken socket: Unknown message,', message);
                }
            }
       }

        // find request
        const request = this.findRequest(message.reqid);

        if(!request) {
            if( message.event == 'subscriptionStatus')
                return;
            else
                return this.logger.error('Kraken socket: Received response to request not send:', message);
        }

        // resolve request
        this.resolveRequest(request, message);
    }

    keepAlive(){
        const payload = JSON.stringify({
            "event": "ping",
            "reqid": 7
          });
        this.pingInterval = setInterval(() => {
            this.socket.send(payload);
        }, 10*1000);
        this.pingTimeout = setTimeout(() => {
            this.logger.error('Kraken socket: didnt respond to initial ping..')
            this.reconnect();
        }, 19*1000);
    }

    processPong(){
        // set timer to reconnect if connection gets stale
        clearTimeout(this.pingTimeout);
        this.pingTimeout = setTimeout(() => {
            this.logger.error('Did not receive pong, reconnect.')
            this.reconnect();
        }, 19*1000);
    }

    processSubscriptionStatus(message){
        if(message.status === 'subscribed'){
            const currencyPair = message.pair;
            const name = message.subscription.name;
            this.channelID[message.channelID] = {name, currencyPair};
            this.logger.info(`Subscribed for ${message.pair} ${name} feed`);
        }
        else if(message.status === 'unsubscribed'){
            delete(this.channelID[message.channelID]);
            this.logger.warn(`Unsubscribed for ${message.channelName} feed`);
        }
        else{
            this.logger.warn('Subscription:', message);
        }

        // find and resolve request
        const request = this.findRequest(message.reqid);
        if( request )
            this.resolveRequest(request, message); 
    }

    async sendRequest(payload, fireAndForget){
        if(this.socket.readyState != this.socket.OPEN && this.socket.readyState != this.socket.CONNECTING) {
            throw new Error('Kraken not connected.');
        }
    
        let p;
        if(!fireAndForget) {
            let onDone;
            let onError;
            p = new Promise((r, rj) => {onDone = r; onError = rj;});
            
            // add request id if payload doesnt have it already
            payload.reqid = payload.reqid || this.newId();
    
            this.queue.push({
                stack: new Error().stack,
                requestedAt: +new Date,
                id: payload.reqid,
                onDone,
                onError
            });
        }
        this.socket.send(JSON.stringify(payload));
        return p;
    }

    async subscribe(subscription, args){
        // check input
        if( !_.isString(subscription) || (args && !_.isObject(args)) ){
            throw new Error('Invalid input for subscribe');
        }
        if( !this.subscriptions.map(s => s.subscription ).includes(subscription) )
            this.subscriptions.push({subscription, args});

        const payload = {
            event: 'subscribe',
            subscription: {name: subscription},
            reqid: this.newId()
        };

        if( args && 'currencyPairs' in args ){
            payload.pair = [];

            args.currencyPairs.forEach( cp => {
                payload.pair.push(cp)
            });
            if( 'depth' in args ){
                if( [10, 25, 100, 500, 1000].includes(args.depth) )
                    payload.subscription.depth = args.depth;
                else
                    this.logger.warn(`Kraken websocket: Invalid book depth: ${args.depth}`);
            }
        }

        // check if subscription is done via the correct websocket
        if( privateSubscriptions.includes(subscription) ){
            if(!this.token) {
                throw new Error('Kraken socket: No token available for private subscription.');
            }
            payload.subscription.token = this.token;
        }
        else if(this.token){
            throw new Error('Kraken socket: Subscribing to public channel on private websocket is not allowed.');
        }

        // wait for connection to be made
        else await this.isReady;

        return this.sendRequest(payload);
    }

    findRequest(id) {
        for(let i = 0; i < this.queue.length; i++) {
            const req = this.queue[i];
            if(id === req.id) {
                this.queue.splice(i, 1);
                return req;
            }
        }
    }

    resolveRequest(request, message){
        message.requestedAt = request.requestedAt;
        message.receivedAt = +new Date;
        if( 'errorMessage' in message ){
            const error = new Error(JSON.stringify(message.errorMessage));
            error.name = message.errorMessage.split(':')[0];
            error.stack = request.stack;
            request.onError( error );
        }
        else{
            request.onDone(message);
        }
    }
}

module.exports = KrakenWebsocket
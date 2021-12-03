const mongoStream = require('stream-to-mongo-db').streamToMongoDB;
const bunyan = require('bunyan');
const fs = require('fs');
const config = require('../../config/user_config.json');

class Logger{
    constructor(name = 'krakura' ){
        this.log = bunyan.createLogger({
            name,
            streams: [createStream(name)]
        });
    }
    error(msg){
        console.log(msg);
        this.log.error(msg);
    }
    warn(msg){
        console.log(msg);
        this.log.warn(msg);
    }
    info(msg){
        console.log(msg);
        this.log.info(msg);
    }
    debug(msg){
        console.log(msg);
        this.log.debug(msg);
    }
    trace(msg){
    }
}

function createStream(name = 'krakura'){
    const writableStream = new MyStream({
        dbURL : (config.address || "mongodb://127.0.0.1:27017/") + "krakura_log",
        collection :  name,
        useUnifiedTopology: true
    });

    const mongoDbStream = {
        type: 'raw',
        level: 'debug',
        stream: writableStream
    };

    return mongoDbStream;
}

class MyStream{
    constructor(options){
        this.mongoStream = mongoStream(options);
        this.levelToName = new Map([[bunyan.TRACE, 'trace'], [bunyan.DEBUG, 'debug'], [bunyan.INFO, 'info'], [bunyan.WARN, 'warn'], [bunyan.ERROR, 'error'], [bunyan.FATAL, 'fatal']]);
    }
    write(rec){
        rec.msg = this.levelToName.get(rec.level) + ': '+ rec.msg;
        this.mongoStream.write(rec);
    }
}


module.exports = Logger;

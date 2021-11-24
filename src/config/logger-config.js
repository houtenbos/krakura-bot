const bunyan = require('bunyan');
const fs = require('fs');
const logDir = './logs';

if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

class Logger{
    constructor(name = 'krakura' ){
        this.log =  bunyan.createLogger({
            name,
            streams: [{
                type: 'rotating-file',
                path: `${logDir}/krakura.log`,
                period: '1d',   
                count: 5
            },
            {
                stream: process.stdout
            }
        ]
        })
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

module.exports = Logger;

const bunyan = require('bunyan');
const fs = require('fs');
const logDir = './logs';

if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

module.exports = bunyan.createLogger({
    name: 'krakura',
    streams: [{
        type: 'rotating-file',
        path: `${logDir}/krakura.log`,
        period: '1d',   
        count: 5
    },
    {
        level: config.logger.stdOutLevel || 'debug',
        stream: process.stdout
    }
]
});
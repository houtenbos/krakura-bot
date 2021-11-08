const bunyan = require('bunyan');

module.exports = bunyan.createLogger({
    name: 'krakura',
    streams: [{
        type: 'rotating-file',
        path: './logs/krakura.log',
        period: '1d',   
        count: 5
    }]
});
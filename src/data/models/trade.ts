import * as mongoose from '../connection';

const schema = new mongoose.Schema({
    buyOrder: {
        type: Object,
        required: true,
    },
    sellOrder: {
        type: Object,
        required: true, 
    },
    time: {
        type: Date,
        required: true
    },
    profitQuote: {type: Number},
    profitBase: {type: Number},
    profit: {type: Number}
});

export const Trade = mongoose.model('trade', schema);
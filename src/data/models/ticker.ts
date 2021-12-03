import * as mongoose from '../connection';

const schema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        minlength: 3,
    },
    assetPair: {
        type: String,
        required: true, 
        minlength: 3,
    },
    ask: {
        type: Number,
        required: true,
        min: 0
    },
    bid: {
        type: Number,
        required: true,
        min: 0
    },
    time: {
        type: Date,
        required: true
    }
});

export const Ticker = mongoose.model('ticker', schema);
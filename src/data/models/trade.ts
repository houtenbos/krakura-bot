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
    }
});

export const Trade = mongoose.model('trade', schema);
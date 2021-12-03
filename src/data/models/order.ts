import * as mongoose from '../connection';

const orderSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 55
    },
    assetPair: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 44
    },
    time: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 10
    },
    direction: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 4 
    }, 
    volume: {
        type: Number,
        min: 0,
    },
    price: {
        type: Number,
        min: 0,
    },
    orderId: {
        type: String,
    },
    volumeExecuted: {
        type: Number,
        min: 0,
    },
    costs: {
        type: Number,
    },
    fees: {
        type: Object,
    }
});


export const Order = mongoose.model('order', orderSchema);
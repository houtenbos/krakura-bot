import * as mongoose from '../connection';

const balanceSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 55
    },
    currency: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 44
    },
    time: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
        required: true
    },
    free: {
        type: Number,
        required: true
    },
    placed: {
        type: Number,
        required: true
    },
});


export const Balance = mongoose.model('balance', balanceSchema);
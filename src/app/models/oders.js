const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const order = new Schema({
    idOrder: Number,
    phoneNumber: String,
    provider: String,
    serviceName: String,
    priceUser: Number,
    oldBalance: Number,
    content: String,
    status: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('orders', order)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const count = new Schema({
  countId: Number,
  total: Number
}, {
    timestamps: true,
});

module.exports = mongoose.model('counts', count)
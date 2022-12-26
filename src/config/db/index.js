const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://admin:Admin%40123@cluster0.ceikajt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connect Thanh Cong');
    } catch (error) {
        console.log('Connect That Bai');
    }
}

module.exports = { connect }
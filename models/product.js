const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('product', cartSchema);
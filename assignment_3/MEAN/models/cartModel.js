const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('CartItem', cartItemSchema);
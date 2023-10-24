const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartModel');

// Create a new item in the cart
router.post('/', async (req, res) => {
  try {
    const newItem = new CartItem(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all items in the cart
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a cart item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a cart item
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.findByIdAndRemove(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

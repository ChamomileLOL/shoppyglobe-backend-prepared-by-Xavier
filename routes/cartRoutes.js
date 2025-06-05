const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const authMiddleware = require('../middleware/authmiddleware');
const { addToCart, updateCartItem, removeFromCart } = require('../controllers/cartController');

// Create
router.post('/', authMiddleware, addToCart);

// Update
router.put('/:id', authMiddleware, updateCartItem);

// Delete
router.delete('/:id', authMiddleware, removeFromCart);

// ✅ New: Read (View Cart)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

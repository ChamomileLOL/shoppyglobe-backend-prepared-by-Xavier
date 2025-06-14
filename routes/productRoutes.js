// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Ensure this matches your file structure

// Create a product (POST /products)
router.post('/', async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      stockQuantity: stock
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch all products (GET /products)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch product by ID (GET /products/:id)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

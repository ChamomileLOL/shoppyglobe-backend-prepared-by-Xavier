const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    const newProduct = new Product({ name, price, description, stock });
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

module.exports = { getAllProducts, getProductById, createProduct };

// models/product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  stock: { type: Number, default: 0 }  // 🔄 Updated field name
});

module.exports = mongoose.models.Product || 
mongoose.model('Product', productSchema);

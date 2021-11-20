const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  image: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

ProductSchema.plugin(idvalidator);
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
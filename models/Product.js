const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;

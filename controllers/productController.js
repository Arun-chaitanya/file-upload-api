const { StatusCodes } = require("http-status-codes");
const ProductModel = require("../models/Product");

const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await ProductModel.create(req.body);
  return res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = { createProduct, getAllProducts };

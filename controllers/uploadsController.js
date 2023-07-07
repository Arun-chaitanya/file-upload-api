const { StatusCodes } = require("http-status-codes");
const path = require("path");
const { BadRequestError } = require("../errors");
const cloudinary = require("cloudinary").v2;

const uploadProductImageLocal = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError("No file uploaded");
  }

  const productImage = req.files.image;

  if (!req.files.mimetype.startsWith("image")) {
    throw new BadRequestError("Please Upload Image");
  }

  const maxSize = 1000 * 1024;

  if (!req.files.size > maxSize) {
    throw new BadRequestError("Please Upload Image smaller than 1MB");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError("No file uploaded");
  }

  const productImage = req.files.image;

  if (!req.files.mimetype.startsWith("image")) {
    throw new BadRequestError("Please Upload Image");
  }

  const maxSize = 1000 * 1024;

  if (!req.files.size > maxSize) {
    throw new BadRequestError("Please Upload Image smaller than 1MB");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImage };

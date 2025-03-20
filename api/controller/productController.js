import asyncHandler from "express-async-handler";
import Product from "../model/Product.js";
import { cloudUpload } from "./../utils/cloudinary.js";

// get all products or list products
export const listProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (!products || products.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "No Product Found" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Product fetch success", products });
});

// create product
export const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category, subCategory, sizes, bestSeller } =
    req.body;

  if (!name || !price || !description || !category) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  // images
  let img = [];
  if (req.files && req.files.length > 0) {
    img = await cloudUpload(req.files);
  }

  // Create new product
  const product = await Product.create({
    name,
    price: Number(price),
    description,
    category,
    subCategory,
    sizes: JSON.parse(sizes),
    bestSeller,
    photo: img,
  });

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    product,
  });
});

// remove products
export const removeProduct = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  return res.status(200).json({ success: true, message: "Product removed" });
});

// single product
export const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  return res
    .status(200)
    .json({ success: true, message: "product get success", product });
});

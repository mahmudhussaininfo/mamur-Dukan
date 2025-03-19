import asyncHandler from "express-async-handler";
import Product from "../model/Product.js";
import { cloudUpload } from "./../utils/cloudinary.js";

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
  let img = null;
  if (req.file) {
    const file = await cloudUpload(req);
    img = file.secure_url;
  }

  // Create new product
  const product = await Product.create({
    name,
    price,
    description,
    category,
    subCategory,
    sizes,
    bestSeller,
    photo: img,
  });

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    product,
  });
});

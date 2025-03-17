// create product
import asyncHandler from "express-async-handler";
export const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category, subCategory, sizes, bestSeller } =
    req.body;
});

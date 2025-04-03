import asyncHandler from "express-async-handler";
import User from "../model/User.js";

// add to cart
export const addToCart = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const { productId, size } = req.body;

  const userData = await User.findOne({ email });
  const cartData = await userData.cart;

  if (cartData[productId]) {
    if (cartData[productId][size]) {
      cartData[productId][size] += 1;
    } else {
      cartData[productId][size] = 1;
    }
  } else {
    cartData[productId] = {};
    cartData[productId][size] = 1;
  }
  await User.findOneAndUpdate({ email }, { cart: cartData }, { new: true });
  res.status(200).json({ success: true, message: "Product added to cart" });
});

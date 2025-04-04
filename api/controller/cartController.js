import asyncHandler from "express-async-handler";
import User from "../model/User.js";

// get user cart
export const getCart = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const userData = await User.findOne({ email });
  const cartData = await userData.cart;

  res.status(200).json({ success: true, user: userData, cart: cartData });
});

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

// update cart
export const updateCart = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const { productId, size, quantity } = req.body;

  const userData = await User.findOne({ email });
  const cartData = await userData.cart;

  cartData[productId][size] = quantity;
  await User.findOneAndUpdate({ email }, { cart: cartData }, { new: true });
  res.status(200).json({ success: true, message: "updated cart" });
});

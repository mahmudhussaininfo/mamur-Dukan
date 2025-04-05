// order create
import asyncHandler from "express-async-handler";
import Order from "../model/Order.js";
import User from "./../model/User.js";

// place order
export const placeOrder = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const user = email;

  const { items, amount, address } = req.body;

  const orderData = {
    user,
    items,
    amount,
    address,
    payment: false,
    paymentMethod: "Cash",
  };

  // create order
  const order = new Order(orderData);
  await order.save();

  // update user order history
  await User.findOneAndUpdate(
    { email },
    {
      cart: {},
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    message: "Order placed successfully",
    order,
  });
});

// get user order
export const getOrders = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const userOrders = await Order.find({
    user: email,
  });
  res.status(200).json({ success: true, userOrders, user: email });
});

// list All Orders
export const listOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "name email");
  res.status(200).json({ success: true, orders });
});

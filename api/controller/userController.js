import User from "../model/User.js";
import bcrypt from "bcryptjs";
import { tokenEncode } from "../utils/token.js";
import asyncHandler from "express-async-handler";

// get all user
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (!users || users.length === 0) {
    return res.status(400).json({ success: false, message: "No User Found" });
  }
  return res
    .status(200)
    .json({ success: true, message: "user fetch success", users });
});

// register user
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res
      .status(400)
      .json({ success: false, message: "Email already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
});

// login user
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOnee({ email });
  if (!user)
    return res.status(400).json({ success: false, message: "No User Found" });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect Password" });
  }

  let token = await tokenEncode(email);

  const options = {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.cookie("Token", token, options);

  return res.status(201).json({
    success: true,
    message: "User login successfully",
    user,
    token,
  });
});

// get auth user
export const getAuthUser = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email }).select("-password");
  if (!user) {
    return res.status(400).json({ success: false, message: "No User Found" });
  }
  res.status(200).json({ success: true, user });
});

// reset password
export const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const { password, newPassword } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ success: false, message: "No User Found" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect Password" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  await User.updateOne({ email }, { password: hashedPassword });
  return res
    .status(200)
    .json({ success: true, message: "Password updated successfully" });
});

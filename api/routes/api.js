import express from "express";
import * as userController from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

// ROUTING
const router = express.Router();

// CONTROLLERS
router.get("/users", userController.getAllUsers);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/auth", authMiddleware, userController.getAuthUser);
router.post("/reset-password", authMiddleware, userController.resetPassword);

//export
export default router;

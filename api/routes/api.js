import express from "express";
import * as userController from "../controller/userController.js";
import * as productController from "../controller/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploads } from "./../utils/multer.js";

// ROUTING
const router = express.Router();

// CONTROLLERS
router.get("/users", userController.getAllUsers);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/auth", authMiddleware, userController.getAuthUser);
router.post("/reset-password", authMiddleware, userController.resetPassword);

// products
router.get("/products", productController.listProducts);
router.post(
  "/create",
  authMiddleware,
  uploads,
  productController.createProduct
);
router.post("/removeProduct", authMiddleware, productController.removeProduct);
router.get("/singleProduct/:id", productController.getSingleProduct);

//export
export default router;

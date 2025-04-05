import express from "express";
import * as userController from "../controller/userController.js";
import * as productController from "../controller/productController.js";
import * as cartController from "../controller/cartController.js";
import * as orderController from "../controller/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploads } from "./../utils/multer.js";

// ROUTING
const router = express.Router();

// CONTROLLERS
router.get("/users", userController.getAllUsers);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);
router.get("/auth", authMiddleware, userController.getAuthUser);
router.post("/reset-password", authMiddleware, userController.resetPassword);

// admin routes
router.post("/admin", userController.adminLogin);

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

// cart
router.get("/getCart", authMiddleware, cartController.getCart);
router.post("/addToCart", authMiddleware, cartController.addToCart);
router.post("/updateCart", authMiddleware, cartController.updateCart);

// order
router.post("/placeOrder", authMiddleware, orderController.placeOrder);
router.get("/getUserOrders", authMiddleware, orderController.getOrders);
router.get("/listOrders", authMiddleware, orderController.listOrders);

//export
export default router;

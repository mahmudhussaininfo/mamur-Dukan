import express from "express";
import * as userController from "../controller/userController.js";
// ROUTING
const router = express.Router();

// CONTROLLERS
router.post("/register", userController.registerUser);

//export
export default router;

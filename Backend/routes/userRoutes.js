import express from "express";
import { login, logout, register } from "../controller/userController.js";
import { authenticate } from "../middleware/user.js";

const router = express.Router();

router.post("/register", authenticate, register);
router.post("/login", authenticate, login);
router.post("/logout", authenticate, logout);

export default router;

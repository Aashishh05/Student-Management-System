import express from "express";
import { createUser, deleteUserByID, getAllUser, getUserByID, updateUserByID } from "../controller/userController.js";

const router = express.Router();


router.post("/createUser",createUser);
router.get("/getUser",getAllUser);
router.get("/getUser/:id",getUserByID);
router.put("/update/:id",updateUserByID);
router.delete("/delete/:id",deleteUserByID);


export default router;
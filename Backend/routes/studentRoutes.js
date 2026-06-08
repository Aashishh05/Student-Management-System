import express from "express";
import {
  createStudent,
  deleteStudentByID,
  getAllStudents,
  getStudentByID,
  updateStudentByID,
} from "../controller/studentController.js";
import { authenticate } from "../middleware/user.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/createStudent", authenticate,upload.single("image"), createStudent);
router.get("/getStudent", authenticate, getAllStudents);
router.get("/getStudent/:id", authenticate, getStudentByID);
router.put("/update/:id", authenticate,upload.single("image"), updateStudentByID);
router.delete("/delete/:id", authenticate, deleteStudentByID);

export default router;

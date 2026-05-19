import express from "express";
import {
  createStudent,
  deleteStudentByID,
  getAllStudents,
  getStudentByID,
  updateStudentByID,
} from "../controller/studentController.js";
import { authenticate } from "../middleware/user.js";

const router = express.Router();

router.post("/createStudent", authenticate, createStudent);
router.get("/getStudent", authenticate, getAllStudents);
router.get("/getStudent/:id", authenticate, getStudentByID);
router.put("/update/:id", authenticate, updateStudentByID);
router.delete("/delete/:id", authenticate, deleteStudentByID);

export default router;

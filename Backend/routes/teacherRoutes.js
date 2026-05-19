import express from "express";
import {
  createTeacher,
  deleteTeacherByID,
  getAllTeacher,
  getTeacherByID,
  updateTeacherByID,
} from "../controller/teacherController.js";
import { authenticate } from "../middleware/user.js";

const router = express.Router();

router.post("/createTeacher", authenticate, createTeacher);
router.get("/getTeacher", authenticate, getAllTeacher);
router.get("/getTeacher/:id", authenticate, getTeacherByID);
router.put("/update/:id", authenticate, updateTeacherByID);
router.delete("/delete/:id", authenticate, deleteTeacherByID);

export default router;

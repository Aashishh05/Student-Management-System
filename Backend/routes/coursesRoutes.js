import express from "express";
import {
  createCourse,
  deleteCourseByID,
  getAllCourse,
  getCourseByID,
  updateCourseByID,
} from "../controller/courseController.js";
import { authenticate } from "../middleware/user.js";

const router = express.Router();

router.post("/createCourse", authenticate, createCourse);
router.get("/getCourse", authenticate, getAllCourse);
router.get("/getCourse/:id", authenticate, getCourseByID);
router.put("/update/:id", authenticate, updateCourseByID);
router.delete("/delete/:id", authenticate, deleteCourseByID);

export default router;

import express from "express";
import { createCourse, deleteCourseByID, getAllCourse, getCourseByID, updateCourseByID } from "../controller/userController.js";


const router = express.Router();


router.post("/createCourse",createCourse);
router.get("/getCourse",getAllCourse);
router.get("/getCourse/:id",getCourseByID);
router.put("/update/:id",updateCourseByID);
router.delete("/delete/:id",deleteCourseByID);

export default router;
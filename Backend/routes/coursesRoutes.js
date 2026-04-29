import express from "express";
import { createCourse, deleteCourseByID, getAllCourse, updateCourseByID } from "../controller/userController.js";


const router = express.Router();


router.post("/createCourse",createCourse);
router.get("/getCourse",getAllCourse);
router.get("/courses",getAllCourse);
router.put("/update/:id",updateCourseByID);
router.delete("/delete/:id",deleteCourseByID);

export default router;
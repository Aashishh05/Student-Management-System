import express from "express";
import { createTeacher, deleteTeacherByID, getAllTeacher, getTeacherByID, updateTeacherByID } from "../controller/teacherController.js";


const router = express.Router();


router.post("/createTeacher",createTeacher);
router.get("/getTeacher",getAllTeacher);
router.get("/getTeacher/:id",getTeacherByID);
router.put("/update/:id",updateTeacherByID);
router.delete("/delete/:id",deleteTeacherByID);


export default router;
import express from "express";
import { createStudent, deleteStudentByID, getAllStudents, getStudentByID, updateStudentByID } from "../controller/userController.js";


const router = express.Router();

router.post("/createStudent",createStudent);
router.get("/getStudent",getAllStudents);
router.get("/getStudent/:id",getStudentByID);
router.put("/update/:id",updateStudentByID);
router.delete("/delete/:id",deleteStudentByID);



export default router;
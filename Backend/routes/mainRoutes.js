import express from "express";

import studentRoutes from "./studentRoutes.js";
import teacherRoutes from "./teacherRoutes.js";
import coursesRoutes from "./coursesRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
router.use("/courses", coursesRoutes);
router.use("/users", userRoutes);

export default router;

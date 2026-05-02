import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"
import coursesRoutes from "./routes/coursesRoutes.js"
import cors from "cors";
dotenv.config();

connectDB();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/students",studentRoutes);
app.use("/api/teachers",teacherRoutes);
app.use("/api/courses",coursesRoutes);


app.get("/", (req, res) => {
  res.json({ message: "API is running......" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

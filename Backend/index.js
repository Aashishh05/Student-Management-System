import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"
import coursesRoutes from "./routes/coursesRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

connectDB();
const app = express();
app.use(cookieParser())

app.use(cors({ origin: "http://localhost:5173",credentials:true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/", (req,res,next)=>
// {
//   console.log("this is middleware")
//   next()
// }
// )
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.use("/api/students",studentRoutes);
app.use("/api/teachers",teacherRoutes);
app.use("/api/courses",coursesRoutes);
app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running......" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

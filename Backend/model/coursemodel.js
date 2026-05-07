import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    default: null,
  },
  Duration: {
    type: String,
    required: true,
  },
  Basefee: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    enum: ["active", "inactive", "", null],
    default: null,
  },
},{timestamps:true});

const Course = mongoose.model("Course", courseSchema);

export default Course;

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    default: null,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others", "", null],
    default: null,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    default: null,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    default: null,
  },
  course: {
    type: String,
    default: null,
  },
  payment_status: {
    type: String,
    enum: ["Paid", "Pending", "Overdue", "Partial", "", null],
    default: null,
  },
  teacher: {
    type: String,
    default: null,
  },
},{timestamps:true});


const Student = mongoose.model("Student",studentSchema);

export default Student;
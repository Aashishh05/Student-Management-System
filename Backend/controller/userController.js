import Course from "../model/coursemodel.js";
import Student from "../model/studentmodel.js";
import Teacher from "../model/teachermodel.js";

// Student

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      success: true,
      message: "Student Created Successfully",
      student,
    });
  } catch (error) {
    console.log("Error creating student", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      students,
    });
  } catch (error) {
    console.log("Error fetching student", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStudentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Student found successfully", student });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateStudentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const updateStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      updateStudent,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteStudentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteStudent = await Student.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      deleteStudent,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Teacher

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json({
      success: true,
      message: "Teacher created successfully",
      teacher,
    });
  } catch (error) {
    console.log("Error creating teacher", error);
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getAllTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      message: "Teacher fetched successfully",
      teachers,
    });
  } catch (error) {
    console.log("Error fetching teachers", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTeacherByID = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Teacher found successfully", teacher });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTeacherByID = async (req, res) => {
  const { id } = req.params;
  try {
    const updateTeacher = await Teacher.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      updateTeacher,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTeacherByID = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTeacher = await Teacher.findByIdAndDelete(id);
    if (!deleteTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
      deleteTeacher,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Course

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, message: "Course created", course });
  } catch (error) {
    console.log("Error creating course", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res
      .status(200)
      .json({ success: true, message: "Course Fetched Successfully", courses });
  } catch (error) {
    console.log("Error fetching course", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCourseByID = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Course found successfully", course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCourseByID = async (req, res) => {
  const { id } = req.params;
  try {
    const updateCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      updateCourse,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCourseByID = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCourse = await Course.findByIdAndDelete(id);
    if (!deleteCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Course deleted successfully",
        deleteCourse,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

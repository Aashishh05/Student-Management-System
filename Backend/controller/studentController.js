import Student from "../model/studentmodel.js";

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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;
    const totalStudents = await Student.countDocuments();

    const students = await Student.find()
      .sort({ createdAt: -1, _id: -1 })
      .limit(limit)
      .skip(skip);
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      students,
      currentpage: page,
      totalpages: Math.ceil(totalStudents / limit),
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

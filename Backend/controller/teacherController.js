import Teacher from "../model/teachermodel.js";


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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;
    const totalTeacher = await Teacher.countDocuments();

    const teachers = await Teacher.find()
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Teacher fetched successfully",
      teachers,
      currentpage: page,
      totalpages: Math.ceil(totalTeacher / limit),
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
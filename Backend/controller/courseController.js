import Course from "../model/coursemodel.js";

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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;
    const totalCourse = await Course.countDocuments();
    const courses = await Course.find()
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Course Fetched Successfully",
      courses,
      currentpage: page,
      totalpages: Math.ceil(totalCourse / limit),
    });
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
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      deleteCourse,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

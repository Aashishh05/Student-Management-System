import Image from "../model/imagemodel.js";
// CREATE IMAGE
export const createImage = async (req, res) => {
  try {
    const { title, description } = req.body;

    const photo = await Image.create({
      title,
      description,
      image: req.file.filename,
    });

    res.status(201).json({
      success: true,
      message: "Photo uploaded",
      data: photo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL IMAGES
export const getAllImages = async (req, res) => {
  try {
    const photos = await Image.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: photos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching images",
    });
  }
};

// GET IMAGE BY ID
export const getImageByID = async (req, res) => {
  try {
    const { id } = req.params;

    const photo = await Image.findById(id);

    if (!photo) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image found",
      data: photo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching image",
    });
  }
};

// UPDATE IMAGE
export const updateImageByID = async (req, res) => {
  try {
    const { id } = req.params;

    const photo = await Image.findById(id);

    if (!photo) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    const updatedData = {
      title: req.body.title,
      description: req.body.description,
      image: req.file ? req.file.filename : photo.image,
    };

    const updatedPhoto = await Image.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: updatedPhoto,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Error updating image",
    });
  }
};

// DELETE IMAGE
export const deleteImageByID = async (req, res) => {
  try {
    const deleted = await Image.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
import bcrypt from "bcrypt";
import User from "../model/usermodel.js";

export const register = async (req, res) => {
  try {
    const { first_name, last_name, gender, phone, email, address, password } =
      req.body;

    if (!first_name || !last_name || !gender || !phone || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing Details",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      gender,
      phone,
      email,
      address,
      password: hashpassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const checkPassword = await bcrypt.compare(password);

    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({success:false,message:error.message || "Logout failed"})
  }
};

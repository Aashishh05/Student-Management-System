import jwt from "jsonwebtoken";
import User from "../model/usermodel.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log(token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. No token found.",
      });
    }

    const decoded = jwt.verify(token, process.env.secretKey);
    console.log(decoded);

    const user = await User.findById(decoded.Id).select("-password");
    console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    console.log(req.user);

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },

    last_name: {
      type: String,
      trim: true,
      default: null,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      default: null,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;

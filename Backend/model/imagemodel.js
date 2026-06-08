import mongoose from "mongoose";

const photo = new mongoose.Schema({
  image: {
    type: String,
  },
});

const Image = mongoose.model("photo", photo);

export default Image;

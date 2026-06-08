import express from "express"
import { createImage, deleteImageByID, getAllImages, getImageByID, updateImageByID } from "../controller/imageController.js";
import upload from "../middleware/multer.js";



const router = express.Router();


router.post("/uploadImage",upload.single("image"), createImage);
router.get("/getuploadImage",getAllImages);
router.get("/getuploadImage/:id",getImageByID);
router.put("/update/:id",upload.single("image"),updateImageByID);
router.delete("/delete/:id",deleteImageByID);


export default router;
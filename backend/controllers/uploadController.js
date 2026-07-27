import { Readable } from "stream";

import cloudinary from "../config/cloudinary.js";

/* ==========================================================
   Upload Image to Cloudinary
========================================================== */

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "mern-cms",
      },
      (error, result) => {
        if (error) {
          console.error(error);

          return res.status(500).json({
            message: "Image upload failed",
          });
        }

        return res.json({
          imageUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    Readable.from(req.file.buffer).pipe(stream);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Upload failed",
    });
  }
};
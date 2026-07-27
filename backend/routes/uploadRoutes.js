import express from "express";

import { protect } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

import { uploadImage } from "../controllers/uploadController.js";

const router = express.Router();

/* ==========================================================
   Upload Image
========================================================== */

router.post(
  "/image",
  protect,
  upload.single("image"),
  uploadImage
);

export default router;
import multer from "multer";

/* ==========================================================
   Multer Configuration
========================================================== */

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

export default upload;
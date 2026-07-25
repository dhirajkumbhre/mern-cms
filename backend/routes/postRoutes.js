import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getDashboardStats,
} from "../controllers/postController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

// Dashboard Statistics
router.get("/dashboard/stats", protect, getDashboardStats);

// Posts
router.route("/")
  .get(getPosts)
  .post(protect, createPost);

router.route("/:id")
  .get(getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

export default router;
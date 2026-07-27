import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

await connectDB();

const app = express();

/* ==========================================================
   Middleware
========================================================== */

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

/* ==========================================================
   Routes
========================================================== */

app.use("/api/auth", authRoutes);

app.use("/api/posts", postRoutes);

app.use("/api/upload", uploadRoutes);

/* ==========================================================
   Health Check
========================================================== */

app.get("/", (req, res) => {
  res.send("MERN CMS API running ✅");
});

/* ==========================================================
   Server
========================================================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
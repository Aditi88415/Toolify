import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import userRoutes from "./routes/users.js";
import toolRoutes from "./routes/tools.js";
import adminRoutes from "./routes/admin.js";
import resumeRouter from "./routes/resume.js"; // ← new

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tools", toolRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/resume", resumeRouter); // ✅ corrected

// Test route
app.get("/", (req, res) => {
  res.send("AI-SaaS Backend Running");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server/routes/tools.js
import express from "express";
import Tool from "../models/Tool.js";

const router = express.Router();

// Get tools with search
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } }
          ]
        }
      : {};
    const tools = await Tool.find(query).sort({ createdAt: -1 });
    res.json(tools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add tool (user suggestion -> needs admin approval)
router.post("/", async (req, res) => {
  try {
    const { name, description, category, price } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: "Name and description are required" });
    }

    const tool = new Tool({
      name,
      description,
      category,
      price,
      approved: false, // default false, admin must approve
    });

    await tool.save();
    res.status(201).json({ message: "Tool suggestion submitted for approval", tool });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
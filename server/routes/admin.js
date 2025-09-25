import express from "express";
import Tool from "../models/Tool.js";

const router = express.Router();

// GET all tools (for admin)
router.get("/tools", async (req, res) => {
  try {
    const tools = await Tool.find().sort({ createdAt: -1 });
    res.json(tools);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE a tool
router.delete("/tools/:id", async (req, res) => {
  try {
    const deleted = await Tool.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Tool not found" });
    res.json({ message: "Tool deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /tools/:id/approve -> approve a tool
router.patch("/tools/:id/approve", async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ error: "Tool not found" });

    tool.isApproved = true;
    await tool.save();

    res.json({ message: "Tool approved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

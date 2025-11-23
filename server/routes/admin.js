import express from "express";
import Tool from "../models/Tool.js";
import { authMiddleware, adminMiddleware } from "../middleware/auth.js";

const router = express.Router();

/* 📌 GET all tools */
router.get("/tools", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tools = await Tool.find()
      .populate("submittedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(tools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ✔ Approve Tool */
router.patch("/tools/:id/approve", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ message: "Tool not found" });

    tool.approved = true;
    tool.status = "approved";
    tool.notifications.push({ message: "Your tool has been approved ✔️" });

    await tool.save();
    res.json({ message: "Tool approved!", tool });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ❌ Reject Tool */
router.patch("/tools/:id/reject", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ message: "Tool not found" });

    tool.approved = false;
    tool.status = "rejected";
    tool.notifications.push({ message: "Your tool was rejected ❌" });

    await tool.save();
    res.json({ message: "Tool rejected", tool });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
/* 🗑 Delete Tool (Admin Only) */
router.delete("/tools/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ message: "Tool not found" });

    await tool.deleteOne();
    res.json({ message: "Tool deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

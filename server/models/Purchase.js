import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tool: { type: mongoose.Schema.Types.ObjectId, ref: "Tool" },
  price: String,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Purchase", purchaseSchema);

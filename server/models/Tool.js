import mongoose from "mongoose";

const toolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    price: { type: Number, default: 0 },
    approved: { type: Boolean, default: false }, // admin approval
  },
  { timestamps: true }
);

export default mongoose.model("Tool", toolSchema);

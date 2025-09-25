// src/pages/ToolDetails.jsx
import { useParams } from "react-router-dom";

const mockTools = [
  { id: 1, name: "Image Generator", description: "Create stunning AI-generated images.", price: "$5 / use" },
  { id: 2, name: "Resume Builder", description: "Build professional resumes instantly.", price: "$10 / month" },
  { id: 3, name: "Video Summarizer", description: "Summarize long videos in seconds.", price: "Free Trial" },
];

export default function ToolDetails() {
  const { id } = useParams();
  const tool = mockTools.find((t) => t.id.toString() === id);

  if (!tool) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Tool not found</h2>;
  }

  return (
    <div className="tool-details">
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
      <p><strong>Pricing:</strong> {tool.price}</p>
      <button className="buy-btn">Buy / Use Tool</button>
    </div>
  );
}

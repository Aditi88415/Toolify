// src/pages/ToolDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ToolDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    fetchTool();
  }, []);

  const fetchTool = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tools/${id}`);
      setTool(res.data);
    } catch (err) {
      console.error("Error fetching tool:", err);
      setTool(null);
    }
  };

  if (!tool) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Tool not found</h2>;
  }

  return (
    <div className="tool-details" style={{ padding: "40px" }}>
      <h2 className="text-3xl font-bold">{tool.name}</h2>
      <p className="text-gray-700 mt-2">{tool.description}</p>
      {tool.price !== undefined && (
        <p className="font-semibold mt-3"><strong>Pricing:</strong> {tool.price}</p>
      )}

      <button
        className="buy-btn bg-indigo-600 text-white px-6 py-3 rounded-lg mt-5"
        onClick={() => {
          if (tool.url && (tool.url.startsWith("http://") || tool.url.startsWith("https://"))) {
            window.open(tool.url, "_blank");
          } else if (tool.url) {
            navigate(tool.url.startsWith("/") ? tool.url : `/${tool.url}`);
          } else {
            navigate("/");
          }
        }}
      >
        Open Tool
      </button>
    </div>
  );
}

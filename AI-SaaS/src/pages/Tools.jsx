// src/pages/Tools.jsx
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ToolCard from "../components/ToolCard.jsx";

export default function Tools() {
  const [tools, setTools] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [inputTerm, setInputTerm] = useState(searchParams.get("search") || "");
  const currentSearch = searchParams.get("search") || "";

  useEffect(() => {
    fetchTools(currentSearch);
    setInputTerm(currentSearch);
  }, [currentSearch]);

  const fetchTools = async (q) => {
    try {
      // Only fetch approved tools
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tools?search=${encodeURIComponent(q || "")}&approved=true`);
      setTools(res.data || []);
    } catch (err) {
      console.error("Error fetching tools:", err);
      setTools([]);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (inputTerm) {
      setSearchParams({ search: inputTerm });
    } else {
      setSearchParams({});
    }
  };

  const handleToolClick = (tool) => {
    if (tool.url && (tool.url.startsWith("http://") || tool.url.startsWith("https://"))) {
      window.open(tool.url, "_blank");
    } else if (tool.url) {
      navigate(tool.url);
    } else {
      navigate(`/tools/${tool._id}`);
    }
  };

  return (
    <div className="tools" style={{ padding: 40 }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Available AI Tools</h2>

      <form onSubmit={handleSearchClick} style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <input
          type="text"
          placeholder="Search tools..."
          value={inputTerm}
          onChange={(e) => setInputTerm(e.target.value)}
          style={{ padding: "10px", width: "60%", maxWidth: 500, borderRadius: 8, border: "1px solid #ccc" }}
        />
        <button
          onClick={handleSearchClick}
          style={{
            marginLeft: 12,
            padding: "10px 16px",
            borderRadius: 8,
            background: "#1dbf73",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Search
        </button>
      </form>

      <div className="tool-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {tools.length > 0 ? (
          tools.map((tool) => (
            <div key={tool._id} onClick={() => handleToolClick(tool)} style={{ cursor: "pointer" }}>
              <ToolCard tool={tool} />
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>No tools found</p>
        )}
      </div>
    </div>
  );
}

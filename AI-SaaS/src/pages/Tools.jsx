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
      // ❇️ Fetch only approved tools (backend already filters)
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tools?search=${encodeURIComponent(
          q || ""
        )}`
      );
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
    // 🌍 External link: open new tab
    if (tool.url && (tool.url.startsWith("http://") || tool.url.startsWith("https://"))) {
      window.open(tool.url, "_blank");
      return;
    }

    // 🛣️ Internal route: make sure slash exists
    if (tool.url) {
    const fixedURL = tool.url.startsWith("/") ? tool.url : `/${tool.url}`;
    navigate(fixedURL);
    return;
}


    // 📝 Default: open tool details page
    navigate(`/tools/${tool._id}`);
  };

  return (
    <div className="tools">
      {/* Header Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #040404ff 100%)",
          padding: "60px 40px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          Explore AI Tools
        </h2>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.95,
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          Browse our curated collection of powerful AI tools
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearchClick}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.25)",
            borderRadius: "50px",
            padding: "8px",
            backdropFilter: "blur(10px)",
            maxWidth: "600px",
            margin: "0 auto",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <input
            type="text"
            placeholder="Search tools..."
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
            className="form-input"
            style={{
              flex: 1,
              padding: "14px 20px",
              border: "none",
              borderRadius: "40px",
              background: "transparent",
              color: "white",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            style={{
              padding: "12px 28px",
              borderRadius: "40px",
              background: "white",
              color: "#667eea",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Search
          </button>
        </form>
      </div>

      {/* Tools Grid */}
      <div style={{ padding: "60px 40px", maxWidth: "1400px", margin: "0 auto" }}>
        <div className="tool-list">
          {tools.length > 0 ? (
            tools.map((tool) => (
              <div key={tool._id} onClick={() => handleToolClick(tool)} style={{ cursor: "pointer" }}>
                <ToolCard tool={tool} />
              </div>
            ))
          ) : (
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                padding: "80px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "64px",
                  marginBottom: "24px",
                  opacity: 0.3,
                }}
              >
                🔍
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#171717",
                }}
              >
                No tools found
              </h3>
              <p style={{ color: "#737373", fontSize: "16px" }}>
                Try adjusting your search terms or browse all tools
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

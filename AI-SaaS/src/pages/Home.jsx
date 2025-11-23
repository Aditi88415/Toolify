// src/pages/Home.jsx
import { useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import FeaturedTools from "../components/FeaturedTools";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

export default function Home() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/tools?search=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div>
      {/* Hero section now handles the search bar */}
      <HeroSection onSearch={handleSearch} />

      {/* Search results section */}
      {results.length > 0 && (
        <section style={{ padding: "60px 40px", maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "40px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Search Results
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {results.map((tool) => (
              <div
                key={tool._id}
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "20px",
                  padding: "28px",
                  background: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "12px",
                    color: "#171717",
                  }}
                >
                  {tool.name}
                </h3>
                <p style={{ color: "#737373", fontSize: "14px", marginBottom: "12px", lineHeight: "1.6" }}>
                  {tool.description}
                </p>
                <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                  <strong style={{ color: "#171717" }}>Category:</strong>{" "}
                  <span style={{ color: "#667eea" }}>{tool.category || "General"}</span>
                </p>
                <p style={{ fontSize: "14px" }}>
                  <strong style={{ color: "#171717" }}>Price:</strong>{" "}
                  <span style={{ color: "#43e97b", fontWeight: "600" }}>${tool.price || "Free"}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other homepage sections */}
      <FeaturedTools />
      <Categories />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}

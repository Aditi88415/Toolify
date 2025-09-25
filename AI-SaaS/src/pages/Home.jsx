// src/pages/Home.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import FeaturedTools from "../components/FeaturedTools";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

export default function Home() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/api/tools?search=${q}`);
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div>
      <HeroSection />

      {/* 🔍 Search Bar */}
      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <form onSubmit={handleSearch}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search AI tools..."
            style={{
              padding: "12px 16px",
              width: 420,
              borderRadius: 30,
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              marginLeft: 12,
              padding: "11px 18px",
              borderRadius: 30,
              background: "#1dbf73",
              color: "#fff",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </section>

      {/* 🔎 Search Results */}
      {results.length > 0 && (
        <section style={{ padding: "20px 40px" }}>
          <h2>Search Results</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginTop: 20,
            }}
          >
            {results.map((tool) => (
              <div
                key={tool._id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  padding: 20,
                  background: "#fff",
                }}
              >
                <h3>{tool.name}</h3>
                <p style={{ color: "#555" }}>{tool.description}</p>
                <p>
                  <strong>Category:</strong> {tool.category || "General"}
                </p>
                <p>
                  <strong>Price:</strong> ${tool.price || "Free"}
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

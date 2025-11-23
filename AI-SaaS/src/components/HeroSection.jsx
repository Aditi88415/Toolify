import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRocket, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0e27",
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Gradient Orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          padding: "0 40px",
          textAlign: "center",
        }}
      >
        {/* Stats Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: faRocket, value: "500+", label: "AI Tools" },
            { icon: faStar, value: "4.9/5", label: "Rating" },
            { icon: faUsers, value: "10k+", label: "Users" },
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(30, 41, 59, 0.6)",
                backdropFilter: "blur(12px)",
                padding: "14px 28px",
                borderRadius: "12px",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              <FontAwesomeIcon icon={stat.icon} style={{ fontSize: "20px", color: "#6366f1" }} />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#f1f5f9" }}>{stat.value}</div>
                <div style={{ fontSize: "11px", color: "#cbd5e1" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Heading */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            marginBottom: "24px",
            fontFamily: "'Syne', sans-serif",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            textShadow: "2px 4px 8px rgba(0,0,0,0.2)",
            maxWidth: "900px",
            margin: "0 auto 24px",
          }}
        >
          Discover AI Tools That
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #fff 0%, #f0f0f0 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Empower Your Future
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            marginBottom: "48px",
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto 48px",
            lineHeight: "1.6",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Explore the most powerful AI tools curated for creators, developers, and businesses.
          Transform your workflow with cutting-edge technology.
          
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30, 41, 59, 0.6)",
            borderRadius: "60px",
            padding: "6px",
            backdropFilter: "blur(12px)",
            maxWidth: "600px",
            margin: "0 auto",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              marginLeft: "24px",
              fontSize: "18px",
              color: "#94a3b8",
            }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for AI tools, categories..."
            style={{
              flex: 1,
              padding: "16px 20px",
              border: "none",
              borderRadius: "50px",
              outline: "none",
              fontSize: "16px",
              background: "transparent",
              color: "#f1f5f9",
              fontFamily: "'Inter', sans-serif",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "14px 32px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              color: "#fff",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.3s ease",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 30px rgba(139, 92, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 20px rgba(99, 102, 241, 0.5)";
            }}
          >
            Search
          </button>
        </form>

        {/* Popular Searches */}
        <div style={{ marginTop: "32px" }}>
          <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "12px" }}>Popular:</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {["Image Generation", "Video Editing", "Resume Builder", "Productivity"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(30, 41, 59, 0.6)",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: "#cbd5e1",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(99, 102, 241, 0.2)";
                  e.target.style.borderColor = "#6366f1";
                  e.target.style.color = "#f1f5f9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(30, 41, 59, 0.6)";
                  e.target.style.borderColor = "rgba(99, 102, 241, 0.3)";
                  e.target.style.color = "#cbd5e1";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
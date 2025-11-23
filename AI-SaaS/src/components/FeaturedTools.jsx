// src/components/FeaturedTools.jsx

import { FaFileAlt } from "react-icons/fa";    // Resume icon
import { MdImage } from "react-icons/md";       // Image icon
import { FaVideo } from "react-icons/fa";       // Video icon

export default function FeaturedTools() {
  const tools = [
    {
      id: 1,
      title: "AI Resume Generator",
      description: "Create professional resumes in seconds with AI-powered templates.",
      icon: <FaFileAlt size={30} color="#a5b4fc" />,
      link: "/resume",
    },
    {
      id: 2,
      title: "AI Image Creator",
      description: "Generate stunning images from text prompts instantly.",
      icon: <MdImage size={30} color="#f472b6" />,
      link: "/tools/image-generator",
    },
    {
      id: 3,
      title: "AI Video Summarizer",
      description: "Summarize long videos into key insights automatically.",
      icon: <FaVideo size={30} color="#60a5fa" />,
      link: "/tools/video-summarizer",
    },
  ];

  return (
    <div
      style={{
        background: "#0a0e27",
        padding: "80px 0",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* 🔥 Title */}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "2.8rem",
          fontWeight: 700,
          marginBottom: "10px",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Featured AI Tools
      </h2>

      <p style={{ color: "#94a3b8", marginBottom: "60px", fontSize: "15px" }}>
        Handpicked tools transforming how people work and create
      </p>

      {/* 🎯  Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.id}
            style={{
              width: "320px",
              background: "#1e293b",
              borderRadius: "16px",
              padding: "30px",
              border: "1px solid #334155",
              transition: "0.35s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* 🖼️ Icon */}
            <div
              style={{
                background: "#2c3e52",
                padding: "14px",
                borderRadius: "12px",
                display: "inline-block",
                marginBottom: "18px",
              }}
            >
              {tool.icon}
            </div>

            {/* 🧾 Title */}
            <h3 style={{ fontSize: "19px", fontWeight: 600 }}>{tool.title}</h3>

            {/* 📌 Description */}
            <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "8px" }}>
              {tool.description}
            </p>

            {/* 🔗 Try Button */}
            <a
              href={tool.link}
              style={{
                display: "inline-block",
                marginTop: "18px",
                color: "#667eea",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Try it now →
            </a>
          </div>
        ))}
      </div>

      {/* 🌈 View All Tools Button */}
      <button
        style={{
          marginTop: "60px",
          padding: "14px 30px",
          fontSize: "15px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          color: "white",
          borderRadius: "25px",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          boxShadow: "0 4px 16px rgba(102, 126, 234, 0.3)",
        }}
        onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        View All Tools
      </button>
    </div>
  );
}

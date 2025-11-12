// src/components/HeroSection.jsx
import React, { useState } from "react";

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
        height: "70vh", // ✅ reduced height
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* 🎥 Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.9) contrast(1.1)",
        }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* 🧠 Hero heading */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "20px",
          textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        Discover AI Tools That Empower You
      </h1>

      {/* 🔍 Search bar over video */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.25)",
          borderRadius: "40px",
          padding: "8px 10px",
          backdropFilter: "blur(5px)",
          width: "420px",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI tools..."
          style={{
            flex: 1,
            padding: "12px 16px",
            border: "none",
            borderRadius: "30px",
            outline: "none",
            fontSize: "1rem",
            background: "transparent",
            color: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "11px 18px",
            borderRadius: "30px",
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
  );
}

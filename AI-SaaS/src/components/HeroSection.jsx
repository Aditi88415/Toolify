import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>Discover Powerful AI Tools</h1>
      <p>One marketplace for AI-powered productivity</p>
      <button
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 8,
          background: "#1dbf73",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
        }}
        onClick={() => navigate("/tools")}
      >
        Explore Tools
      </button>
    </section>
  );
}

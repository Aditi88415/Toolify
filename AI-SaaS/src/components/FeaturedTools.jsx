import { useNavigate } from "react-router-dom";

const dummyTools = [
  { id: 1, name: "AI Resume Generator", desc: "Create resumes in seconds" },
  { id: 2, name: "AI Image Creator", desc: "Generate images with prompts" },
  { id: 3, name: "AI Video Summarizer", desc: "Summarize long videos instantly" },
];

export default function FeaturedTools() {
  const navigate = useNavigate();
  return (
    <section style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Featured Tools</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {dummyTools.map((t) => (
          <div
            key={t.id}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 12,
              width: 250,
              textAlign: "center",
            }}
          >
            <h3>{t.name}</h3>
            <p style={{ color: "#555" }}>{t.desc}</p>
            <button
              style={{
                marginTop: 10,
                padding: "8px 16px",
                borderRadius: 6,
                background: "#1dbf73",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/tools/${t.id}`)}
            >
              View
            </button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
          onClick={() => navigate("/tools")}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            background: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          View All Tools
        </button>
      </div>
    </section>
  );
}

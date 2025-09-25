import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#1dbf73",
        color: "#fff",
        textAlign: "center",
        marginTop: 40,
      }}
    >
      <h2>Have an AI Tool to Share?</h2>
      <p style={{ marginBottom: 20 }}>Submit your tool and get discovered by thousands of users.</p>
      <button
        onClick={() => navigate("/submit-tool")}
        style={{
          padding: "12px 24px",
          borderRadius: 8,
          background: "#fff",
          color: "#1dbf73",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        Submit Your Tool
      </button>
    </section>
  );
}

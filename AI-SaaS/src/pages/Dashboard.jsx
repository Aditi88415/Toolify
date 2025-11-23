// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const fetchMyTools = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to see your submitted tools.");
        setLoading(false);
        return;
      }

      const res = await axios.get(`${API_BASE}/tools/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTools(res.data || []);
    } catch (err) {
      console.error("Error fetching user tools:", err);
      setError("Could not load your tools. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyTools();
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 200px)",
        padding: "80px 40px",
        background: "radial-gradient(circle at top, #111827 0, #020617 50%, #020617 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 3vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "8px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Submitted Tools
          </h2>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "15px",
              maxWidth: "520px",
            }}
          >
            View the status of tools you’ve submitted to the marketplace. Once
            approved by admin, they will appear in the public tools listing.
          </p>
        </div>

        {/* Card Container */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.98))",
            borderRadius: "20px",
            padding: "28px 24px",
            border: "1px solid rgba(148,163,184,0.3)",
            boxShadow: "0 24px 60px rgba(15,23,42,0.9)",
          }}
        >
          {/* Top row: info + refresh */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "18px",
              gap: "12px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#e5e7eb",
              }}
            >
              Submitted Tools
            </h3>

            <button
              onClick={fetchMyTools}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(148,163,184,0.5)",
                background: "rgba(15,23,42,0.9)",
                color: "#e5e7eb",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ fontSize: "14px" }}>⟳</span> Refresh
            </button>
          </div>

          {/* Error / loading / empty states */}
          {loading ? (
            <p style={{ color: "#9ca3af", padding: "10px 2px" }}>
              Loading your tools…
            </p>
          ) : error ? (
            <p style={{ color: "#f97373", padding: "10px 2px" }}>{error}</p>
          ) : tools.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 10px",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "8px" }}>🧰</div>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "15px",
                }}
              >
                You haven’t submitted any tools yet.
              </p>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  marginTop: "4px",
                }}
              >
                Go to <b>“Submit Tool”</b> from the navbar to add your first one.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "6px",
              }}
            >
              {tools.map((tool) => (
                <div
                  key={tool._id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 3fr) minmax(0, 1.2fr)",
                    gap: "12px",
                    padding: "16px 14px",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.7), rgba(30,64,175,0.35))",
                    border: "1px solid rgba(55,65,81,0.9)",
                  }}
                >
                  {/* Left: Name + description + meta */}
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#e5e7eb",
                        marginBottom: "4px",
                      }}
                    >
                      {tool.name}
                    </h4>
                    <p
                      style={{
                        color: "#9ca3af",
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {tool.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginTop: "4px",
                      }}
                    >
                      {tool.category && (
                        <span
                          style={{
                            fontSize: "11px",
                            padding: "4px 10px",
                            borderRadius: "999px",
                            background: "rgba(59,130,246,0.18)",
                            color: "#bfdbfe",
                            border: "1px solid rgba(59,130,246,0.5)",
                          }}
                        >
                          {tool.category}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          background: "rgba(148,163,184,0.14)",
                          color: "#d1d5db",
                          border: "1px solid rgba(148,163,184,0.4)",
                        }}
                      >
                        Submitted on{" "}
                        {new Date(tool.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Right: price + status + URL */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    {/* Price */}
                    <div>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#9ca3af",
                          marginRight: "4px",
                        }}
                      >
                        Price:
                      </span>
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "999px",
                          background:
                            "linear-gradient(135deg, #6366f11a, #8b5cf61a)",
                          color: "#a5b4fc",
                          fontSize: "13px",
                          fontWeight: 600,
                          border: "1px solid rgba(129,140,248,0.6)",
                        }}
                      >
                        {tool.price === 0 || tool.price == null
                          ? "Free"
                          : `$${tool.price}`}
                      </span>
                    </div>

                    {/* Status pill */}
                    <div>
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: 600,
                          background: tool.approved
                            ? "rgba(22, 163, 74, 0.16)"
                            : "rgba(234, 179, 8, 0.16)",
                          color: tool.approved ? "#4ade80" : "#facc15",
                          border: `1px solid ${
                            tool.approved
                              ? "rgba(34,197,94,0.6)"
                              : "rgba(234,179,8,0.6)"
                          }`,
                        }}
                      >
                        {tool.approved ? "Approved ✔" : "Pending Review ⏳"}
                      </span>
                    </div>

                    {/* URL */}
                    {tool.url && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: "4px",
                          fontSize: "12px",
                          color: "#38bdf8",
                          textDecoration: "none",
                          wordBreak: "break-all",
                        }}
                      >
                        🔗 {tool.url}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hint */}
        <p
          style={{
            marginTop: "14px",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Tools shown here are only the ones <b>you</b> submitted. Admin can
          approve or reject them from the Admin Dashboard.
        </p>
      </div>
    </div>
  );
}

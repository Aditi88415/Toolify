// src/pages/MyTools.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyTools() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    const fetchMyTools = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/tools/my`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTools(res.data || []);
      } catch (err) {
        console.error("Error fetching my tools:", err);
        setTools([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMyTools();
  }, [token]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return {
          bg: "rgba(16, 185, 129, 0.12)",
          color: "#10b981",
          label: "Approved",
        };
      case "rejected":
        return {
          bg: "rgba(239, 68, 68, 0.12)",
          color: "#ef4444",
          label: "Rejected",
        };
      default:
        return {
          bg: "rgba(234, 179, 8, 0.12)",
          color: "#ca8a04",
          label: "Pending",
        };
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 200px)",
        padding: "60px 40px",
        background: "#020617",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          background: "#0b1120",
          padding: "32px 32px 40px",
          borderRadius: "24px",
          border: "1px solid #1f2937",
          boxShadow: "0 18px 45px rgba(15,23,42,0.75)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "8px",
            color: "white",
          }}
        >
          My Submitted Tools
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "24px", fontSize: "15px" }}>
          Track approval status of all tools you’ve submitted.
        </p>

        {!user && (
          <p style={{ color: "#f97316", marginTop: "12px" }}>
            Please login to view your submitted tools.
          </p>
        )}

        {loading ? (
          <p style={{ color: "#9ca3af", marginTop: "20px" }}>Loading...</p>
        ) : tools.length === 0 ? (
          <div
            style={{
              marginTop: "24px",
              padding: "32px",
              borderRadius: "16px",
              background: "#020617",
              border: "1px dashed #4b5563",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#9ca3af", fontSize: "15px" }}>
              You haven’t submitted any tools yet.
            </p>
            <p style={{ color: "#6366f1", marginTop: "6px", fontSize: "14px" }}>
              Go to <b>Submit Tool</b> to share your AI tool.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {tools.map((tool) => {
              const statusStyle = getStatusStyle(tool.status);

              return (
                <div
                  key={tool._id}
                  style={{
                    padding: "18px 18px 16px",
                    borderRadius: "16px",
                    background:
                      "radial-gradient(circle at top left, rgba(55,65,81,0.45), transparent 55%), #020617",
                    border: "1px solid rgba(75,85,99,0.6)",
                    marginBottom: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                        color: "#e5e7eb",
                        marginBottom: "4px",
                      }}
                    >
                      {tool.name}
                    </h3>
                    <p
                      style={{
                        color: "#9ca3af",
                        fontSize: "14px",
                        maxWidth: "520px",
                      }}
                    >
                      {tool.description}
                    </p>

                    {tool.url && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          marginTop: "6px",
                          fontSize: "13px",
                          color: "#60a5fa",
                          textDecoration: "none",
                        }}
                      >
                        Visit tool ↗
                      </a>
                    )}

                    {tool.statusMessage && (
                      <p
                        style={{
                          marginTop: "6px",
                          fontSize: "13px",
                          color:
                            tool.status === "rejected"
                              ? "#fca5a5"
                              : tool.status === "approved"
                              ? "#bbf7d0"
                              : "#eab308",
                        }}
                      >
                        {tool.statusMessage}
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      minWidth: "110px",
                      textAlign: "right",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px 12px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "600",
                        background: statusStyle.bg,
                        color: statusStyle.color,
                      }}
                    >
                      {statusStyle.label}
                    </span>

                    {typeof tool.price === "number" && (
                      <div
                        style={{
                          marginTop: "8px",
                          fontSize: "13px",
                          color: "#9ca3af",
                        }}
                      >
                        {tool.price > 0 ? `$${tool.price}` : "Free"}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

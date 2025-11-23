import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// React Icons (choose what you need)
import { MdImage } from "react-icons/md";
import { FaFileAlt, FaVideo } from "react-icons/fa";

export default function ToolCard({ tool }) {
  const navigate = useNavigate();

  // Pick icon dynamically
  const getIcon = (type) => {
    switch (type) {
      case "image":
        return <MdImage size={38} color="#667eea" />;
      case "resume":
        return <FaFileAlt size={38} color="#667eea" />;
      case "video":
        return <FaVideo size={38} color="#667eea" />;
      default:
        return <MdImage size={38} color="#667eea" />;
    }
  };

  const handleClick = () => {
    if (tool.route) navigate(tool.route);
  };

  return (
    <div
      className="tool-card"
      onClick={handleClick}
      style={{
        background: "white",
        border: "1px solid #e5e5e5",
        borderRadius: "20px",
        padding: "28px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.12)";
        e.currentTarget.style.borderColor = "#667eea";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.07)";
        e.currentTarget.style.borderColor = "#e5e5e5";
      }}
    >
      {/* Top Hover Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transform: "scaleX(0)",
          transition: "transform 0.3s ease",
        }}
        className="tool-card-bar"
      />

      {/* Icon Box */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #667eea20 0%, #764ba240 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {getIcon(tool.type)}
      </div>

      {/* Tool Name */}
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

      {/* Tool Description */}
      <p
        style={{
          color: "#737373",
          fontSize: "14px",
          lineHeight: "1.6",
          marginBottom: "20px",
        }}
      >
        {tool.description}
      </p>

      {/* View More Link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#667eea",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        Learn more
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "12px" }} />
      </div>
    </div>
  );
}

// 🔥 Hover Effect Script
const style = document.createElement("style");
style.textContent = `
  .tool-card:hover .tool-card-bar {
    transform: scaleX(1) !important;
  }
`;
document.head.appendChild(style);

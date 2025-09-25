import { useNavigate } from "react-router-dom";

export default function ToolCard({ tool }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (tool.route) {
      navigate(tool.route);
    }
  };

  return (
    <div
      className="tool-card"
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
    >
      <img
        src={tool.image}
        alt={tool.name}
        style={{ width: "60px", height: "60px" }}
      />
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
    </div>
  );
}

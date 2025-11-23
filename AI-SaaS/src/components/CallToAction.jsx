import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CallToAction() {
  const navigate = useNavigate();
  
  return (
    <section
      style={{
        padding: "100px 40px",
        background: "#141b2d",
        color: "white",
        textAlign: "center",
        marginTop: "80px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid #334155",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      {/* Background Decorations */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "36px", color: "white" }} />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          Have an AI Tool to Share?
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "18px",
            marginBottom: "40px",
            opacity: 0.95,
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Submit your tool and get discovered by thousands of users. Join our growing marketplace
          and help others transform their workflow with AI.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/submit-tool")}
          style={{
            padding: "18px 48px",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "700",
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)",
            transition: "all 0.3s ease",
            fontFamily: "'Inter', sans-serif",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-4px)";
            e.target.style.boxShadow = "0 0 40px rgba(139, 92, 246, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 0 30px rgba(99, 102, 241, 0.6)";
          }}
        >
          Submit Your Tool
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {/* Additional Info */}
        <p
          style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "#94a3b8",
          }}
        >
          Free to submit • Get featured • Reach thousands of potential customers
        </p>
      </div>
    </section>
  );
}
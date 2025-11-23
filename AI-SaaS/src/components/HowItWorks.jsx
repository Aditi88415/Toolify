import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHandPointer, faRocket, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    step: "1",
    icon: faSearch,
    title: "Browse Tools",
    desc: "Search from a wide variety of AI tools.",
    color: "#667eea",
  },
  {
    step: "2",
    icon: faHandPointer,
    title: "Buy or Rent",
    desc: "Choose the plan that suits your needs.",
    color: "#f093fb",
  },
  {
    step: "3",
    icon: faRocket,
    title: "Start Using",
    desc: "Get instant access and boost productivity.",
    color: "#43e97b",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#0a0e27",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              marginBottom: "16px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Get started with AI tools in just three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {steps.map((s, idx) => (
            <div
              key={s.step}
              style={{
                background: "#1e293b",
                borderRadius: "20px",
                padding: "40px 32px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease",
                position: "relative",
                width: "280px",
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards`,
                border: "1px solid #334155",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${s.color}30`;
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.background = "#2d3b52";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.4)";
                e.currentTarget.style.borderColor = "#334155";
                e.currentTarget.style.background = "#1e293b";
              }}
            >
              {/* Step Number Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: `${s.color}20`,
                  color: s.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                {s.step}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${s.color}20 0%, ${s.color}40 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  style={{ fontSize: "36px", color: s.color }}
                />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#f1f5f9",
                }}
              >
                {s.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
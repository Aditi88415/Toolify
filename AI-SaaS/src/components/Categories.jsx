const categories = [
  { name: "Image Generation", emoji: "🖼️", color: "#f093fb", count: "120+" },
  { name: "Video Editing", emoji: "🎥", color: "#4facfe", count: "85+" },
  { name: "Resume Tools", emoji: "📄", color: "#43e97b", count: "45+" },
  { name: "Productivity", emoji: "⚡", color: "#fa709a", count: "200+" },
  { name: "Writing", emoji: "✍️", color: "#667eea", count: "95+" },
  { name: "Analytics", emoji: "📊", color: "#f6d365", count: "60+" },
];

export default function Categories() {
  return (
    <section style={{ padding: "80px 40px", background: "#141b2d" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
            Browse by Category
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
            Find the perfect AI tool for your specific needs
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((category, idx) => (
            <div
              key={category.name}
              style={{
                background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)`,
                borderRadius: "20px",
                padding: "32px 24px",
                textAlign: "center",
                cursor: "pointer",
                border: `2px solid ${category.color}40`,
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                animation: `slideUp 0.6s ease-out ${idx * 0.05}s backwards`,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${category.color}40, 0 0 30px ${category.color}30`;
                e.currentTarget.style.borderColor = category.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
                e.currentTarget.style.borderColor = `${category.color}40`;
              }}
            >
              {/* Background Decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: category.color,
                  opacity: 0.1,
                  filter: "blur(30px)",
                }}
              />

              {/* Emoji */}
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                }}
              >
                {category.emoji}
              </div>

              {/* Category Name */}
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#f1f5f9",
                }}
              >
                {category.name}
              </h4>

              {/* Tool Count */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#cbd5e1",
                  fontWeight: "500",
                }}
              >
                {category.count} tools
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
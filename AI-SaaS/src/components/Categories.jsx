const categories = [
  { name: "Image", emoji: "🖼️" },
  { name: "Video", emoji: "🎥" },
  { name: "Resume", emoji: "📄" },
  { name: "Productivity", emoji: "⚡" },
];

export default function Categories() {
  return (
    <section style={{ padding: "40px 20px", background: "#f5f5f5" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Browse by Category</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 20,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {categories.map((c) => (
          <div
            key={c.name}
            style={{
              padding: 20,
              borderRadius: 12,
              background: "#fff",
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{c.emoji}</span>
            <h4 style={{ marginTop: 10 }}>{c.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

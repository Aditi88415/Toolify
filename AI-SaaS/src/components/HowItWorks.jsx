const steps = [
  { step: "1", title: "Browse Tools", desc: "Search from a wide variety of AI tools." },
  { step: "2", title: "Buy or Rent", desc: "Choose the plan that suits your needs." },
  { step: "3", title: "Start Using", desc: "Get instant access and boost productivity." },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>How It Works</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        {steps.map((s) => (
          <div
            key={s.step}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 12,
              width: 220,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#1dbf73",
                color: "#fff",
                margin: "0 auto 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {s.step}
            </div>
            <h4>{s.title}</h4>
            <p style={{ color: "#555" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

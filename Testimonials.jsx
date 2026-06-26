export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav Mehta",
      role: "Product Manager",
      text: "This AI platform reduced our workflow time by 60%. Absolutely game-changing.",
    },
    {
      name: "Sarah Khan",
      role: "Startup Founder",
      text: "Clean UI, powerful automation. Exactly what we needed to scale faster.",
    },
    {
      name: "John Williams",
      role: "Engineer",
      text: "The pricing engine and AI workflows are incredibly well thought out.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Users Say</h2>

      <div style={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} style={styles.card}>
            <p style={styles.text}>
              "{r.text}"
            </p>
            <h4 style={styles.name}>
              {r.name}
            </h4>
            <p style={styles.role}>
              {r.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 24px",
    background: "var(--noir)",
    textAlign: "center",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "24px",
    borderRadius: "16px",
    textAlign: "left",
  },

  text: {
    color: "rgba(241,246,244,0.72)",
  },

  name: {
    color: "var(--arctic)",
  },

  role: {
    color: "rgba(241,246,244,0.6)",
  },
  title: {
    fontFamily: "var(--font-code)",
    fontSize: "32px",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },



  text: {
    fontSize: "14px",
    marginBottom: "12px",
  },

  name: {
    fontSize: "16px",
    marginBottom: "4px",
  },

  role: {
    fontSize: "12px",
    opacity: 0.7,
  },
};
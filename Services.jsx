export default function Services() {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Powerful AI Services</h2>
        <p style={styles.subtitle}>
          Everything you need to automate, scale, and optimize workflows with AI.
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Automation Engine</h3>
          <p style={styles.cardText}>
            Build intelligent workflows that run without manual intervention.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>AI Analytics</h3>
          <p style={styles.cardText}>
            Gain real-time insights from your data using advanced AI models.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Smart Integrations</h3>
          <p style={styles.cardText}>
            Connect APIs, tools, and platforms seamlessly in seconds.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 24px",
    background: "#D9E8E2",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    fontFamily: "var(--font-code)",
    fontSize: "36px",
    color: "#172B36",
    marginBottom: "12px",
  },

  subtitle: {
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    color: "#114C5A",
    maxWidth: "600px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    marginTop: "40px",
  },

  card: {
    background: "#F1F6F4",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid rgba(23,43,54,0.1)",
  },

  cardTitle: {
    fontFamily: "var(--font-code)",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#172B36",
  },

  cardText: {
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    color: "#114C5A",
    lineHeight: "1.5",
  },
};
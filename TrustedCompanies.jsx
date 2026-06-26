export default function TrustedCompanies() {
  return (
    <section style={styles.section}>
      <p style={styles.text}>Trusted by teams worldwide</p>

      <div style={styles.logos}>
        <div style={styles.logo}>Google</div>
        <div style={styles.logo}>Microsoft</div>
        <div style={styles.logo}>Amazon</div>
        <div style={styles.logo}>Meta</div>
        <div style={styles.logo}>Netflix</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 24px",
    background: "var(--noir)",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "24px",
    color: "var(--arctic)",
  },

  text: {
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    color: "#114C5A",
    marginBottom: "24px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  logos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "48px",
    flexWrap: "wrap",
  },

  logo: {
    fontFamily: "var(--font-code)",
    fontSize: "16px",
    color: "#172B36",
    opacity: 0.7,
  },
};
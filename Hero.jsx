export default function Hero() {
  return (
    <section style={styles.section} className="hero">
      <p style={styles.tagline}>Next-Gen AI Automation Platform</p>

      <h1 style={styles.title}>
        Build, Automate & Scale with Intelligence
      </h1>

      <p style={styles.subtitle}>
        A powerful AI SaaS platform that helps teams automate workflows,
        optimize performance, and scale without friction.
      </p>

      <button
        style={styles.primaryBtn}
        onClick={() => scrollToSection("pricing")}
      >
        Get Started
      </button>

      <button
        style={styles.secondaryBtn}
        onClick={() => scrollToSection("pricing")}
      >
        View Pricing
      </button>
    </section>
  );
}


const styles = {
  section: {
    padding: "80px 24px",
    textAlign: "center",
    /* background moved to CSS .hero to allow layered SVG + gradient backgrounds */
  },

  tagline: {
    fontFamily: "var(--font-code)",
    fontSize: "14px",
    color: "#114C5A",
    marginBottom: "12px",
  },

  title: {
  fontFamily: "var(--font-code)",
  fontSize: "42px",
  fontWeight: "700",
  color: "#F1F6F4",
  marginBottom: "16px",
  textShadow: "0 0 40px rgba(255, 200, 1, 0.15)",
},

  subtitle: {
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "0 auto 30px auto",
    color: "#114C5A",
    lineHeight: "1.6",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "10px 18px",
    border: "none",
    background: "#FFC801",
    color: "#172B36",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
  },

  secondaryBtn: {
    padding: "10px 18px",
    border: "1px solid #172B36",
    background: "transparent",
    color: "#172B36",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
  },
};


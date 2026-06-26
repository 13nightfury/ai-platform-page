export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3 style={styles.logo}>AI Platform</h3>
          <p style={styles.text}>
            Next-gen AI automation platform for modern teams.
          </p>
        </div>

        <div>
          <h4 style={styles.heading}>Product</h4>
          <p style={styles.link}>Features</p>
          <p style={styles.link}>Pricing</p>
          <p style={styles.link}>Docs</p>
        </div>

        <div>
          <h4 style={styles.heading}>Company</h4>
          <p style={styles.link}>About</p>
          <p style={styles.link}>Careers</p>
          <p style={styles.link}>Contact</p>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} AI Platform. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "60px 24px",
    background: "#172B36",
    color: "#F1F6F4",
    marginTop: "40px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "40px",
    marginBottom: "30px",
  },

  logo: {
    fontFamily: "var(--font-code)",
    fontSize: "20px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "14px",
    opacity: 0.8,
  },

  heading: {
    fontSize: "14px",
    marginBottom: "10px",
    fontWeight: "600",
  },

  link: {
    fontSize: "13px",
    opacity: 0.7,
    marginBottom: "6px",
    cursor: "pointer",
  },

  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "20px",
    fontSize: "12px",
    opacity: 0.6,
    textAlign: "center",
  },
};
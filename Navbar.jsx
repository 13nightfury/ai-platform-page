export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>AI Platform</div>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px 24px",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontFamily: "var(--font-code)",
    fontWeight: "600",
    fontSize: "18px",
  },
};
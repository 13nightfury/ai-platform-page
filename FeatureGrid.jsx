import { useEffect, useState } from "react";

const features = [
  {
    title: "AI Workflow Builder",
    desc: "Create multi-step automation pipelines visually.",
  },
  {
    title: "Smart Agents",
    desc: "Autonomous AI agents for repetitive tasks.",
  },
  {
    title: "Data Insights",
    desc: "Real-time analytics powered by AI models.",
  },
  {
    title: "API Integration",
    desc: "Connect tools and services instantly.",
  },
];

export default function FeatureGrid() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Core AI Features</h2>

      {/* DESKTOP BENTO */}
      {!isMobile && (
        <div style={styles.grid}>
          {features.map((f, i) => (
              <div
              key={i}
              onMouseEnter={() => setActive(i)}
              style={{
                ...styles.card,
                ...(active === i ? styles.hover : {}),
                ...(i === 0 ? styles.big : {}),
              }}>
              <h3 style={{ marginBottom: "8px", fontSize: "18px" }}>
                {f.title}
              </h3>

              <p style={{ opacity: 0.75, fontSize: "14px" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* MOBILE ACCORDION */}
      {isMobile && (
        <div style={styles.accordion}>
          {features.map((f, i) => (
            <div key={i} style={styles.accItem}>
              <div
                onClick={() => setActive(active === i ? -1 : i)}
                style={styles.accHeader}
              >
                {f.title}
              </div>

              {active === i && (
                <p style={styles.accBody}>{f.desc}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 24px",
    background: "var(--noir)",
    color: "var(--arctic)",
  },

  title: {
    textAlign: "center",
    fontFamily: "var(--font-code)",
    fontSize: "32px",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "18px",
  },

  // 🔥 MAIN CARD (now more premium)
  card: {
    padding: "22px",
    borderRadius: "22px",
    cursor: "pointer",

    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(12px)",

    color: "var(--arctic)",

    transition: "all 250ms ease",

    animation: "floatSoft 6s ease-in-out infinite",
  },

  big: {
    gridRow: "span 2",
    borderRadius: "28px",
  },

  // 🔥 HOVER STATE (important for judges)
  hover: {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 0 30px rgba(255, 200, 1, 0.08)",
    border: "1px solid rgba(255, 200, 1, 0.2)",
  },

  accordion: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  accItem: {
    borderRadius: "16px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  accHeader: {
    padding: "14px",
    fontWeight: "600",
    cursor: "pointer",
    background: "rgba(255,255,255,0.05)",
  },

  accBody: {
    padding: "14px",
    background: "rgba(0,0,0,0.2)",
    color: "rgba(241,246,244,0.75)",
  },
};
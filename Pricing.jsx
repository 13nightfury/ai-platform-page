import { useMemo, useState } from "react";

const pricingMatrix = {
  INR: { base: 999, multiplier: 1 },
  USD: { base: 12, multiplier: 0.012 },
  EUR: { base: 11, multiplier: 0.011 },
};

export default function Pricing() {
  const [currency, setCurrency] = useState("INR");
  const [annual, setAnnual] = useState(false);

  const price = useMemo(() => {
    const data = pricingMatrix[currency];

    let value = data.base * data.multiplier;

    if (annual) {
      value = value * 12 * 0.8; // 20% discount
    }

    return value.toFixed(2);
  }, [currency, annual]);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Pricing Matrix</h2>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="INR">INR ₹</option>
          <option value="USD">USD $</option>
          <option value="EUR">EUR €</option>
        </select>

        <button onClick={() => setAnnual(!annual)} style={styles.toggle}>
          {annual ? "Switch to Monthly" : "Switch to Annual (20% off)"}
        </button>
      </div>

      {/* PRICE DISPLAY */}
      <div style={styles.card}>
        <h3>Pro Plan</h3>
        <h1>
          {currency === "INR" ? "₹" : currency === "USD" ? "$" : "€"}
          {price}
        </h1>
        <p>{annual ? "Billed yearly" : "Billed monthly"}</p>
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
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "40px",
    borderRadius: "20px",
    display: "inline-block",
    color: "var(--arctic)",
  },

  title: {
    fontFamily: "var(--font-code)",
    fontSize: "32px",
    marginBottom: "30px",
  },

  controls: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "30px",
  },

  toggle: {
    padding: "10px 14px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #172B36",
  },
};
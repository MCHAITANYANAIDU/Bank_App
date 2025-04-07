import React, { useState } from 'react';

const RDContributionTracker = () => {
  const [monthly, setMonthly] = useState(2000);
  const tenure = 12;
  const total = monthly * tenure;
  const maturity = total + total * 0.06;

  return (
    <div style={styles.card}>
      <h2>RD Contribution Tracker</h2>
      <label>
        Monthly Contribution: ₹
        <input type="number" value={monthly} onChange={e => setMonthly(+e.target.value)} />
      </label>
      <p>Tenure: {tenure} months</p>
      <p>Total Invested: ₹{total}</p>
      <p>Estimated Maturity: ₹{maturity.toFixed(2)}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #444',
    padding: '20px',
    margin: '20px auto',
    width: '320px',
    background: '#e6f2ff',
    borderRadius: '10px'
  }
};

export default RDContributionTracker;

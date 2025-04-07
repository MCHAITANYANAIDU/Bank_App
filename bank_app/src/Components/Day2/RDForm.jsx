import React, { useState } from 'react';

const RDForm = () => {
  const [monthly, setMonthly] = useState('');
  const [tenure, setTenure] = useState('');
  const [bank, setBank] = useState('');
  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = parseFloat(monthly) * parseInt(tenure);
    const maturity = total + total * 0.06;
    setSummary({ monthly, tenure, bank, total, maturity });
  };

  return (
    <div style={styles.container}>
      <h2>RD Plan Creation</h2>
      <form onSubmit={handleSubmit}>
        <label>Monthly Contribution: ₹
          <input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} required />
        </label>
        <br />
        <label>Tenure (months):
          <input type="number" value={tenure} onChange={e => setTenure(e.target.value)} required />
        </label>
        <br />
        <label>Bank Name:
          <input type="text" value={bank} onChange={e => setBank(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Create Plan</button>
      </form>
      {summary && (
        <div>
          <h4>Plan Summary</h4>
          <p>Bank: {summary.bank}</p>
          <p>Total Invested: ₹{summary.total}</p>
          <p>Estimated Maturity: ₹{summary.maturity.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '380px',
    margin: '20px auto',
    padding: '20px',
    background: '#e6f7ff',
    borderRadius: '10px',
    border: '1px solid #aaa'
  }
};

export default RDForm;

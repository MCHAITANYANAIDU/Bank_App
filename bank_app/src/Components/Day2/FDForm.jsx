import React, { useState } from 'react';

const FDForm = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const interestRate = 7.5; // auto-filled
  const [maturity, setMaturity] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calcMaturity = parseFloat(amount) + (parseFloat(amount) * interestRate * tenure) / 100;
    setMaturity(calcMaturity.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2>FD Investment Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Deposit Amount: ₹
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
        </label>
        <br />
        <label>Tenure (years):
          <input type="number" value={tenure} onChange={e => setTenure(e.target.value)} required />
        </label>
        <br />
        <label>Interest Rate: {interestRate}%</label>
        <br />
        <button type="submit">Calculate Maturity</button>
      </form>
      {maturity && <p>Maturity Amount: ₹{maturity}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #bbb',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  }
};

export default FDForm;

// src/components/Day2/FDForm.jsx
import React, { useState } from 'react';
import './FDForm.css';

const FDForm = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const interestRate = 7.5; // Auto-filled
  const [maturityAmount, setMaturityAmount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const interest = (depositAmount * interestRate * tenure) / (12 * 100);
    setMaturityAmount(parseFloat(depositAmount) + interest);
  };

  return (
    <div className="fd-form-container">
      <h2 className="fd-form-title">📈 Fixed Deposit Calculator</h2>
      <form onSubmit={handleSubmit} className="fd-form">
        <div className="fd-form-group">
          <label>Deposit Amount (₹)</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            required
          />
        </div>
        <div className="fd-form-group">
          <label>Tenure (Months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            required
          />
        </div>
        <div className="fd-form-group">
          <label>Interest Rate (%)</label>
          <input type="text" value={interestRate} disabled />
        </div>
        <button type="submit" className="fd-btn">Calculate Maturity</button>
      </form>

      {maturityAmount && (
        <div className="fd-summary">
          <h4>💡 Maturity Details</h4>
          <p><strong>Total Maturity:</strong> ₹{maturityAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default FDForm;

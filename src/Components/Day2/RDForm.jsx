// src/components/Day2/RDForm.jsx
import React, { useState } from 'react';
import './RDForm.css';

const RDForm = () => {
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [tenure, setTenure] = useState('');
  const [bankName, setBankName] = useState('');
  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalInvestment = monthlyContribution * tenure;
    const maturity = totalInvestment + totalInvestment * 0.05; // 5% interest
    setSummary({
      monthlyContribution,
      tenure,
      bankName,
      maturity,
    });
  };

  return (
    <div className="rd-form-container">
      <h2 className="rd-form-title">💰 Create Recurring Deposit Plan</h2>
      <form onSubmit={handleSubmit} className="rd-form">
        <div className="rd-form-group">
          <label>Monthly Contribution (₹)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            required
          />
        </div>
        <div className="rd-form-group">
          <label>Tenure (Months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            required
          />
        </div>
        <div className="rd-form-group">
          <label>Bank Name</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="rd-btn">Show Summary</button>
      </form>

      {summary && (
        <div className="rd-summary">
          <h4>📊 Summary</h4>
          <p><strong>Bank:</strong> {summary.bankName}</p>
          <p><strong>Total Invested:</strong> ₹{summary.monthlyContribution * summary.tenure}</p>
          <p><strong>Estimated Maturity:</strong> ₹{summary.maturity.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default RDForm;

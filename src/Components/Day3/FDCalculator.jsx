// src/components/Day3/FDCalculator.jsx
import React, { useState } from 'react';
import './FDCalculator.css'; // 👈 Import custom styles

const FDCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState(5.5);
  const [maturity, setMaturity] = useState(null);

  const handleCalculate = () => {
    const interest = (amount * interestRate * tenure) / 100;
    setMaturity(parseFloat(amount) + interest);
  };

  const handleTenureChange = (e) => {
    const value = e.target.value;
    setTenure(value);
    if (value >= 60) setInterestRate(7);
    else if (value >= 36) setInterestRate(6.5);
    else setInterestRate(5.5);
  };

  return (
    <div className="container mt-4">
      <div className="fd-card p-4 shadow-sm rounded">
        <h3 className="text-primary mb-3">💰 FD Calculator</h3>
        <div className="mb-3">
          <label className="form-label">Deposit Amount</label>
          <input className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount in ₹" />
        </div>
        <div className="mb-3">
          <label className="form-label">Tenure (in months)</label>
          <input className="form-control" value={tenure} onChange={handleTenureChange} type="number" placeholder="e.g. 12, 36, 60" />
        </div>
        <div className="mb-3">
          <label className="form-label">Interest Rate</label>
          <div className="badge bg-info text-dark p-2">{interestRate}%</div>
        </div>
        <button className="btn btn-primary w-100" onClick={handleCalculate}>Calculate Maturity</button>

        {maturity && (
          <div className="alert alert-success mt-4 fw-semibold text-center">
            🎉 Maturity Amount: ₹{maturity.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default FDCalculator;

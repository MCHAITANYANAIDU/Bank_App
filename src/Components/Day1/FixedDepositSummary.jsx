import React, { useState } from 'react';
import './FixedDepositSummary.css';

const FixedDepositSummary = ({ depositAmount, interestRate, tenure, maturityAmount }) => {
  const [detailed, setDetailed] = useState(false);

  return (
    <div className="fds-container">
      <div className="fds-header">
        <h2>Fixed Deposit Summary</h2>
        <button onClick={() => setDetailed(!detailed)}>
          {detailed ? '↩ Back to Summary' : '🔍 View Details'}
        </button>
      </div>
      <div className={`fds-content ${detailed ? 'open' : ''}`}>
        <div className="fds-row">
          <span>Deposit Amount</span>
          <span>₹{depositAmount}</span>
        </div>
        <div className="fds-row">
          <span>Interest Rate</span>
          <span>{interestRate}%</span>
        </div>
        <div className="fds-row">
          <span>Tenure</span>
          <span>{tenure} months</span>
        </div>
        {detailed && (
          <div className="fds-row highlight">
            <span>Maturity Amount</span>
            <span>₹{maturityAmount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedDepositSummary;

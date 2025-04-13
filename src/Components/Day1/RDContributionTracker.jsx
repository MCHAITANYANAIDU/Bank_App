// src/components/Day1/RDContributionTracker.jsx
import React from 'react';
import './RDContributionTracker.css';

const RDContributionTracker = ({ monthlyAmount, interestRate, months, totalAmount }) => {
  return (
    <div className="fds-container">
      <div className="fds-header">
        <h2>RD Contribution Tracker</h2>
      </div>
      <div className="fds-content">
        <div className="fds-row">
          <span>Monthly Contribution</span>
          <span>₹{monthlyAmount}</span>
        </div>
        <div className="fds-row">
          <span>Interest Rate</span>
          <span>{interestRate}%</span>
        </div>
        <div className="fds-row">
          <span>Duration</span>
          <span>{months} months</span>
        </div>
        <div className="fds-row highlight">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default RDContributionTracker;

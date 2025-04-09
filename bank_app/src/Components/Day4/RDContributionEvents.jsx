import React, { useState } from 'react';

const RDContributionEvents = () => {
  const [contribution, setContribution] = useState(500);
  const tenure = 12;
  const interestRate = 6;

  const handleIncrement = () => setContribution((prev) => prev + 100);
  const handleDecrement = () =>
    setContribution((prev) => (prev >= 100 ? prev - 100 : 0));

  const totalInvested = contribution * tenure;
  const estimatedMaturity = totalInvested + (totalInvested * interestRate * tenure) / (100 * 12);

  return (
    <div className="rd-contribution">
      <h2>RD Contribution Tracker</h2>
      <p>Monthly Contribution: ₹{contribution}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>Tenure: {tenure} months</p>
      <p>Total Invested: ₹{totalInvested}</p>
      <p>Estimated Maturity: ₹{estimatedMaturity.toFixed(2)}</p>
    </div>
  );
};

export default RDContributionEvents;

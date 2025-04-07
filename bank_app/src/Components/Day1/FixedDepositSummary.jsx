import React, { useState } from 'react';

const FixedDepositSummary = ({ depositAmount, interestRate, tenure, maturityAmount }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={styles.card}>
      <h2>Fixed Deposit Summary</h2>
      <p>Deposit Amount: ₹{depositAmount}</p>
      <p>Maturity Amount: ₹{maturityAmount}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Detailed View'}
      </button>
      {showDetails && (
        <div>
          <p>Interest Rate: {interestRate}%</p>
          <p>Tenure: {tenure} years</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    margin: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    background: '#f9f9f9',
  },
};

export default FixedDepositSummary;

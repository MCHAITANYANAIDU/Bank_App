import React, { useState } from 'react';

const FDMaturityCalc = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    let rate = tenure >= 5 ? 7 : 5;
    const interest = (amount * rate * tenure) / 100;
    setMaturityAmount(parseFloat(amount) + interest);
  };

  return (
    <div className="fd-calc-container">
      <h2>FD Maturity Calculator</h2>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tenure (years)"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
      />
      <button onClick={calculateMaturity}>Calculate Maturity</button>
      {maturityAmount && (
        <div>
          <h4>Estimated Maturity Amount: ₹{maturityAmount.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default FDMaturityCalc;

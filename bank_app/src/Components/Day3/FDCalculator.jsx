import React, { useState } from 'react';

const FDCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interest, setInterest] = useState('');
  const [maturity, setMaturity] = useState(null);

  const handleCalculate = () => {
    const calc = parseFloat(amount) + (parseFloat(amount) * parseFloat(interest) * parseFloat(tenure)) / 100;
    setMaturity(calc.toFixed(2));
  };

  return (
    <div>
      <h2>FD Calculator</h2>
      <input placeholder="Deposit Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <input placeholder="Tenure (in years)" type="number" value={tenure} onChange={e => setTenure(e.target.value)} />
      <input placeholder="Interest Rate (%)" type="number" value={interest} onChange={e => setInterest(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {maturity && <p>Maturity Amount: ₹{maturity}</p>}
    </div>
  );
};

export default FDCalculator;

import React from 'react';
import { Link } from 'react-router-dom';

const dummyInvestments = [
  { id: 1, type: 'FD', amount: 10000 },
  { id: 2, type: 'RD', amount: 3000 }
];

const InvestmentHistory = () => (
  <div>
    <h2>Investment History</h2>
    <ul>
      {dummyInvestments.map(inv => (
        <li key={inv.id}>
          <Link to={`/investment/${inv.id}`}>
            {inv.type} - ₹{inv.amount}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default InvestmentHistory;

import React from 'react';
import { useParams } from 'react-router-dom';

const InvestmentDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Investment Details</h2>
      <p>Investment ID: {id}</p>
      <p>More info about investment #{id} goes here.</p>
    </div>
  );
};

export default InvestmentDetail;

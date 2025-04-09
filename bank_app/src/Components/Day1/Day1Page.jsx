import React from 'react';
import FixedDepositSummary from './FixedDepositSummary';
import RDContributionTracker from './RDContributionTracker';
import CustomerProfile from './CustomerProfile';

const Day1Page = () => {
  return (
    <div>
      <h2>Day 1 Assignments</h2>
      <FixedDepositSummary />
      <RDContributionTracker />
      <CustomerProfile />
    </div>
  );
};

export default Day1Page;

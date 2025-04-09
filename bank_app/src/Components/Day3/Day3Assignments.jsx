import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import FDCalculator from './FDCalculator';
import RDSummary from './RDSummary';
import InvestmentHistory from './InvestmentHistory';
import InvestmentDetail from './InvestmentDetail';
import Dashboard from './Dashboard';
import CreateFD from './CreateFD';
import CreateRD from './CreateRD';
import Support from './Support';

const Day3Assignments = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fixed-deposit" element={<FDCalculator />} />
      <Route path="/recurring-deposit" element={<RDSummary />} />
      <Route path="/investment-history" element={<InvestmentHistory />} />
      <Route path="/investment/:id" element={<InvestmentDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-fd" element={<CreateFD />} />
      <Route path="/create-rd" element={<CreateRD />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default Day3Assignments;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Day1Page from './Components/Day1/Day1Page'; // 👈 import this at the top


// Day 1 Components
import FixedDepositSummary from './Components/Day1/FixedDepositSummary';
import RDContributionTracker from './Components/Day1/RDContributionTracker';
import CustomerProfile from './Components/Day1/CustomerProfile';

// Day 2 Components
import FDForm from './Components/Day2/FDForm';
import RDForm from './Components/Day2/RDForm';
import BranchSelector from './Components/Day2/BranchSelector';

// Day 3 Components
import Home from './Components/Day3/Home';
import FDCalculator from './Components/Day3/FDCalculator';
import RDSummary from './Components/Day3/RDSummary';
import InvestmentHistory from './Components/Day3/InvestmentHistory';
import InvestmentDetail from './Components/Day3/InvestmentDetail';
import Dashboard from './Components/Day3/Dashboard';
import CreateFD from './Components/Day3/CreateFD';
import CreateRD from './Components/Day3/CreateRD';
import Support from './Components/Day3/Support';

// Day 4 Components
import FDMaturityCalc from './Components/Day4/FDMaturityCalc';
import RDContributionEvents from './Components/Day4/RDContributionEvents';
import ThemeSwitcher from './Components/Day4/ThemeSwitcher';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Day 1 Routes */}
        {/* Day 1 Routes */}
<Route path="/day1" element={<Day1Page />} />
<Route path="/day1/fd-summary" element={<FixedDepositSummary />} />
<Route path="/day1/rd-tracker" element={<RDContributionTracker />} />
<Route path="/day1/profile" element={<CustomerProfile />} />

        {/* Day 2 Routes */}
        <Route path="/day2/fd-form" element={<FDForm />} />
        <Route path="/day2/rd-form" element={<RDForm />} />
        <Route path="/day2/branch-selector" element={<BranchSelector />} />

        {/* Day 3 Routes */}
        <Route path="/fixed-deposit" element={<FDCalculator />} />
        <Route path="/recurring-deposit" element={<RDSummary />} />
        <Route path="/investment-history" element={<InvestmentHistory />} />
        <Route path="/investment/:id" element={<InvestmentDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-fd" element={<CreateFD />} />
        <Route path="/create-rd" element={<CreateRD />} />
        <Route path="/support" element={<Support />} />

        {/* Day 4 Routes */}
        <Route path="/day4/fd-maturity" element={<FDMaturityCalc />} />
        <Route path="/day4/rd-events" element={<RDContributionEvents />} />
        <Route path="/day4/theme" element={<ThemeSwitcher />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

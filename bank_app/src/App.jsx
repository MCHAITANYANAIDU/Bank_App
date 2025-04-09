import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Day1Assignments from './components/Day1/Day1Assignments';
import Day2Assignments from './components/Day2/Day2Assignments';
import Day3Assignments from './components/Day3/Day3Assignments';
import Day4Assignments from './components/Day4/Day4Assignments';
import FDCalculator from './components/Day3/FDCalculator';
import RDSummary from './components/Day3/RDSummary';
import InvestmentHistory from './components/Day3/InvestmentHistory';
import InvestmentDetail from './components/Day3/InvestmentDetail';
import Dashboard from './components/Day3/Dashboard';
import CreateFD from './components/Day3/CreateFD';
import CreateRD from './components/Day3/CreateRD';
import Support from './components/Day3/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1Assignments />} />
        <Route path="/day2" element={<Day2Assignments />} />
        <Route path="/day3/*" element={<Day3Assignments />}>
          <Route path="fixed-deposit" element={<FDCalculator />} />
          <Route path="recurring-deposit" element={<RDSummary />} />
          <Route path="investment-history" element={<InvestmentHistory />} />
          <Route path="investment/:id" element={<InvestmentDetail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-fd" element={<CreateFD />} />
          <Route path="create-rd" element={<CreateRD />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/day4" element={<Day4Assignments />} />
      </Routes>
    </Router>
  );
}

export default App;

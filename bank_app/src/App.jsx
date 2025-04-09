// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Home and Day Assignment Pages
import Home from './Components/Home';
import Day1Assignments from './Components/Day1/Day1Assignments';
import Day2Assignments from './Components/Day2/Day2Assignments';
import Day3Assignments from './Components/Day3/Day3Assignments';
import Day4Assignments from './Components/Day4/Day4Assignments';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1Assignments />} />
        <Route path="/day2" element={<Day2Assignments />} />
        <Route path="/day3" element={<Day3Assignments />} />
        <Route path="/day4" element={<Day4Assignments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

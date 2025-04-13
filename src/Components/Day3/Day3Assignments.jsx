// src/components/Day3/Day3Assignments.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Day3Assignments.css'; // 👈 external CSS file for extra styles

const Day3Assignments = () => {
  return (
    <div className="container mt-4 day3-container">
      <h2 className="text-info mb-3 fw-bold">📘 Day 3 Assignments</h2>
      <p className="mb-4 fs-5">Below are the available dynamic routing endpoints:</p>

      <ul className="list-group mb-4 shadow-sm">
        <li className="list-group-item custom-link">
          <Link to="fixed-deposit">💰 Fixed Deposit Calculator</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="recurring-deposit">🔁 Recurring Deposit Summary</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="investment-history">📈 Investment History</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="investment/101">🔍 Investment Detail (ID: 101)</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="dashboard">📊 Dashboard</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="create-fd">📝 Create FD</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="create-rd">📝 Create RD</Link>
        </li>
        <li className="list-group-item custom-link">
          <Link to="support">🛠️ Support</Link>
        </li>
        
        

      </ul>

      <Outlet />
    </div>
  );
};

export default Day3Assignments;

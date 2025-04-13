// src/components/Day3/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; // 👈 Import external CSS

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <div className="dashboard-card shadow-sm p-4 rounded">
        <h3 className="text-primary mb-3">📊 Dashboard Overview</h3>
        <ul className="list-group custom-list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total FDs
            <span className="badge bg-success rounded-pill">3</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total RDs
            <span className="badge bg-warning text-dark rounded-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total Investment
            <span className="badge bg-info text-dark rounded-pill">₹1,50,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

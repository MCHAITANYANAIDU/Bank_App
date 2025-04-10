// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const days = [
    { title: 'Day 1', desc: 'FD/RD Summary & Profiles', route: '/day1', icon: '📄' },
    { title: 'Day 2', desc: 'Deposit Forms & Branch Selector', route: '/day2', icon: '📝' },
    { title: 'Day 3', desc: 'Dashboard & History View', route: '/day3', icon: '📊' },
    { title: 'Day 4', desc: 'Interest Calculators & Theme', route: '/day4', icon: '🧮' },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">🏦 Banking Assignment Portal</span>
        </div>
      </nav>

      {/* Main Grid */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Select an Assignment Day</h2>
        <div className="row justify-content-center g-4">
          {days.map((day, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="card day-card shadow-sm border-0 h-100 hover-card"
                onClick={() => navigate(day.route)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body text-center">
                  <div className="day-icon mb-3">{day.icon}</div>
                  <h5 className="card-title">{day.title}</h5>
                  <p className="card-text text-muted">{day.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

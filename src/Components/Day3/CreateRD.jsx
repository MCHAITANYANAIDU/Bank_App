// src/components/Day3/CreateRD.jsx
import React, { useState } from 'react';
import './CreateRD.css'; // 👈 External styling

const CreateRD = () => {
  const [form, setForm] = useState({ contribution: '', tenure: '', bank: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ RD Created: ₹${form.contribution} per month for ${form.tenure} months with ${form.bank}`);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow rd-card">
        <div className="card-header bg-success text-white fw-semibold">
          🏦 Create Recurring Deposit
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">💸 Monthly Contribution (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter monthly contribution"
                value={form.contribution}
                onChange={(e) => setForm({ ...form, contribution: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">📆 Tenure (Months)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter tenure in months"
                value={form.tenure}
                onChange={(e) => setForm({ ...form, tenure: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">🏛️ Bank Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter bank name"
                value={form.bank}
                onChange={(e) => setForm({ ...form, bank: e.target.value })}
                required
              />
            </div>
            <button className="btn btn-success w-100 fw-bold" type="submit">
              ✅ Submit RD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRD;

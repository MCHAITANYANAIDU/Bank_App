// src/components/Day3/CreateFD.jsx
import React, { useState } from 'react';
import './CreateFD.css'; // 

const CreateFD = () => {
  const [form, setForm] = useState({ amount: '', tenure: '', interest: '6.5' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ FD Created: ₹${form.amount} for ${form.tenure} months at ${form.interest}% interest`);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow fd-card">
        <div className="card-header bg-primary text-white fw-semibold">
          💼 Create Fixed Deposit
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">💰 Amount (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
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
              <label className="form-label">📈 Interest Rate (%)</label>
              <input
                type="text"
                className="form-control"
                value={form.interest}
                disabled
              />
            </div>
            <button className="btn btn-success w-100 fw-bold" type="submit">
              🚀 Submit FD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFD;

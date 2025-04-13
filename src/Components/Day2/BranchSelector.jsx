// src/components/Day2/BranchSelector.jsx
import React, { useState } from 'react';
import './BranchSelector.css';

const branches = {
  Hyderabad: { address: 'Ameerpet, Hyderabad', code: 'HYD001', ifsc: 'HYDB0001' },
  Bangalore: { address: 'Indiranagar, Bangalore', code: 'BLR001', ifsc: 'BLRB0001' },
  Chennai: { address: 'T Nagar, Chennai', code: 'CHN001', ifsc: 'CHNB0001' },
};

const BranchSelector = () => {
  const [selectedBranch, setSelectedBranch] = useState('');

  const handleChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <div className="branch-box">
      <h3 className="branch-title">🌐 Select Your Branch</h3>

      <select className="branch-dropdown" onChange={handleChange} defaultValue="">
        <option value="" disabled>Select a branch</option>
        {Object.keys(branches).map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>

      {selectedBranch && (
        <div className="branch-info">
          <h4 className="info-title">{selectedBranch} Branch Details</h4>
          <ul className="info-list">
            <li><strong>📍 Address:</strong> {branches[selectedBranch].address}</li>
            <li><strong>🏢 Branch Code:</strong> {branches[selectedBranch].code}</li>
            <li><strong>💳 IFSC:</strong> {branches[selectedBranch].ifsc}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BranchSelector;

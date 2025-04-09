// src/components/Day2/BranchSelector.jsx
import React, { useState } from 'react';

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
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-dark text-white">Bank Branch Selector</div>
      <div className="card-body">
        <div className="mb-3">
          <label>Select Branch</label>
          <select className="form-select" onChange={handleChange} defaultValue="">
            <option value="" disabled>Select</option>
            {Object.keys(branches).map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {selectedBranch && (
          <div className="alert alert-secondary">
            <p><strong>Address:</strong> {branches[selectedBranch].address}</p>
            <p><strong>Branch Code:</strong> {branches[selectedBranch].code}</p>
            <p><strong>IFSC:</strong> {branches[selectedBranch].ifsc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BranchSelector;

import React, { useState } from 'react';

const branches = {
  "Hyderabad": { address: "HiTech City, Hyderabad", code: "HYD123", ifsc: "HDFC0001234" },
  "Bangalore": { address: "MG Road, Bangalore", code: "BLR456", ifsc: "HDFC0004567" },
  "Mumbai": { address: "Andheri, Mumbai", code: "MUM789", ifsc: "HDFC0007890" }
};

const BranchSelector = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  
  return (
    <div style={styles.container}>
      <h2>Select Bank Branch</h2>
      <select onChange={(e) => setSelectedBranch(e.target.value)} value={selectedBranch}>
        <option value="">-- Select Branch --</option>
        {Object.keys(branches).map(branch => (
          <option key={branch} value={branch}>{branch}</option>
        ))}
      </select>
      {selectedBranch && (
        <div>
          <h4>Branch Details:</h4>
          <p><strong>Address:</strong> {branches[selectedBranch].address}</p>
          <p><strong>Branch Code:</strong> {branches[selectedBranch].code}</p>
          <p><strong>IFSC:</strong> {branches[selectedBranch].ifsc}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: '20px auto',
    padding: '20px',
    background: '#fff0f5',
    border: '1px solid #ccc',
    borderRadius: '10px'
  }
};

export default BranchSelector;

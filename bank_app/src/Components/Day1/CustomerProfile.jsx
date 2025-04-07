import React from 'react';

const CustomerProfile = ({ name, totalFDs, totalRDs, totalInvestment }) => {
  return (
    <div style={styles.card}>
      <h2>Customer Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Total FDs:</strong> {totalFDs}</p>
      <p><strong>Total RDs:</strong> {totalRDs}</p>
      <p><strong>Total Investment:</strong> ₹{totalInvestment}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    border: '1px solid #aaa',
    margin: '20px auto',
    width: '300px',
    background: '#fffbe6',
    borderRadius: '10px'
  }
};

export default CustomerProfile;

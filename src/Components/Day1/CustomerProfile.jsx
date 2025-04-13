// src/components/Day1/CustomerProfile.jsx
import React from 'react';
import './CustomerProfile.css';

const CustomerProfile = () => {
  const customer = {
    name: "M Chaitanya Prasad",
    email: "mchaitanyaprasad65@gmail.com",
    phone: "9876543210",
    pan: "ABCDE1234F"
  };

  return (
    <div className="fds-container">
      <div className="fds-header">
        <h2>Customer Profile</h2>
      </div>
      <div className="fds-content">
        <div className="fds-row">
          <span>Name</span>
          <span>{customer.name}</span>
        </div>
        <div className="fds-row">
          <span>Email</span>
          <span>{customer.email}</span>
        </div>
        <div className="fds-row">
          <span>Phone</span>
          <span>{customer.phone}</span>
        </div>
        <div className="fds-row highlight">
          <span>PAN Number</span>
          <span>{customer.pan}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;

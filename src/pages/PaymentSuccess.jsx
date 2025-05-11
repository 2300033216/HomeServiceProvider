import React from 'react';
import '../styles/PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="success-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        alt="Success Tick"
        className="success-img"
      />
      <h2>Payment Successful!</h2>
      <p>Thank you for availing our service. Your service provider is on the way! 🛠</p>
      <button className="btn-track-order">Track Service</button>
    </div>
  );
};

export default PaymentSuccess;
import React from 'react';
import '../styles/QrPayment.css';

const QrPayment = () => {
  return (
    <div className="qr-container">
      <h2>Pay for Your Service</h2>
      <div className="qr-box">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=provider@upi&pn=HomeServices&mc=0000&tid=1234567890&tr=service_payment&am=499.00&cu=INR&tn=Home+Service+Payment&size=200x200"
          alt="QR Code"
          className="qr-img"
        />
        <p>Scan this QR code using any UPI app to complete your service payment.</p>
      </div>
      <button className="btn-payment">I've Completed the Payment</button>
    </div>
  );
};

export default QrPayment;
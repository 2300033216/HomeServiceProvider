// Tracking.jsx
import React, { useEffect, useState } from "react";
import "../styles/OrderTracking.css";

function Tracking() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = JSON.parse(localStorage.getItem("booking"));
    setBooking(savedBooking);
  }, []);

  if (!booking) return <p>No booking found.</p>;

  return (
    <div className="tracking-container">
      <h2>Service Booking Status</h2>
      <p>Status: <strong>{booking.status}</strong></p>
      <p>Scheduled Time: {booking.scheduledTime}</p>
      <p>Service Address: {booking.address}</p>

      {booking.professional && (
        <>
          <h3>Assigned Professional</h3>
          <p>Name: {booking.professional.name}</p>
          <p>Contact: {booking.professional.contact}</p>
        </>
      )}

      <h3>Booked Services:</h3>
      <ul>
        {booking.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>

      <div className="map-container">
        <iframe
          title="Service Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            booking.address
          )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Tracking;

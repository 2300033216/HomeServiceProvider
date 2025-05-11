import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Inquiry Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Our Team</h2>
      {submitted ? (
        <p className="success-message">
          Thank you for your inquiry! Our team will contact you shortly to assist with your service request.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">How can we help you?</label>
          <textarea
            id="message"
            name="message"
            placeholder="Describe the service you need (e.g., plumbing, cleaning, etc.)"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      )}
    </div>
  );
};

export default Contact;

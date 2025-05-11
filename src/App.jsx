// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Service from "./pages/Service";
import Cart from "./pages/Cart";
import OrderTracking from "./pages/OrderTracking";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Insert from "./pages/Insert";
import Show from "./pages/Show";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import QrPayment from "./pages/QrPayment";
import PaymentSuccess from "./pages/PaymentSuccess";

// Add the new routes ("/services", "/bookings", "/track-technician")
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/payment" element={<QrPayment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/show" element={<Show />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
        
        {/* New routes */}
        <Route path="/services" element={<Service />} /> {/* You can change this to the correct page */}
        <Route path="/bookings" element={<Show />} /> {/* You can update the page here */}
        <Route path="/track-technician" element={<OrderTracking />} /> {/* You can update the page here */}
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

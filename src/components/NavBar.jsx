import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [serviceCart, setServiceCart] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, []);

  const totalCartItems = serviceCart.reduce((t, item) => t + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left logo">
        <Link to="/">🛠 <span className="brand">HomeFix</span></Link>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/bookings">My Bookings</Link></li>
          <li><Link to="/track-technician">Track Technician</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setShowAdminMenu(v => !v)}
            >
              Admin ▾
            </button>
            {showAdminMenu && (
              <ul className="dropdown-menu vertical-menu">
                <li><Link to="/admin/add-service">Add Service</Link></li>
                <li><Link to="/admin/view-services">View Services</Link></li>
                <li><Link to="/admin/assign-technician">Assign Technician</Link></li>
                <li><Link to="/admin/manage-users">Manage Users</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {currentUser ? (
          <div className="dropdown">
            <button
              className="dropdown-toggle username"
              onClick={() => setShowProfileMenu(v => !v)}
            >
              👤 {currentUser.name} ▾
            </button>
            {showProfileMenu && (
              <ul className="dropdown-menu profile-menu">
                <li>
                  <button
                    className="logout-button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}

        <div className="cart-container">
          <Link to="/cart" className="cart-icon">
            🧰 <span className="cart-count">{totalCartItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

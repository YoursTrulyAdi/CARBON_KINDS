import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">EcoFinds</Link>

        {/* Center Links & Search */}
        <div className="center-links">
          <input
            type="text"
            className="search-input"
            placeholder="Search for clothes, furniture, and more..."
          />

          <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <Link to="/browse">Browse</Link>
            <Link to="/about">Why EcoFinds?</Link>
            <Link to="/sell">Sell</Link>
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-btn">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

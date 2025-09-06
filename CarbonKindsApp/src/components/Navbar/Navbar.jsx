// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">EcoFinds</Link>

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

        <div className="auth-buttons">
          {currentUser ? (
            <>
              <span className="welcome">
  Hi, {currentUser?.displayName || "User"}
</span>

              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="login-btn">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="signup-btn">Sign Up</button>
              </Link>
            </>
          )}
        </div>

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

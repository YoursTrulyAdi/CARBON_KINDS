import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h3>EcoFinds</h3>
          <p>Empowering sustainable consumption by giving pre-loved items a new life.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="/browse">Browse</a></li>
            <li><a href="/sell">Sell</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 EcoFinds. Empowering Sustainable Consumption.
      </div>
    </footer>
  );
};

export default Footer;

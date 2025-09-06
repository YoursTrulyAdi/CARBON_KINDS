import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        {/* Left Column: Text */}
        <div className="hero-text">
          <h1>Discover Pre-loved. Define Your Style.</h1>
          <p>
            Join a trusted community extending the life of great products.
            Your journey to conscious consumption starts here.
          </p>
          <a href="/browse" className="cta-btn">
            Explore Finds
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Sustainable products" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

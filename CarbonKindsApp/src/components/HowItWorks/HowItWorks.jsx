import React from 'react';
import './HowItWorks.css';
import { FaSearch, FaHandshake, FaCamera } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch />, title: 'Find Unique Items', desc: 'Browse thousands of listings...' },
  { icon: <FaHandshake />, title: 'Connect with Sellers', desc: 'Engage with our community...' },
  { icon: <FaCamera />, title: 'Sell Your Own', desc: 'Easily create a listing...' },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <h2>Your Circular Journey in 3 Steps</h2>
    <div className="steps">
      {steps.map((step, i) => (
        <div key={i} className="step-card">
          <div className="icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;

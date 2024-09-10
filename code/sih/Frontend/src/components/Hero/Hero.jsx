import React from "react";
import heroImage from '../assets/image.png'; // Adjust the path
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-heading">
          “Empower Your Business with Sentinal”
          </h1>
          <p className="hero-subheading">
          Identify, Assess, and Mitigate Risks with Confidence
          </p>
          <button className="hero-button"onClick={() => window.location.href = '/auth'}>
          Get Started Today
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Business Strategy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

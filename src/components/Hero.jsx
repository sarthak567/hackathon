// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import heroImage from "./image.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to the Future</h1>
        <p>
          Discover solutions that empower and inspire. Transform your ideas into
          reality with us.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;

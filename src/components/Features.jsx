// src/components/Features.jsx
import React from "react";
import "./Features.css";
import feature1 from "./iskon.jpg";
import feature2 from "./image copy.png";
import feature3 from "./img.jpg";

const Features = () => {
  const features = [
    {
      title: "Fast Performance",
      description: "Optimized for speed and efficiency.",
      image: feature1,
    },
    {
      title: "Customizable",
      description: "Easily tailored to your requirements.",
      image: feature2,
    },
    {
      title: "Responsive Design",
      description: "Looks great on all devices.",
      image: feature3,
    },
  ];

  return (
    <section id="features" className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const testimonials = [
    { name: "John Doe", quote: "This platform changed my life!" },
    { name: "Jane Smith", quote: "Incredible features and support." },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;

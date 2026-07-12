import React from 'react';

function Hero({ name }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="gradient-text">{name}</span>
          </h1>
          <p>Full Stack Developer & Machine Learning Enthusiast</p>
          <div className="hero-tags">
            <span>✨ Available for Freelance</span>
            <span>🚀 Open Source Contributor</span>
          </div>
        </div>
        <div className="hero-avatar">
          <img 
            src="\src\assets\Profile.jpeg" 
            alt={`${name} Profile`} 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

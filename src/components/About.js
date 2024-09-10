import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about fade-in">
      <div className="about-card">
        <section className="hero">
          <h1><i className="fas fa-user"></i> About Me</h1>
          <p className="tagline">Passionate IT Solutions Architect</p>
        </section>

        <section className="intro">
          <p>As a tech enthusiast and IT Solutions Architect, I have built my career around simplifying complex technological challenges for businesses. With a deep understanding of Microsoft 365, cloud computing, and enterprise systems like Odoo ERP, my goal is to enable businesses to operate efficiently, securely, and with a future-focused mindset.</p>
          <p>I specialize in IT infrastructure management, implementing robust cybersecurity measures, and exploring innovative uses of artificial intelligence for content creation and automation. Through my services, I aim to help businesses achieve digital transformation in a secure, scalable, and efficient manner.</p>
        </section>

        <section className="mission">
          <h2>Mission</h2>
          <p>My mission is to empower businesses by delivering comprehensive IT solutions that optimize performance, ensure security, and support growth. With a commitment to innovation, I focus on implementing technology that not only meets today's demands but anticipates tomorrow's challenges.</p>
        </section>

        <section className="certifications">
          <h2>Courses & Certifications</h2>
          <ul>
            <li><i className="fas fa-certificate"></i> Generative AI: Prompt Engineering Basics</li>
            <li><i className="fas fa-certificate"></i> Google IT Support</li>
          </ul>
        </section>

        <section className="call-to-action">
          <h2>Ready to work together?</h2>
          <p>Let's discuss how I can help your business thrive in the digital age.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </section>
      </div>
    </div>
  );
}

export default About;
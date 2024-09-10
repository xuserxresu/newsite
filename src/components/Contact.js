import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact fade-in">
      <div className="contact-card">
        <section className="hero">
          <h1><i className="fas fa-envelope"></i> Contact Me</h1>
          <p className="tagline">Let's discuss your IT needs</p>
        </section>

        <section className="contact-content">
          <p>Ready to take your business to the next level? Whether you're looking for cutting-edge IT solutions, AI-driven content, or robust cybersecurity, I'm here to help. Let's connect and explore how I can assist you in achieving your goals.</p>
          
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="cta-button">Send Message</button>
          </form>

          <div className="social-links">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
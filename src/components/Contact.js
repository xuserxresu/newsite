import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact fade-in">
      <div className="contact-card">
        <h1><i className="fas fa-envelope"></i> Get in Touch</h1>
        <p className="tagline">Let's discuss how I can help your business thrive</p>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h2>Connect With Me</h2>
            <p>You’re welcome to reach out through any of these channels:</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/sharfi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/sharfi__" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="mailto:sharfiahmed@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
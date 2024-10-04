import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message. We\'ll get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
    
  return (
    <div className="contact fade-in">
      <div className="contact-card">
        <h1><i className="fas fa-envelope"></i> Get in Touch</h1>
        <p className="tagline">Say Hi & Let's Grab a Coffee</p>

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
                aria-label="Your Name"
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
                aria-label="Your Email"
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
                aria-label="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {submitMessage && (
            <div className="terminal-overlay">
              <div className="terminal">
                <div className="terminal-header">
                  <span className="terminal-button red"></span>
                  <span className="terminal-button yellow"></span>
                  <span className="terminal-button green"></span>
                </div>
                <div className="terminal-window">
                  <p className="terminal-text">
                    $ Form submission: <span className={`typing ${submitMessage.type}`}>{submitMessage.text}</span>
                    <span className="cursor">|</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="contact-info">
            <h2>Connect With Me</h2>
            <p>You're welcome to reach out through any of these channels:</p>
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

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Here you would typically send the form data to your backend
     // Create URL-encoded form data
    const formDataEncoded = new URLSearchParams(formData).toString();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwxjyZQcJCU1U4r945RaQKOqaTD8H9c6djFC494_wZlnlvrn1--kJQgXLyDfLknzNa0GQ/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We\'ll get back to you soon!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(`Oops! Something went wrong. Server responded with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(`Oops! Something went wrong. Error: ${error.message}`);
    }

    setIsSubmitting(false);
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
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {submitMessage && <p className="submit-message">{submitMessage}</p>}

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

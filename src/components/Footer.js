import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ahmed Sharfi</h3>
          <p>Revolutionary IT Solutions for your business</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solutions">Solutions Tailored For You</Link></li>
            <li><Link to="/about">Get To Know Me</Link></li>
            <li><Link to="/blog">Bytes & Thoughts</Link></li>
            <li><Link to="/contact">Reach Out</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="mailto:sharfiahmed@gmail.com"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/sharfi" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/sharfi__" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/xuserxresu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ahmed Sharfi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
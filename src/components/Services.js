import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      id: 'microsoft365',
      icon: 'fas fa-cloud',
      title: 'Microsoft 365 Solutions',
      description: 'Maximize your organization\'s use of cloud-based tools with comprehensive Microsoft 365 solutions.'
    },
    {
      id: 'cybersecurity',
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Protect your business with advanced cybersecurity solutions and ongoing threat monitoring.'
    },
    {
      id: 'infrastructure',
      icon: 'fas fa-network-wired',
      title: 'IT Infrastructure Management',
      description: 'Design and manage robust, scalable IT infrastructures tailored to your business needs.'
    },
    {
      id: 'erp',
      icon: 'fas fa-cogs',
      title: 'Odoo ERP Implementation',
      description: 'Streamline your business processes with customized Odoo ERP solutions.'
    },
    {
      id: 'ai-content',
      icon: 'fas fa-brain',
      title: 'AI Writing & Image Generation',
      description: 'Leverage AI technology for high-quality, customized content creation.'
    },
    {
      id: 'hosting',
      icon: 'fas fa-server',
      title: 'Hosting & Domain Services',
      description: 'Ensure your online presence with secure and reliable hosting solutions.'
    }
  ];

  return (
    <div className="services fade-in">
      <div className="services-card">
        <h1><i className="fas fa-cogs"></i> What I Do</h1>
        <p className="tagline">Comprehensive IT solutions for your business needs</p>
        
        <div className="service-list">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="call-to-action">
          <h2>Ready to elevate your IT infrastructure?</h2>
          <p>Let's chat about how I can help your business thrive.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
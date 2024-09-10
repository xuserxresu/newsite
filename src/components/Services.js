import React from 'react';
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
        <section className="hero">
          <h1><i className="fas fa-cogs"></i> Our Services</h1>
          <p className="tagline">Comprehensive IT solutions for your business needs</p>
        </section>

        <section className="service-list">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        <section className="call-to-action">
          <h2>Ready to elevate your IT infrastructure?</h2>
          <p>Let's discuss how our services can benefit your business.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </section>
      </div>
    </div>
  );
}

export default Services;
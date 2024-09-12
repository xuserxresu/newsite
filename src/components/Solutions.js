import React, { useState } from 'react';
import './ServicesIProvide.css'; // Keep using the same CSS file

function Solutions() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'microsoft365',
      icon: 'fab fa-microsoft',
      title: 'Microsoft 365',
      description: 'Transform your team\'s productivity with Microsoft 365. We\'ll set up and optimize your Microsoft 365 environment, making collaboration and communication seamless and efficient.'
    },
    {
      id: 'odoo',
      icon: 'fas fa-cogs',
      title: 'Odoo ERP Solutions',
      description: 'Streamline your business operations with Odoo ERP. From implementation to customization, we tailor Odoo to fit your unique needs, helping you manage everything from inventory to customer relations effortlessly.'
    },
    {
      id: 'hosting',
      icon: 'fas fa-server',
      title: 'Hosting & Domain Names',
      description: 'Your online presence starts here. We offer reliable hosting and domain name management, ensuring your website runs smoothly and is easy for your customers to find.'
    },
    {
      id: 'vps',
      icon: 'fas fa-network-wired',
      title: 'VPS/VDS Expertise',
      description: 'Need powerful, scalable server solutions? Our VPS and VDS services provide the flexibility and security you need, tailored to support your growing business with top-notch performance.'
    },
    {
      id: 'server-management',
      icon: 'fas fa-tasks',
      title: 'Server Management',
      description: 'Ensure your IT infrastructure runs smoothly with our comprehensive server management services. We handle everything from routine maintenance to complex troubleshooting.'
    },
    {
      id: 'firewalls',
      icon: 'fas fa-shield-alt',
      title: 'Firewalls & Cybersecurity',
      description: 'Protect your digital assets with robust firewall solutions and cybersecurity measures. We implement and manage firewalls to safeguard your network from potential threats.'
    },
    {
      id: 'kaspersky',
      icon: 'fas fa-lock',
      title: 'Kaspersky Solutions',
      description: 'Benefit from top-tier antivirus and security solutions with Kaspersky. We\'ll help you integrate and manage Kaspersky products to keep your systems secure.'
    },
    {
      id: 'ai-image',
      icon: 'fas fa-image',
      title: 'AI Image Generation',
      description: 'Bring your ideas to life with AI-generated images. Whether for marketing or creative projects, we use cutting-edge AI technology to produce stunning visuals.'
    },
    {
      id: 'technical-writing',
      icon: 'fas fa-pen-fancy',
      title: 'Technical Writing',
      description: 'Communicate complex technical information clearly and effectively. Our technical writing services ensure that your documentation is accurate, user-friendly, and professional.'
    }
  ];

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="services-i-provide fade-in">
      <h1>Solutions Tailored for You</h1>
      <p className="intro">Comprehensive IT solutions tailored to your business needs.</p>
      
      <div className="service-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`service-item ${activeService === service.id ? 'active' : ''}`}
            onClick={() => toggleService(service.id)}
          >
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
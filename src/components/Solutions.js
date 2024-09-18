import React, { useState } from 'react';
import './ServicesIProvide.css'; // Keep using the same CSS file

function Solutions() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'microsoft365',
      icon: 'fab fa-microsoft',
      title: 'Microsoft 365',
      description: 'Optimize your team’s productivity with a customized Microsoft 365 setup. Achieve seamless collaboration and efficient communication through a well-configured digital workspace. Designed for teams of all sizes, this solution simplifies workflows, enhances coordination, and boosts overall efficiency.'
    },
    {
      id: 'odoo',
      icon: 'fas fa-cogs',
      title: 'Odoo ERP Solutions',
      description: 'Streamline business operations with a tailored Odoo ERP solution. From implementation to full customization, Odoo is adapted to your specific business needs, offering effortless management of inventory, sales, and customer relationships. This powerful system enhances operational efficiency, helping you stay organized and focused on growth.'
    },
    {
      id: 'hosting',
      icon: 'fas fa-globe',
      title: 'Hosting & Domain Names',
      description: 'Build a strong online presence with reliable hosting and domain management. Ensure your website operates smoothly and is easily accessible to your audience, providing a seamless experience for both you and your customers. From domain registration to hosting, every aspect is managed to keep your website fast, secure, and visible.'
    },
    {
      id: 'vps',
      icon: 'fas fa-cloud',
      title: 'VPS/VDS Expertise',
      description: 'Get powerful and scalable server solutions with customized VPS and VDS services. Offering flexibility, security, and top-tier performance, these services are designed to support your growing business needs, ensuring reliable and efficient operations.'
    },
    {
      id: 'server-management',
      icon: 'fas fa-tasks',
      title: 'Server Management',
      description: 'Ensure smooth and reliable performance for your IT infrastructure with expert server management services. From regular maintenance to solving complex issues, every aspect of your server\'s health is covered to maximize uptime, security, and efficiency. Get peace of mind knowing your business runs on a well-managed, optimized system designed to support your growth.'
    },
    {
      id: 'firewalls',
      icon: 'fas fa-shield-alt',
      title: 'Firewalls & Cybersecurity',
      description: 'Safeguard your digital assets with advanced firewall solutions and top-tier cybersecurity practices. With expert implementation and management, firewalls protect your network from potential threats, ensuring your systems remain secure and resilient. By proactively monitoring and managing security measures, you can focus on business growth while staying protected from cyber risks.'
    },
    {
      id: 'kaspersky',
      icon: 'fas fa-lock',
      title: 'Kaspersky Solutions',
      description: 'Protect your systems with industry-leading antivirus and security solutions from Kaspersky. With seamless integration and expert management, Kaspersky products provide comprehensive protection to keep your network and devices secure. By implementing Kaspersky, your business will benefit from advanced threat detection and real-time protection, ensuring a safe digital environment.'
    },
    {
      id: 'ai-image',
      icon: 'fas fa-image',
      title: 'AI Image Generation',
      description: 'Transform marketing and creative projects with AI-generated imagery. The latest AI technology creates stunning visuals that bring ideas to life. Elevate brands and projects with unique designs that capture attention and drive engagement. Discover the future of visual creativity today.'
    },
    {
      id: 'technical-writing',
      icon: 'fas fa-pen-fancy',
      title: 'Technical Writing',
      description: 'Simplify complex technical information with precision. Expert technical writing services guarantee that your documentation is not only accurate but also user-friendly and professional. Elevate your communication with clarity and impact.'
    },
    {
      id: 'Qr-code',
      icon: 'fa-solid fa-qrcode',
      title: 'QR Code Generation',
      description: 'Generate QR codes for your business needs. QR codes are a great way to share information and connect with customers. They can be used for a variety of purposes, such as marketing, customer engagement, and more.'
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
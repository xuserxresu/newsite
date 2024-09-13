import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Cloud Computing',
    'Cybersecurity',
    'AI Integration',
    'IT Infrastructure',
    'Data Analytics',
    'DevOps',
  ];

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

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
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Innovative IT Solutions</h1>
          <p className="fade-in-up">Empowering businesses with cutting-edge technology</p>
        </div>
        <div className="hero-image fade-in-up">
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
            </div>
            <div className="terminal-window">
              <p className="terminal-text">
                $ IT Solutions: <span className="typing-container">
                  <span className="typing">{text}</span>
                  <span className="cursor"></span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services fade-in">
        <div className="services-card">
          <h2><i className="fas fa-cogs"></i> What I Do</h2>
          <p className="tagline">Comprehensive IT solutions for your business needs</p>
          
          <div className="service-list">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-snippet">
        <div className="container">
          <h2 className="section-title fade-in-up">Why Partner With Me</h2>
          <div className="about-grid">
            <div className="about-item fade-in-up">
              <i className="fas fa-rocket"></i>
              <h3>Innovative Solutions</h3>
              <p>I harness the latest tech to push your business forward.</p>
            </div>
            <div className="about-item fade-in-up">
              <i className="fas fa-shield-alt"></i>
              <h3>Robust Security</h3>
              <p>Your data's safety is a top priority with state-of-the-art security measures.</p>
            </div>
            <div className="about-item fade-in-up">
              <i className="fas fa-users"></i>
              <h3>Your Tech-Savvy Problem Solver</h3>
              <p>With years of hands-on experience, I bring industry insights and expertise to every project, delivering solutions you can count on.</p>
            </div>
          </div>
          <div className="call-to-action">
            <h2>Ready to elevate your IT infrastructure?</h2>
            <p>Let's chat about how I can help your business thrive.</p>
            <Link to="/contact" className="cta-button">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
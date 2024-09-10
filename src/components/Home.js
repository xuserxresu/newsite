import React, { useState, useEffect } from 'react';
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
    { icon: 'fas fa-cloud', name: 'Cloud Solutions', description: 'Optimize your business with cutting-edge cloud technologies.' },
    { icon: 'fas fa-shield-alt', name: 'Cybersecurity', description: 'Protect your digital assets with robust security measures.' },
    { icon: 'fas fa-robot', name: 'AI Integration', description: 'Leverage the power of AI to drive innovation and efficiency.' },
    { icon: 'fas fa-cogs', name: 'IT Consulting', description: 'Expert advice to align your IT strategy with business goals.' }
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
                $ IT Solutions: <span className="typing">{text}</span>
                <span className="cursor">|</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <h2 className="section-title fade-in-up">What I Do</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <i className={`${service.icon} service-icon`}></i>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
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
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2 className="fade-in-up">Ready to Transform Your IT Infrastructure?</h2>
          <p className="fade-in-up">Let's discuss how we can elevate your business with our IT solutions.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
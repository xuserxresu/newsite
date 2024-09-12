import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const timelineRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    let isScrolling = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isScrolling = true;
      startX = e.pageX - timeline.offsetLeft;
      scrollLeft = timeline.scrollLeft;
    };

    const handleMouseLeave = () => {
      isScrolling = false;
    };

    const handleMouseUp = () => {
      isScrolling = false;
    };

    const handleMouseMove = (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - timeline.offsetLeft;
      const walk = (x - startX) * 2;
      timeline.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      isScrolling = true;
      startX = e.touches[0].pageX - timeline.offsetLeft;
      scrollLeft = timeline.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.touches[0].pageX - timeline.offsetLeft;
      const walk = (x - startX) * 2;
      timeline.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isScrolling = false;
    };

    timeline.addEventListener('mousedown', handleMouseDown);
    timeline.addEventListener('mouseleave', handleMouseLeave);
    timeline.addEventListener('mouseup', handleMouseUp);
    timeline.addEventListener('mousemove', handleMouseMove);
    timeline.addEventListener('touchstart', handleTouchStart);
    timeline.addEventListener('touchmove', handleTouchMove);
    timeline.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (timeline) {
        timeline.removeEventListener('mousedown', handleMouseDown);
        timeline.removeEventListener('mouseleave', handleMouseLeave);
        timeline.removeEventListener('mouseup', handleMouseUp);
        timeline.removeEventListener('mousemove', handleMouseMove);
        timeline.removeEventListener('touchstart', handleTouchStart);
        timeline.removeEventListener('touchmove', handleTouchMove);
        timeline.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  const skills = [
    'System Design', 'Cybersecurity', 'Cloud Solutions', 
    'AI Integration', 'IT Infrastructure',
  ];

  const timeline = [
    { year: '2015', event: 'Began journey in IT', icon: 'fas fa-laptop-code' },
    { year: '2017', event: 'Earned a Bachelor\'s degree in Information Technology', icon: 'fas fa-graduation-cap' },
    { year: '2020', event: 'Started IT consulting business', icon: 'fas fa-briefcase' },
    { year: '2021', event: 'Expanded into cloud solutions and cybersecurity', icon: 'fas fa-cloud-upload-alt' },
    { year: '2023', event: 'Obtained Google IT Support certification', icon: 'fab fa-google' },
    { year: '2023', event: 'Launched AI writing and image generation services', icon: 'fas fa-pen-fancy' },
    { year: '2024', event: 'Completed Generative AI: Prompt Engineering Basics', icon: 'fas fa-robot' }
  ];

  const achievements = [
    {
      title: 'Managed migration to Microsoft 365',
      icon: 'fas fa-cloud',
      description: "Helping companies make the leap to the cloud with Microsoft 365 wasn't just about moving emails—it was about transforming how their team collaborates, communicates, and works securely from anywhere in the world."
    },
    {
      title: 'Implemented Odoo ERP for Companies and Retail Stores',
      icon: 'fas fa-store',
      description: "Bringing order to chaos is my specialty. Implementing Odoo ERP for businesses and retail stores means less time dealing with headaches, and more time running smoothly—whether it's managing inventory, sales, or customer relationships."
    },
    {
      title: 'Designed Robust Systems & IT Infrastructures',
      icon: 'fas fa-network-wired',
      description: "From startups to growing companies, I've crafted IT infrastructures that can handle anything thrown their way. My systems are designed to grow with your business, providing a foundation that's secure, scalable, and tailored to your needs."
    },
    {
      title: 'Provided VPS and VDS Solutions',
      icon: 'fas fa-server',
      description: "Provided robust VPS and VDS solutions, delivering scalable and secure server environments designed to meet various business needs and support efficient operations."
    }
  ];

  const funFacts = [
    "I'm on a mission to make the world paperless—one frustrated fax machine at a time.",
    "I'm fascinated by the potential of NFTs to revolutionize digital ownership and creativity.",
    "My idea of a good time? Diving deep into Web3 technologies and imagining the decentralized future.",
    "When I'm not solving tech puzzles, you'll find me unwinding with my favorite playlists, exploring diverse musical genres."
  ];

  const companies = [
    { 
      name: 'Dal Group', 
      logo: 'https://www.dropbox.com/scl/fi/wmticsfcjoizay2apv3gf/Dal-Group.png?rlkey=4eiil3k5re110n585itv4pd6x&st=uihx495l&raw=1', 
      color: 'rgba(173, 73, 225, 0.7)', 
      animationDuration: '8s', 
      animationDelay: '0s',
      link: 'https://www.dalgroup.com/'
    },
    { 
      name: 'E2E', 
      logo: 'https://www.dropbox.com/scl/fi/f4zjnc6dunolpcs8w65bm/e2e.png?rlkey=mixv3gu70qs6r3cbcut9kn0da&st=dgvsve34&raw=1', 
      color: 'rgba(46, 7, 63, 0.7)', 
      animationDuration: '12s', 
      animationDelay: '2s',
      link: 'http://www.e2egroups.com'
    },
    { 
      name: 'Mahgoub Sons Group', 
      logo: 'https://www.dropbox.com/scl/fi/u5xrqrzfp3717r4xdq93p/mahgoub-sons-group-squarelogo-1661248233691.png?rlkey=aoom7wu4oha84998503a0sbd7&st=bo4pbb1t&raw=1', 
      color: 'rgba(122, 28, 172, 0.7)', 
      animationDuration: '10s', 
      animationDelay: '1s',
      link: 'https://mahgoubsons.com/'
    },
    { 
      name: 'Advanced Power Systems', 
      logo: 'https://www.dropbox.com/scl/fi/ors1vq8ug8faiiccgh8az/advanced_power_systems_co_aps_jcb_logo.png?rlkey=jpgb7a2l2oeefkejnfcmkk4as&st=oxyvrc0l&raw=1', 
      color: 'rgba(173, 73, 225, 0.7)', 
      animationDuration: '9s', 
      animationDelay: '3s',
      link: 'https://www.aps-sd.com/'
    },
    { 
      name: 'FaceOne', 
      logo: 'https://www.dropbox.com/scl/fi/h553xhzdrjy0bbagt7yin/faceone_logo.webp?rlkey=428i7zws62df6utwh3ybr8pgu&st=j3i4uvuh&raw=1', 
      color: 'rgba(122, 28, 172, 0.7)', 
      animationDuration: '11s', 
      animationDelay: '4s',
      link: 'https://www.faceonegroup.com/'
    },
  ];

  const techStack = [
    { name: 'Microsoft 365', icon: 'fab fa-microsoft', color: '#0078D4' },
    { name: 'Windows', icon: 'fab fa-windows', color: '#0078D6' },
    { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
    { name: 'Mac OS', icon: 'fab fa-apple', color: '#999999' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0089D6' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Google Cloud', icon: 'fab fa-google', color: '#4285F4' },
    { name: 'Google Workspace', icon: 'fab fa-google', color: '#4285F4' },
    { name: 'Odoo ERP', icon: 'fas fa-cubes', color: '#8F57C6' },
    { name: 'Kaspersky', icon: 'fas fa-shield-alt', color: '#006D5C' },
    { name: 'Contabo', icon: 'fas fa-server', color: '#0098FF' },
  ];

  return (
    <div className="about">
      <section className="intro-and-humor">
        <h2>Meet the Tech Wizard</h2>
        <p>Hi, I'm Ahmed Sharfi, the IT guy who's saved more servers from disaster than Batman has saved Gotham. I specialize in turning tech problems into 'oh-that-was-easy' moments.</p>
        <p>Growing up in Sudan, I always imagined how technology could transform lives, and now, I'm turning those dreams into reality.</p>
      </section>

      <section className="skills">
        <h2>Here's What I Bring to the Table</h2>
        <div className="skill-blobs">
          {skills.map((skill, index) => (
            <div key={index} className="skill-blob">{skill}</div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>My Journey</h2>
        <div className="timeline-container" ref={timelineRef}>
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="timeline-scroll-hint">
          <span>Scroll</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </section>

      <section className="achievements">
        <h2>Achievements and Experience</h2>
        <p>During my career, I've had the opportunity to work on some pretty exciting projects that have helped businesses scale and thrive:</p>
        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`achievement-card ${expandedCard === index ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fun-facts">
        <h2>Things You Didn't Know About Me</h2>
        <ul>
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>

      <section className="vision">
        <h2>My Vision</h2>
        <p>I believe the world should be digital, paperless, and seamless—and I'm working every day to make that happen.</p>
        <p>When I'm not busy solving IT problems or generating AI art, you'll find me working on ways to help businesses thrive in the tech-driven world.</p>
      </section>

      <section className="companies-worked-with">
        <h2>Companies I've Worked With</h2>
        <div className="company-grid">
          {companies.map((company, index) => (
            <a 
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <div 
                className="company-blob"
                style={{
                  '--company-color': company.color,
                  '--animation-duration': company.animationDuration,
                  '--animation-delay': company.animationDelay
                }}
              >
                <div className="blob-animation"></div>
                <img src={company.logo} alt={company.name} className="company-logo themed-logo" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="tech-stack">
        <h2>Core Technologies I Utilize</h2>
        <div className="tech-icons">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-icon" style={{'--hover-color': tech.color}}>
              <i className={tech.icon}></i>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
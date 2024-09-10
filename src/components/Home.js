import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import Atropos from 'atropos/react';
import './Home.css';

function Home() {
  const mount = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mount.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    rendererRef.current = renderer;

    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    mount.current.appendChild(renderer.domElement);

    // Create nodes
    const nodeGeometry = new THREE.SphereGeometry(0.04, 32, 32);
    const nodeMaterial = new THREE.MeshPhongMaterial({ color: 0xAD49E1 });
    const nodes = [];

    for (let i = 0; i < 30; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      );
      scene.add(node);
      nodes.push(node);
    }

    // Create connections and data particles
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7A1CAC, opacity: 0.3, transparent: true });
    const connections = [];
    const dataParticles = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 0.8) {
          const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position]);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
          connections.push({ line, start: nodes[i], end: nodes[j] });

          // Create data particle
          const particleGeometry = new THREE.SphereGeometry(0.008, 16, 16);
          const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xEBD3F8 });
          const particle = new THREE.Mesh(particleGeometry, particleMaterial);
          particle.position.copy(nodes[i].position);
          scene.add(particle);
          dataParticles.push({ particle, start: nodes[i], end: nodes[j], progress: 0, speed: Math.random() * 0.01 + 0.005 });
        }
      }
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xDDE6ED, 1, 100);
    pointLight.position.set(1, 1, 1);
    scene.add(pointLight);

    camera.position.z = 2;

    // Animation
    const animate = () => {
      if (!mount.current) return;

      requestAnimationFrame(animate);

      nodes.forEach(node => {
        node.position.x += (Math.random() - 0.5) * 0.001;
        node.position.y += (Math.random() - 0.5) * 0.001;
        node.position.z += (Math.random() - 0.5) * 0.001;
        
        if (node.position.length() > 1) {
          node.position.normalize();
        }
      });

      connections.forEach(({ line, start, end }) => {
        line.geometry.setFromPoints([start.position, end.position]);
        line.geometry.verticesNeedUpdate = true;
      });

      dataParticles.forEach(particle => {
        particle.progress += particle.speed;
        if (particle.progress > 1) {
          particle.progress = 0;
          // Swap start and end to make particle go back
          [particle.start, particle.end] = [particle.end, particle.start];
        }
        particle.particle.position.lerpVectors(particle.start.position, particle.end.position, particle.progress);
      });

      scene.rotation.x += 0.0005;
      scene.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount.current || !rendererRef.current) return;

      const width = mount.current.clientWidth;
      const height = mount.current.clientHeight;
      rendererRef.current.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mount.current && rendererRef.current) {
        mount.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

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
          <Link to="/contact" className="btn fade-in-up">Get Started</Link>
        </div>
        <div className="hero-image fade-in-up">
          <div ref={mount} className="network-visualization"></div>
        </div>
      </section>

      <section className="services">
        <h2 className="section-title fade-in-up">Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <Atropos
              key={index}
              className="service-card-wrapper"
              highlight={false}
              shadow={false}
            >
              <div className="service-card fade-in-up">
                <i className={`${service.icon} service-icon`} data-atropos-offset="5"></i>
                <h3 data-atropos-offset="4">{service.name}</h3>
                <p data-atropos-offset="3">{service.description}</p>
              </div>
            </Atropos>
          ))}
        </div>
      </section>

      <section className="about-snippet">
        <div className="container">
          <h2 className="section-title fade-in-up">Why Choose Us</h2>
          <div className="about-grid">
            <div className="about-item fade-in-up">
              <i className="fas fa-rocket"></i>
              <h3>Innovative Solutions</h3>
              <p>We leverage the latest technologies to drive your business forward.</p>
            </div>
            <div className="about-item fade-in-up">
              <i className="fas fa-shield-alt"></i>
              <h3>Robust Security</h3>
              <p>Your data's safety is our top priority with state-of-the-art security measures.</p>
            </div>
            <div className="about-item fade-in-up">
              <i className="fas fa-users"></i>
              <h3>Expert Team</h3>
              <p>Our seasoned professionals bring years of industry experience to your projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2 className="fade-in-up">Ready to Transform Your IT Infrastructure?</h2>
          <p className="fade-in-up">Let's discuss how we can elevate your business with our IT solutions.</p>
          <Link to="/contact" className="btn fade-in-up">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
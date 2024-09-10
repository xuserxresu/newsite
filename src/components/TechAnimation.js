import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TechAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a network of nodes and connections
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x133955 });
    
    const nodes = [];
    const connections = [];

    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      scene.add(node);
      nodes.push(node);
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.8) {
          const connection = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position]),
            new THREE.LineBasicMaterial({ color: 0x135550 })
          );
          scene.add(connection);
          connections.push(connection);
        }
      }
    }

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      nodes.forEach(node => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      connections.forEach(connection => {
        connection.rotation.x += 0.002;
        connection.rotation.y += 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default TechAnimation;
import React, { useEffect, useRef } from 'react';
import './Blobs.css';

const Blobs = () => {
  const blobsRef = useRef(null);

  useEffect(() => {
    const blobs = blobsRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateBlobs = () => {
      const blobElements = blobs.querySelectorAll('.blob');
      blobElements.forEach((blob, index) => {
        const speed = 0.5 - index * 0.1;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        blob.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animateBlobs);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateBlobs();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="blobs" ref={blobsRef}>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
};

export default Blobs;
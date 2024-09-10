import { useEffect } from 'react';

function Parallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-container::before');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

export default Parallax;
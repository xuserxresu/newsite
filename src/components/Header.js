import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${menuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="https://www.dropbox.com/scl/fi/d2ay7yswfwhirur2mmptu/sharfi_grey.png?rlkey=oqnbxv7u6q3lmom45q7wjng3s&st=wepnc3gs&raw=1" alt="Ahmed Sharfi Logo" className="logo-image" />
          <span className="logo-text">Ahmed Sharfi</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/solutions" onClick={closeMenu}>Solutions Tailored for You</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>Get To Know Me</NavLink></li> {/* Changed this line */}
            <li><NavLink to="/blog" onClick={closeMenu}>Bytes & Thoughts</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="menu-overlay" onClick={closeMenu}></div>
    </header>
  );
}

export default Header;
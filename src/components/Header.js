import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = React.memo(function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
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
          <img src="https://www.dropbox.com/scl/fi/1xvu7yfmlz7zegwjl648k/Logo-S-Letter-traced.png?rlkey=mtlve6frevk3ftsmx7wtrhbj0&st=6cbclw4v&raw=1" alt="Ahmed Sharfi Logo" className="logo-image" />
          <span className="logo-text">Ahmed Sharfi</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/solutions" onClick={closeMenu}>Solutions Tailored for You</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>Get To Know Me</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Bytes & Thoughts</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Reach Out</NavLink></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="menu-overlay" onClick={closeMenu}></div>
    </header>
  );
});

export default Header;
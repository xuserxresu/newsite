import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Solutions from './components/Solutions'; // Add this import
import About from './components/About'; // Change this line back to About
import Contact from './components/Contact';
import BytesAndThoughts from './components/BytesAndThoughts';
import FloatingBlobs from './components/FloatingBlobs';
import './App.css';
import 'atropos/css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <FloatingBlobs />
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} /> {/* Update this line */}
          <Route path="/about" element={<About />} /> {/* Change this line back to About */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BytesAndThoughts />} />
          </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
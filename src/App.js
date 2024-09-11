import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ServicesIProvide from './components/ServicesIProvide';
import About from './components/About';
import Contact from './components/Contact';
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
          <Route path="/services" element={<ServicesIProvide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';
  const handleNavClick = () => {
    setMobileOpen(false);
    setProductsOpen(false);
    document.body.style.overflow = '';
  };

  const handleToggle = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    if (!next) setProductsOpen(false);
    if (next) window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={handleNavClick}>
          <img src={logo} alt="Sawariya Polymers" />
          <div className="navbar-logo-text-wrap">
            <div className="navbar-logo-text">
              <span>Sawariya</span>
              <span>Polymers</span>
            </div>
            <sup className="navbar-logo-tm">TM</sup>
          </div>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={handleNavClick}>Home</Link>
          <Link to="/about" className={isActive('/about')} onClick={handleNavClick}>About Us</Link>

          <div className={`navbar-dropdown ${productsOpen ? 'mobile-dropdown-open' : ''}`}>
            <span onClick={() => setProductsOpen(!productsOpen)}>
              Products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <div className="dropdown-menu">
              <Link to="/products/pet-preforms" onClick={handleNavClick}>PET Preforms</Link>
              <Link to="/products/bottles-jars" onClick={handleNavClick}>Bottles & Jars</Link>
              <Link to="/products/caps-handles" onClick={handleNavClick}>Caps & Handles</Link>
              <Link to="/products/bubble-top" onClick={handleNavClick}>20L Bubble Top</Link>
              <Link to="/products/hdpe-jerricans" onClick={handleNavClick}>HDPE Jars & Containers</Link>
            </div>
          </div>

          <Link to="/industries" className={isActive('/industries')} onClick={handleNavClick}>Industries</Link>
          <Link to="/contact" className={isActive('/contact')} onClick={handleNavClick}>Contact</Link>

          <div className="mobile-menu-footer">
            <div className="mobile-menu-divider"></div>
            <p className="mobile-menu-company">Sawariya Polymers</p>
            <p className="mobile-menu-tagline">Premium PET Packaging Solutions</p>
            <div className="mobile-menu-contact">
              <a href="tel:+919609727330">+91 96097-27330</a>
              <a href="mailto:enquiry@sawariyapolymers.com">enquiry@sawariyapolymers.com</a>
            </div>
          </div>
        </div>

        <div className={`navbar-right ${mobileOpen ? 'show-cta' : ''}`}>
          <Link to="/contact" className="btn btn-primary navbar-cta" onClick={handleNavClick}>Get a Quote</Link>

          <button
            className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
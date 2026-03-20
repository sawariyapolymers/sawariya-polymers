import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="Sawariya Polymers" />
              <div className="footer-logo-text">
                <span>Sawariya</span>
                <span>Polymers</span>
              </div>
            </div>
            <p>
              Sawariya Polymers excels in manufacturing premium PET preforms,
              bottles, jars, caps, handles, and HDPE jars — ensuring strength,
              clarity, precision, and food-grade quality for diverse packaging needs.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4>Products</h4>
            <div className="footer-links">
              <Link to="/products/pet-preforms">PET Preforms</Link>
              <Link to="/products/bottles-jars">Bottles & Jars</Link>
              <Link to="/products/caps-handles">Caps & Handles</Link>
              <Link to="/products/hdpe-jerricans">HDPE Jars</Link>
            </div>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Jatiakali, Near Narayan School,<br />P.O.-Fulbari, Dist. – Jalpaiguri,<br />West Bengal – 734015</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:+919609727330">+91 96097-27330</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:enquiry@sawariyapolymers.com">enquiry@sawariyapolymers.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Sawariya Polymers. All Rights Reserved.</span>
          <span>Quality you can trust.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutImg from '../assets/about-factory.jpg';
import petPreformsImg from '../assets/pet-preforms.png';
import bottlesJarsImg from '../assets/bottles-and-jars.png';
import capsHandlesImg from '../assets/caps-and-handles.png';
import hdpeJerricansImg from '../assets/hdpe-jerricans.png';
import factoryImg from '../assets/factory.jpg';

const Home = () => {
  const heroImages = [
    { src: factoryImg, alt: 'Our Factory', label: 'Our Factory' },
    { src: petPreformsImg, alt: 'PET Preforms', label: 'PET Preforms' },
    { src: bottlesJarsImg, alt: 'Bottles & Jars', label: 'Bottles & Jars' },
    { src: capsHandlesImg, alt: 'Caps & Handles', label: 'Caps & Handles' },
    { src: hdpeJerricansImg, alt: 'HDPE Jars & Containers', label: 'HDPE Jars & Containers' },
  ];

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-label">
                <span className="dot"></span>
                Premium PET Packaging Solutions
              </div>
              <h1>
                Crafting Quality<br />
                <span className="highlight">Packaging</span> for a<br />
                Better Tomorrow
              </h1>
              <p className="hero-description">
                Sawariya Polymers excels in manufacturing premium PET preforms,
                bottles, jars, caps, handles, 20 litre bubble tops, and HDPE jars and containers — ensuring
                strength, clarity, and food-grade quality for diverse industries.
              </p>
              <div className="hero-buttons">
                <Link to="/products/pet-preforms" className="btn btn-primary">
                  Explore Products
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>

            <div className="hero-banner">
              <div className="banner-frame">
                {heroImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={`carousel-img ${i === activeImg ? 'active' : ''}`}
                  />
                ))}
                <div className="carousel-dots">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot ${i === activeImg ? 'active' : ''}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Show ${heroImages[i].label}`}
                    />
                  ))}
                </div>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <h3>5+</h3>
                  <p>Product Lines</p>
                </div>
                <div className="hero-stat">
                  <h3>100+</h3>
                  <p>Products</p>
                </div>
                <div className="hero-stat">
                  <h3>10+</h3>
                  <p>Industries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </section>

      {/* ====== PRODUCTS ====== */}
      <section className="section products-section">
        <div className="container text-center">
          <span className="section-label">What We Manufacture</span>
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">
            From preforms to finished packaging — complete solutions tailored to your industry.
          </p>

          <div className="products-grid">
            <Link to="/products/pet-preforms" className="product-card">
              <div className="product-icon">
                <img src={petPreformsImg} alt="PET Preforms" />
              </div>
              <h3>PET Preforms</h3>
              <p>Alaska, ROPP, PCO 1810, PCO 1881, CTC — for water, oil, beverages, pharma & more.</p>
              <span className="card-arrow">
                View Range
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/products/bottles-jars" className="product-card">
              <div className="product-icon">
                <img src={bottlesJarsImg} alt="Bottles & Jars" />
              </div>
              <h3>Bottles & Jars</h3>
              <p>High-quality bottles and jars for oil, confectionery, mineral water, and more applications.</p>
              <span className="card-arrow">
                View Range
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/products/caps-handles" className="product-card">
              <div className="product-icon">
                <img src={capsHandlesImg} alt="Caps & Handles" />
              </div>
              <h3>Caps & Handles</h3>
              <p>Precise fit, strong grip, leak-proof sealing and smooth finish across all applications.</p>
              <span className="card-arrow">
                View Range
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/products/hdpe-jerricans" className="product-card">
              <div className="product-icon">
                <img src={hdpeJerricansImg} alt="HDPE Jerricans" />
              </div>
              <h3>HDPE Jars & Containers</h3>
              <p>Superior strength, chemical resistance, and leak-proof design for industrial storage.</p>
              <span className="card-arrow">
                View Range
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutImg} alt="Manufacturing facility" />
            </div>

            <div className="about-text">
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Excellence in PET Packaging Manufacturing
              </h2>
              <p>
                Sawariya Polymers is dedicated to manufacturing high-quality PET
                packaging products in a state-of-the-art facility, following
                the highest standards of Good Manufacturing Practice (GMP).
              </p>
              <p>
                Our commitment is to provide end-to-end solutions based entirely on
                our customer's requirements with minimal lead time and maximum
                quality assurance.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Food-Grade Quality
                </div>
                <div className="about-feature">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Precision Molding
                </div>
                <div className="about-feature">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Custom Solutions
                </div>
                <div className="about-feature">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Reliable Supply
                </div>
              </div>

              <Link to="/about" className="btn btn-dark" style={{ marginTop: '28px' }}>
                Learn More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section why-section">
        <div className="container text-center">
          <span className="section-label">Why Sawariya</span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            Built on precision, driven by quality — here's why leading brands trust us.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3>Certified Quality</h3>
              <p>Every product undergoes stringent testing and validation before being introduced to our product range.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11.42 15.17l-5.384-3.028A1.125 1.125 0 015.25 11.1V4.875A1.125 1.125 0 016.578 3.82l5.842 3.245a1.125 1.125 0 01.58.975v7.13z" />
                  <path d="M12.58 15.17l5.384-3.028a1.125 1.125 0 00.786-1.042V4.875a1.125 1.125 0 00-1.328-1.055l-5.842 3.245a1.125 1.125 0 00-.58.975v7.13z" />
                </svg>
              </div>
              <h3>State-of-the-Art Facility</h3>
              <p>Modern manufacturing setup with the latest machinery ensuring precision in every product we deliver.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3>Customer Centric</h3>
              <p>End-to-end solutions tailored entirely to your requirements with minimal lead time and maximum satisfaction.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
              </div>
              <h3>Continuous Improvement</h3>
              <p>We follow KAIZEN — constant upgradation of operations, processes, and product quality.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-13.5 0L2.63 15.696c-.122.499.106 1.028.589 1.202a5.989 5.989 0 002.031.352 5.989 5.989 0 002.031-.352c.483-.174.711-.703.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3>Competitive Pricing</h3>
              <p>Cost-effective packaging solutions without compromising on quality, durability, or performance.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.592L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.25 2.25 0 01-1.228 2.446L10.5 21l-.652-.174" />
                </svg>
              </div>
              <h3>Pan-India Supply</h3>
              <p>Serving diverse industries across India with reliable delivery and consistent product availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== INDUSTRIES ====== */}
      <section className="section industries-section">
        <div className="container text-center">
          <span className="section-label">Industries We Serve</span>
          <h2 className="section-title">Packaging for Every Sector</h2>
          <p className="section-subtitle">
            Our products cater to a wide range of industries with specialized packaging solutions.
          </p>

          <div className="industries-grid">
            {[
              'Beverages', 'Food & Edible Oil', 'Pharmaceutical',
              'Liquor & Spirits', 'Personal Care', 'Home Care',
              'Agro Chemicals', 'Dairy', 'Confectionery',
              'Household', 'Industrial Chemicals', 'FMCG'
            ].map((industry) => (
              <span className="industry-tag" key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="product-enquiry-strip">
        <div className="container">
          <div className="enquiry-strip-inner">
            <div>
              <h3>Need the Right Packaging Solution?</h3>
              <p>Tell us your requirements and our team will get back to you with the perfect packaging solution for your business.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Send an Enquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
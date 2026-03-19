import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
            <span>About Us</span>
          </div>
          <span className="section-label">Our Story</span>
          <h1>About Sawariya Polymers</h1>
          <p>A trusted name in PET packaging — delivering quality, precision, and innovation for diverse industries.</p>
        </div>
      </section>

      <section className="section about-overview">
        <div className="container">
          <div className="about-overview-content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Overview</h2>
            <p>Sawariya Polymers was established with a vision to manufacture high-quality PET packaging products in a state-of-the-art facility, following the guidelines of Good Manufacturing Practice (GMP).</p>
            <p>Our main motto is to provide high quality products and an end-to-end solution entirely based on the customer's requirement with minimal lead time. We adhere to a regular practice of modification and constant upgradation of our existing operations and techniques.</p>
            <p>With extensive data collection and evaluation across all areas of our operations, we place foremost emphasis on the active involvement of our customers, suppliers, and employees — building lasting partnerships rooted in trust and quality.</p>
          </div>
        </div>
      </section>

      <section className="section vmv-section">
        <div className="container text-center">
          <span className="section-label">Our Foundation</span>
          <h2 className="section-title">Vision, Mission & Values</h2>
          <div className="vmv-grid">
            <div className="vmv-card">
              <div className="vmv-card-icon vision">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3>Our Vision</h3>
              <p>To ensure our products are of the best quality adhering to our promise of purity. To ensure our products are utilised by a wide plethora of industries. To ensure the highest level of customer satisfaction with constant upgradation. To largely contribute towards environmental sustainability.</p>
            </div>
            <div className="vmv-card">
              <div className="vmv-card-icon mission">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
              </div>
              <h3>Our Mission</h3>
              <p>To develop high quality, durable and cost effective packaging solutions for a wide plethora of industries ranging from preforms and bottles to jars and containers. We move ahead with a customer centric approach and it is our constant endeavour to innovate and develop products according to the customer's varied requirements.</p>
            </div>
            <div className="vmv-card">
              <div className="vmv-card-icon values">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              </div>
              <h3>Our Values</h3>
              <p>Constant monitoring and improving day-to-day processes. Training and motivating employees for continual development. Complying with customer's regulatory requirements. Upgrading production technology and SOPs. Commitment towards upholding customer's integrity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quality-section">
        <div className="container">
          <div className="quality-grid">
            <div className="quality-content">
              <span className="section-label">Our Promise</span>
              <h2 className="section-title">Quality Policy</h2>
              <p>At Sawariya Polymers, we pledge to maintain a total quality system for manufacturing our products. Each and every product undergoes stringent testing and validation before it is introduced and included in our product range.</p>
              <p>We ensure our products match the company's policy of providing our customers purity of product and packaging superiority. We believe in continuous improvement — "KAIZEN" — a Japanese philosophy meaning "change for the better."</p>
              <div className="quality-badges">
                <span className="quality-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>GMP Compliant</span>
                <span className="quality-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>Food-Grade Certified</span>
                <span className="quality-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>Stringent QC Testing</span>
                <span className="quality-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>BPA Free Products</span>
              </div>
            </div>
            <div className="quality-visual">
              <div className="quality-stat-card"><h3>100+</h3><p>Products</p></div>
              <div className="quality-stat-card"><h3>10+</h3><p>Industries</p></div>
              <div className="quality-stat-card"><h3>100%</h3><p>QC Tested</p></div>
              <div className="quality-stat-card"><h3>24/7</h3><p>Production</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <span className="section-label">Milestones</span>
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key moments that shaped Sawariya Polymers into what it is today.</p>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-dot"></div><span className="timeline-year">Foundation</span><h3>Company Established</h3><p>Sawariya Polymers was founded with a vision to manufacture high-quality PET packaging products.</p></div>
            <div className="timeline-item"><div className="timeline-dot"></div><span className="timeline-year">Growth</span><h3>Manufacturing Facility Setup</h3><p>State-of-the-art manufacturing facility set up with modern machinery for PET preform production.</p></div>
            <div className="timeline-item"><div className="timeline-dot"></div><span className="timeline-year">Expansion</span><h3>Product Range Expanded</h3><p>Added bottles, jars, caps, handles and HDPE jars to the product lineup, serving more industries.</p></div>
            <div className="timeline-item"><div className="timeline-dot"></div><span className="timeline-year">Present</span><h3>Industry Leader</h3><p>Serving 10+ industries with 100+ products, continuously upgrading operations and expanding reach across India.</p></div>
          </div>
        </div>
      </section>

      <section className="about-cta-strip">
        <div className="container">
          <div className="about-cta-inner">
            <div>
              <h3>Partner With Us</h3>
              <p>Looking for a reliable packaging partner? Get in touch and let's discuss how we can serve your packaging needs.</p>
            </div>
            <Link to="/contact" className="btn btn-dark">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

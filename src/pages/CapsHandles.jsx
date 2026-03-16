import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ProductPage.css';
import standardScrewImg from '../assets/standard-screw-caps.png';
import ctcCapsImg from '../assets/ctc-caps.png';
import roppCapsImg from '../assets/ropp-caps.png';
import jarCapsImg from '../assets/jar-caps.png';
import handlesImg from '../assets/handles.png';
import bubbleTopImg from '../assets/bubble-top-caps.png';

const products = [
  {
    title: 'Standard Screw Caps',
    image: standardScrewImg,
    description: 'High-quality screw caps for water bottles and beverage containers. Manufactured with precision molding for a consistent, leak-proof fit every time.',
    specs: 'Tamper-evident ring, Precise thread finish, Multiple colour options, Compatible with Alaska & PCO necks',
  },
  {
    title: 'CTC / Flip-Top Caps',
    image: ctcCapsImg,
    description: 'Double cap and flip-top closures designed for edible oil bottles. Allows controlled pouring while maintaining a secure seal when closed.',
    specs: 'Controlled pouring, Secure flip-lock, Oil-resistant material, Easy one-hand operation',
  },
  {
    title: 'ROPP Caps',
    image: roppCapsImg,
    description: 'Roll-On Pilfer-Proof caps for pharmaceutical and liquor applications. Provides tamper evidence and ensures product authenticity.',
    specs: 'Pilfer-proof design, Aluminium & plastic options, Pharma-grade quality, Fits 25mm, 28mm, 29mm necks',
  },
  {
    title: 'Jar Caps & Closures',
    image: jarCapsImg,
    description: 'Wide-mouth closures for PET jars and containers. Designed for airtight sealing to preserve freshness of food products, confectionery, and household items.',
    specs: 'Airtight seal, Wide-mouth compatibility, Multiple sizes, Stackable design support',
  },
  {
    title: 'Handles',
    image: handlesImg,
    description: 'Ergonomic handles for large-format bottles and jerricans. Engineered for a strong grip, easy carrying, and seamless attachment to containers.',
    specs: 'Strong grip design, Snap-fit attachment, Durable HDPE material, Fits 5L–20L containers',
  },
  {
    title: 'Bubble Top Caps',
    image: bubbleTopImg,
    description: 'Specialised caps for 20-litre bubble top water dispensers. Heavy-duty construction ensures a secure fit and leak-proof performance for water cooler applications.',
    specs: 'Heavy-duty build, Non-spill design, Dispenser compatible, Food-grade material',
  },
];

const CapsHandles = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', product: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_htjjerw',
        'template_md1yuci',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          product: formData.product,
          message: formData.message,
          page: 'Caps & Handles',
        },
        'fDF3N0ZZRlSsk5igA'
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
            <span>Products</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
            <span>Caps & Handles</span>
          </div>
          <span className="section-label">Our Products</span>
          <h1>Caps & Handles</h1>
          <p>
            Premium-quality caps and handles offering precise fit, strong grip,
            leak-proof sealing, smooth finish, and consistent performance across packaging applications.
          </p>
        </div>
      </section>

      <section className="section product-types-section">
        <div className="container">
          <div className="caps-grid">
            {products.map((product, index) => (
              <div className="caps-card" key={index}>
                <div className="caps-card-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="caps-card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="caps-card-specs">
                    <span className="caps-specs-label">Specifications</span>
                    <p>{product.specs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-contact-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Request a Quote</h2>
            <p className="section-subtitle">Tell us your requirements and we'll get back to you with the best solution.</p>
          </div>

          <div className="product-contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="product">Product Interest *</label>
                <select id="product" name="product" value={formData.product} onChange={handleChange} required>
                  <option value="">Select a product</option>
                  <option value="Standard Screw Caps">Standard Screw Caps</option>
                  <option value="CTC / Flip-Top Caps">CTC / Flip-Top Caps</option>
                  <option value="ROPP Caps">ROPP Caps</option>
                  <option value="Jar Caps & Closures">Jar Caps & Closures</option>
                  <option value="Handles">Handles</option>
                  <option value="Bubble Top Caps">Bubble Top Caps</option>
                  <option value="Custom Requirement">Custom Requirement</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your requirements, quantity, specifications..."></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
                  {status !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  )}
                </button>
              </div>
              {status === 'success' && (
                <div className="form-status success">Thank you! Your enquiry has been sent successfully. We'll get back to you shortly.</div>
              )}
              {status === 'error' && (
                <div className="form-status error">Something went wrong. Please try again or reach out to us directly via phone or email.</div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="product-enquiry-strip">
        <div className="container">
          <div className="enquiry-strip-inner">
            <div>
              <h3>Need Custom Caps or Closures?</h3>
              <p>We manufacture caps in a variety of colours, sizes, and finishes to match your brand.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Send Enquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CapsHandles;
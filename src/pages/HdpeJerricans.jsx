import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ProductPage.css';
import hdpeImg from '../assets/hdpe-jerricans-prod.png';

const HdpeJerricans = () => {
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
          page: 'HDPE Jerricans',
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
            <span>HDPE Jerricans</span>
          </div>
          <span className="section-label">Our Products</span>
          <h1>HDPE Jerricans</h1>
          <p>
            Best-quality HDPE jerricans ensuring superior strength, leak-proof design,
            chemical resistance, precise molding, and reliable performance for industrial,
            food-grade, and commercial storage applications.
          </p>
        </div>
      </section>

      <section className="section product-types-section">
        <div className="container">
          <div className="product-detail">
            <div className="product-detail-header">
              <h2>What is HDPE?</h2>
              <p>
                High-Density Polyethylene (HDPE) is one of the most versatile and widely used plastics.
                It offers excellent chemical resistance, high strength-to-density ratio, and is
                approved for food-contact applications. HDPE jerricans are the preferred choice
                for storing and transporting liquids across industries.
              </p>
            </div>

            <div className="product-detail-row">
              <div className="product-detail-image">
                <img src={hdpeImg} alt="HDPE Jerricans" />
              </div>

              <div className="spec-table-wrapper">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Available Sizes</td>
                      <td>1L, 2L, 5L, 10L, 15L, 20L, 25L, 35L</td>
                    </tr>
                    <tr>
                      <td>Colours</td>
                      <td>Natural White, Blue, Red, Yellow, Green, Black, Custom</td>
                    </tr>
                    <tr>
                      <td>Applications</td>
                      <td>Industrial Chemicals, Edible Oil, Agrochemicals, Lubricants, Cleaning Agents, Water Storage</td>
                    </tr>
                    <tr>
                      <td>Key Features</td>
                      <td>Superior Strength, Leak-Proof Design, Chemical Resistance, Food-Grade Certified, Precise Molding, Recyclable</td>
                    </tr>
                    <tr>
                      <td>Industries Served</td>
                      <td>Industrial Chemicals, Agrochemicals & Pesticides, Edible Oil & Food, Lubricants & Automotive, Cleaning & Detergents, Water Storage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
                  <option value="">Select a size</option>
                  <option value="1L Jerrican">1L Jerrican</option>
                  <option value="2L Jerrican">2L Jerrican</option>
                  <option value="5L Jerrican">5L Jerrican</option>
                  <option value="10L Jerrican">10L Jerrican</option>
                  <option value="15L Jerrican">15L Jerrican</option>
                  <option value="20L Jerrican">20L Jerrican</option>
                  <option value="25L Jerrican">25L Jerrican</option>
                  <option value="35L Jerrican">35L Jerrican</option>
                  <option value="Multiple Sizes">Multiple Sizes</option>
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
              <h3>Need HDPE Jerricans in Bulk?</h3>
              <p>Get competitive pricing for large orders with custom colours and branding options.</p>
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

export default HdpeJerricans;

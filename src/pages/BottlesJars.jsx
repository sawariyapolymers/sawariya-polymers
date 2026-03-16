import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ProductPage.css';
import oilBottlesImg from '../assets/oil-botlles.png';
import confectionaryJarsImg from '../assets/confectionary-jars.png';
import mineralWaterImg from '../assets/mineral-water-bottles.png';
import pharmaBottlesImg from '../assets/pharmaceutical-bottles.png';
import beverageBottlesImg from '../assets/beverage-bottles.png';
import householdBottlesImg from '../assets/household-and-industrial-bottles.png';

const categories = [
  {
    id: 'oil',
    title: 'Oil Bottles',
    image: oilBottlesImg,
    description: 'Premium PET bottles designed specifically for edible oil packaging. Crystal clear transparency, excellent barrier properties, and leak-proof design ensure oil stays fresh and pure.',
    applications: 'Mustard Oil, Sunflower Oil, Groundnut Oil, Soybean Oil, Coconut Oil, Olive Oil',
    sizes: '200ml, 500ml, 1L, 2L, 5L',
    features: ['Crystal Clear Transparency', 'Leak-Proof Design', 'Food-Grade Quality', 'UV Protection'],
  },
  {
    id: 'confectionery',
    title: 'Confectionery Jars',
    image: confectionaryJarsImg,
    description: 'Wide-mouth PET jars perfect for storing confectionery items, snacks, pickles, and dry foods. Durable, airtight, and available in multiple sizes with secure closures.',
    applications: 'Candies, Cookies, Namkeen, Pickles, Spices, Dry Fruits, Sugar, Honey',
    sizes: '100ml, 200ml, 500ml, 1L, 1.5L, 2L',
    features: ['Wide Mouth Opening', 'Airtight Seal', 'Stackable Design', 'Clear Visibility'],
  },
  {
    id: 'mineral',
    title: 'Mineral Water Bottles',
    image: mineralWaterImg,
    description: 'Lightweight yet durable PET bottles for packaged drinking water. Designed for clarity, strength, and consistent performance on high-speed filling lines.',
    applications: 'Packaged Drinking Water, Mineral Water, Flavoured Water, Sparkling Water',
    sizes: '200ml, 250ml, 500ml, 1L, 2L',
    features: ['Lightweight Design', 'High Clarity', 'BPA Free', 'Recyclable'],
  },
  {
    id: 'pharma',
    title: 'Pharmaceutical Bottles',
    image: pharmaBottlesImg,
    description: 'Specialised PET bottles for pharmaceutical and healthcare applications. Available in amber and other colours for light-sensitive products, with tamper-evident closures.',
    applications: 'Syrups, Tonics, Tablets, Capsules, Health Supplements',
    sizes: '60ml, 100ml, 200ml, 500ml',
    features: ['Tamper-Evident Closure', 'Amber Colour Options', 'Chemical Resistant', 'Precise Dosing'],
  },
  {
    id: 'beverage',
    title: 'Beverage Bottles',
    image: beverageBottlesImg,
    description: 'Versatile PET bottles for carbonated and non-carbonated beverages. Engineered to withstand internal pressure while maintaining crystal clarity and shelf appeal.',
    applications: 'Juices, Soft Drinks, Iced Tea, Milkshakes, Energy Drinks',
    sizes: '200ml, 300ml, 500ml, 750ml, 1L, 2L',
    features: ['Pressure Resistant', 'Shelf Appeal', 'Custom Shapes', 'Consistent Quality'],
  },
  {
    id: 'household',
    title: 'Household & Industrial Bottles',
    image: householdBottlesImg,
    description: 'Robust PET bottles for household cleaners, personal care products, and industrial chemicals. Designed for chemical compatibility and safe storage.',
    applications: 'Floor Cleaners, Dish Wash, Shampoo, Detergents, Acids, Solvents',
    sizes: '250ml, 500ml, 1L, 2L, 5L',
    features: ['Chemical Resistant', 'Strong Build', 'Ergonomic Shape', 'Secure Caps'],
  },
];

const BottlesJars = () => {
  const [activeType, setActiveType] = useState('oil');
  const current = categories.find((c) => c.id === activeType);

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
          page: 'Bottles & Jars',
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
            <span>Bottles & Jars</span>
          </div>
          <span className="section-label">Our Products</span>
          <h1>Bottles & Jars</h1>
          <p>
            High-quality PET bottles and jars for oil, confectionery, mineral water,
            and diverse applications — offering superior strength, clarity, and food-grade standards.
          </p>
        </div>
      </section>

      <section className="section product-types-section">
        <div className="container">
          <div className="product-type-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`product-type-tab ${activeType === cat.id ? 'active' : ''}`}
                onClick={() => setActiveType(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="product-detail" key={current.id}>
            <div className="product-detail-header">
              <h2>{current.title}</h2>
              <p>{current.description}</p>
            </div>

            <div className="product-detail-row">
              <div className="product-detail-image">
                <img src={current.image} alt={current.title} />
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
                      <td>Applications</td>
                      <td>{current.applications}</td>
                    </tr>
                    <tr>
                      <td>Available Sizes</td>
                      <td>{current.sizes}</td>
                    </tr>
                    <tr>
                      <td>Key Features</td>
                      <td>{current.features.join(', ')}</td>
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="product">Product Interest *</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a product</option>
                  <option value="Oil Bottles">Oil Bottles</option>
                  <option value="Confectionery Jars">Confectionery Jars</option>
                  <option value="Mineral Water Bottles">Mineral Water Bottles</option>
                  <option value="Pharmaceutical Bottles">Pharmaceutical Bottles</option>
                  <option value="Beverage Bottles">Beverage Bottles</option>
                  <option value="Household & Industrial Bottles">Household & Industrial Bottles</option>
                  <option value="Custom Requirement">Custom Requirement</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your packaging requirements, quantity, specifications..."
                ></textarea>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
                  {status !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>

              {status === 'success' && (
                <div className="form-status success">
                  Thank you! Your enquiry has been sent successfully. We'll get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="form-status error">
                  Something went wrong. Please try again or reach out to us directly via phone or email.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="product-enquiry-strip">
        <div className="container">
          <div className="enquiry-strip-inner">
            <div>
              <h3>Looking for Custom Bottles or Jars?</h3>
              <p>We offer customised solutions tailored to your brand and product requirements.</p>
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

export default BottlesJars;

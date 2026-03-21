import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ProductPage.css';
import jarImg from '../assets/bubble-top-jar.png';
import dispenserImg from '../assets/bubble-top-dispenser.png';

const categories = [
  {
    id: 'jars',
    name: '20 Litre Jars',
    image: jarImg,
    description: 'PET Jars have been a preferred choice for packaging of drinking water due to their varied benefits. They provide product differentiation, improve volume of production, and offer flexibility in packaging processes. PET Jars ensure purity of the product, maintain taste, offer a premium look and feel, and create a convenient experience for consumers. They are heavy duty, clear, transparent, break resistant, and easy to handle — widely used for both domestic and corporate purposes. PET Jars can be moulded into any shape and colour, and offer convenience of reusability and recyclability.',
    specs: [
      { weight: '660 Grams', volume: '20 Litres', product: 'Jar', neck: '55mm' },
      { weight: '670 Grams', volume: '20 Litres', product: 'Jar', neck: '55mm' },
      { weight: '690 Grams', volume: '20 Litres', product: 'Jar', neck: '55mm' },
      { weight: '700 Grams', volume: '20 Litres', product: 'Jar', neck: '55mm' },
    ],
    application: 'PET Jars for Packaged Drinking Water',
    design: 'Standard and as per customer\'s requirement',
    neckType: 'Push and Screw',
    colour: 'Natural Transparent, Blue, Green & Pink',
    market: 'Food & Beverages',
  },
  {
    id: 'dispensers',
    name: 'Dispensers',
    image: dispenserImg,
    description: 'Dispensers are an essential element of the 20 Litre Jars. Once set up, the flow of water is continuous through the tap. They come in a variety of colours and designs and are extremely convenient to use. Dispensers attach to the 20 Litre Jars, making the flow of water quick and efficient. Made from PET material, they are heavy duty, clear, transparent, break resistant, and easy to handle — widely used for both domestic and corporate purposes. Dispensers can be made in various colours and designs.',
    specs: [
      { weight: '260 Grams', volume: '5 Litres', product: 'Dispenser', neck: '120mm' },
      { weight: '320 Grams', volume: '5 Litres / 8 Litres', product: 'Dispenser', neck: '120mm' },
      { weight: '360 Grams', volume: '8 Litres', product: 'Dispenser', neck: '120mm' },
    ],
    application: 'PET Dispenser for Packaged Drinking Water',
    design: 'Standard and as per customer\'s requirement',
    neckType: null,
    colour: 'Natural Transparent, Blue, Green & Pink',
    market: 'Food & Beverages',
  },
];

const BubbleTop = () => {
  const [activeType, setActiveType] = useState('jars');
  const current = categories.find((c) => c.id === activeType);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', product: '', quantity: '', message: ''
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
          quantity: formData.quantity,
          message: formData.message,
          page: '20 Litre Bubble Top',
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
            <span>20 Litre Bubble Top</span>
          </div>
          <span className="section-label">Our Products</span>
          <h1>20 Litre Bubble Top</h1>
          <p>
            Heavy-duty PET jars and dispensers for packaged drinking water — clear, transparent,
            break resistant, reusable, and recyclable for domestic and corporate use.
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
                {cat.name}
              </button>
            ))}
          </div>

          <div className="product-detail" key={current.id}>
            <div className="product-detail-header">
              <h2>{current.name}</h2>
              <p>{current.description}</p>
            </div>

            <div className="product-detail-row">
              <div className="product-detail-image">
                <img src={current.image} alt={current.name} />
              </div>

              <div className="spec-table-wrapper">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Weight</th>
                      <th>Volume</th>
                      <th>Product</th>
                      <th>Neck</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.specs.map((spec, i) => (
                      <tr key={i}>
                        <td>{spec.weight}</td>
                        <td>{spec.volume}</td>
                        <td>{spec.product}</td>
                        <td>{spec.neck}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="product-info-grid">
              <div className="product-info-item">
                <h4>Application</h4>
                <p>{current.application}</p>
              </div>
              <div className="product-info-item">
                <h4>Design</h4>
                <p>{current.design}</p>
              </div>
              {current.neckType && (
                <div className="product-info-item">
                  <h4>Neck Type</h4>
                  <p>{current.neckType}</p>
                </div>
              )}
              <div className="product-info-item">
                <h4>Colour</h4>
                <p>{current.colour}</p>
              </div>
              <div className="product-info-item">
                <h4>Market</h4>
                <p>{current.market}</p>
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
                  <option value="">Select a product</option>
                  <option value="20 Litre Jar - 660g">20 Litre Jar — 660g</option>
                  <option value="20 Litre Jar - 670g">20 Litre Jar — 670g</option>
                  <option value="20 Litre Jar - 690g">20 Litre Jar — 690g</option>
                  <option value="20 Litre Jar - 700g">20 Litre Jar — 700g</option>
                  <option value="Dispenser - 260g">Dispenser — 260g</option>
                  <option value="Dispenser - 320g">Dispenser — 320g</option>
                  <option value="Dispenser - 360g">Dispenser — 360g</option>
                  <option value="Custom Requirement">Custom Requirement</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Order Quantity</label>
                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 10,000 units / month" />
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
              <h3>Need 20 Litre Jars or Dispensers in Bulk?</h3>
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

export default BubbleTop;
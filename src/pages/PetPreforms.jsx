import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ProductPage.css';
import tstImg from '../assets/tst-preforms.png';
import roppImg from '../assets/ropp-preforms.png';
import pco1810Img from '../assets/pcio-1810-preforms.png';
import pco1881Img from '../assets/pcio-1881-preforms.png';
import ctcImg from '../assets/ctc-preforms.png';
import customImg from '../assets/customized-preforms.png';

const preformTypes = [
  {
    id: 'alaska',
    name: 'Alaska (TST)',
    image: tstImg,
    description: 'Alaska or Three Start (TST) Preforms are commonly used to manufacture PET Bottles for packaged drinking water. They have a standard neck diameter of 28 millimeters and can be used for making containers that hold up to two litres.',
    specs: [
      { size: '200ml / 250ml / 300ml', weight: '9.2 Grams' },
      { size: '500ml', weight: '12.0 Grams' },
      { size: '500ml / 600ml', weight: '12.8 Grams' },
      { size: '1000ml', weight: '18 Grams' },
      { size: '1000ml', weight: '19 Grams' },
      { size: '2000ml', weight: '31.5 Grams' },
    ],
    application: 'PET Bottles for Packaged Drinking Water, Oil, Industrial Chemicals, Acids',
    colour: 'Natural Transparent',
    market: 'Food & Beverages, Chemicals, FMCG',
  },
  {
    id: 'ropp',
    name: 'ROPP',
    image: roppImg,
    description: 'ROPP Preforms are used to manufacture PET Bottles for Liquor as well as Pharmaceutical applications. These preforms have a standard neck of 25 and 28 millimeter without collar, with a Roll-on metal or plastic cap.',
    specs: [
      { size: '60ml / 100ml / 180ml', weight: '8.8 Grams*', neck: '25mm' },
      { size: '300ml / 375ml', weight: '10.7 Grams*', neck: '25mm' },
      { size: '180ml / 200ml / 600ml', weight: '14.5 Grams', neck: '25mm' },
      { size: '180ml / 200ml / 600ml', weight: '16 Grams', neck: '25mm' },
      { size: '180ml / 300ml / 375ml', weight: '13 Grams', neck: '28mm' },
      { size: '375ml / 600ml', weight: '18 Grams', neck: '28mm' },
      { size: '500ml / 600ml', weight: '21 Grams*', neck: '28mm' },
      { size: '500ml / 600ml', weight: '23 Grams*', neck: '28mm' },
      { size: '500ml / 750ml', weight: '40 Grams*', neck: '29mm Long' },
      { size: '750ml / 1000ml', weight: '50 Grams*', neck: '29mm Long' },
    ],
    application: 'PET Bottles for Medicines, Liquor — Country Spirit (CS), IMIL & IMFL',
    colour: 'Natural Transparent, Green, Amber, Yellow and other colours',
    market: 'Pharmaceutical, Liquor',
    hasNeck: true,
  },
  {
    id: 'pco1810',
    name: 'PCO 1810',
    image: pco1810Img,
    description: 'PCO 1810 preforms are used to manufacture PET Bottles for carbonated soft drinks, juices, edible oil, sauces and industrial chemicals. They have a standard neck of 28 millimeter.',
    specs: [
      { size: '200ml / 500ml', weight: '13.8 Grams', neck: '28mm' },
      { size: '200ml / 500ml', weight: '18.8 Grams', neck: '28mm' },
      { size: '500ml / 1000ml', weight: '20.5 Grams', neck: '28mm' },
      { size: '500ml / 1000ml', weight: '24 Grams', neck: '28mm' },
      { size: '1000ml', weight: '32.5 Grams', neck: '28mm' },
    ],
    application: 'PET Bottles for Carbonated Soft Drinks (CSD), Cold Fill Juices, Edible Oil and Industrial Chemicals',
    colour: 'Natural Transparent, Green, Orange, Yellow, Pink',
    market: 'Food & Beverages, FMCG, Chemicals',
    hasNeck: true,
  },
  {
    id: 'pco1881',
    name: 'PCO 1881',
    image: pco1881Img,
    description: 'PCO 1881 preforms are designed with a shorter neck and fewer threads than PCO 1810. Used for carbonated soft drinks, hot fill & cold fill juices, and sauces. Standard 28mm neck.',
    specs: [
      { size: '160ml / 180ml', weight: '10.5 Grams*', neck: '28mm' },
      { size: '180ml / 200ml', weight: '11.2 Grams*', neck: '28mm' },
      { size: '300ml / 400ml', weight: '13 Grams', neck: '28mm' },
      { size: '500ml / 600ml', weight: '21 Grams', neck: '28mm' },
      { size: '600ml / 750ml', weight: '22.5 Grams*', neck: '28mm' },
      { size: '750ml / 1000ml', weight: '32 Grams', neck: '28mm' },
    ],
    application: 'PET Bottles for CSD, Beer, Hot Fill & Cold Fill Juices, Sauces and Iced Teas',
    colour: 'Natural Transparent & Green',
    market: 'Food & Beverages, FMCG',
    hasNeck: true,
  },
  {
    id: 'ctc',
    name: 'CTC',
    image: ctcImg,
    description: 'CTC Preforms are used to manufacture PET Bottles for packaging of Edible Oil. They have a standard neck diameter of 29 millimeters. Double cap or Flip cap can be used for ease of pouring.',
    specs: [
      { size: '200ml', weight: '10.5 Grams*', neck: '29mm' },
      { size: '500ml', weight: '15.5 Grams*', neck: '29mm' },
      { size: '1000ml', weight: '23.5 Grams*', neck: '29mm' },
    ],
    application: 'PET Bottles for Edible Oil',
    colour: 'Natural Transparent & Yellow',
    market: 'Food & Beverages, FMCG',
    hasNeck: true,
  },
  {
    id: 'custom',
    name: 'Customized',
    image: customImg,
    description: 'We also offer customized preform solutions tailored to your specific requirements. Our team works closely with you to develop preforms that meet your exact specifications for size, weight, neck finish, and application.',
    specs: [],
    application: 'Custom applications as per client requirement',
    colour: 'As per requirement',
    market: 'All industries',
  },
];

const PetPreforms = () => {
  const [activeType, setActiveType] = useState('alaska');
  const current = preformTypes.find((t) => t.id === activeType);

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
          page: 'PET Preforms',
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
            <span>PET Preforms</span>
          </div>
          <span className="section-label">Our Products</span>
          <h1>PET Preforms</h1>
          <p>
            An extensive range of PET Preforms for varied requirements — clear, transparent,
            and food-grade quality with glass-like appearance and superior durability.
          </p>
        </div>
      </section>

      <section className="section product-types-section">
        <div className="container">
          <div className="product-type-tabs">
            {preformTypes.map((type) => (
              <button
                key={type.id}
                className={`product-type-tab ${activeType === type.id ? 'active' : ''}`}
                onClick={() => setActiveType(type.id)}
              >
                {type.name}
              </button>
            ))}
          </div>

          <div className="product-detail" key={current.id}>
            <div className="product-detail-header">
              <h2>{current.name} Preforms</h2>
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
                      <th>Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.specs.length > 0 && (
                      <tr>
                        <td>Available Sizes</td>
                        <td>
                          {current.specs.map((spec, i) => (
                            <div key={i} style={{ marginBottom: i < current.specs.length - 1 ? '6px' : 0 }}>
                              {spec.size} — {spec.weight}{current.hasNeck ? ` — ${spec.neck}` : ''}
                            </div>
                          ))}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>Application</td>
                      <td>{current.application}</td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>{current.colour}</td>
                    </tr>
                    <tr>
                      <td>Market</td>
                      <td>{current.market}</td>
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
                  <option value="">Select a preform type</option>
                  <option value="Alaska (TST)">Alaska (TST)</option>
                  <option value="ROPP">ROPP</option>
                  <option value="PCO 1810">PCO 1810</option>
                  <option value="PCO 1881">PCO 1881</option>
                  <option value="CTC">CTC</option>
                  <option value="Customized">Customized</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your packaging requirements, quantity, specifications..."></textarea>
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
              <h3>Need Help Choosing the Right Preform?</h3>
              <p>Our team can help you find the perfect solution for your packaging requirements.</p>
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

export default PetPreforms;

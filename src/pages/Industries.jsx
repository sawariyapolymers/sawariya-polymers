import { Link } from 'react-router-dom';
import './Industries.css';

const industries = [
  { name: 'Beverages', desc: 'PET bottles for packaged drinking water, carbonated soft drinks, juices, flavoured water, milkshakes, and energy drinks.', products: ['PET Preforms', 'PET Bottles', 'Caps'] },
  { name: 'Food & Edible Oil', desc: 'Bottles and jars for edible oil, sauces, spices, honey, cereals, powdered drinks, and ready-to-eat savories.', products: ['CTC Preforms', 'Oil Bottles', 'Flip Caps', 'Jars'] },
  { name: 'Pharmaceutical', desc: 'ROPP preforms and specialised bottles for syrups, tonics, tablets, and healthcare supplements with tamper-evident closures.', products: ['ROPP Preforms', 'Pharma Bottles', 'ROPP Caps'] },
  { name: 'Liquor & Spirits', desc: 'PET bottles for Country Spirits (CS), Beer, Indian Made Indian Liquor (IMIL), and Indian Made Foreign Liquor (IMFL).', products: ['ROPP Preforms', 'Liquor Bottles'] },
  { name: 'Personal Care', desc: 'Bottles for baby care, oral care, skin care, hair care, fragrances, bath & shower, and sun care products.', products: ['PET Bottles', 'Screw Caps'] },
  { name: 'Home Care', desc: 'Durable bottles for liquid dish wash, glass cleaners, disinfectants, floor cleaners, phenyle, and acid storage.', products: ['PET Bottles', 'HDPE Jars & Containers', 'Caps'] },
  { name: 'Agro Chemicals', desc: 'Chemical-resistant bottles and jars for pesticides, herbicides, and fertilizers — built for safe storage and handling.', products: ['HDPE Jars & Containers', 'PET Bottles', 'Caps'] },
  { name: 'Dairy', desc: 'Food-grade PET bottles and jars for milk, curd, buttermilk, lassi, and other dairy products requiring freshness preservation.', products: ['PET Bottles', 'PET Jars', 'Caps'] },
  { name: 'Confectionery', desc: 'Wide-mouth PET jars for candies, cookies, namkeen, snacks, dry fruits, and other confectionery items.', products: ['PET Jars', 'Jar Caps'] },
  { name: 'Household', desc: 'Wide-mouth containers for home storage of snacks, pickles, spices, and everyday food items.', products: ['PET Jars', 'Jar Caps', 'Handles'] },
  { name: 'Industrial Chemicals', desc: 'Heavy-duty HDPE jars and PET bottles for acids, solvents, lubricants, and industrial chemical storage.', products: ['HDPE Jars & Containers', 'PET Bottles', 'Caps'] },
  { name: 'FMCG', desc: 'Versatile packaging solutions for fast-moving consumer goods — from beverages and food to personal and home care products.', products: ['PET Preforms', 'Bottles', 'Jars', 'Caps'] },
];

const Industries = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
            <span>Industries</span>
          </div>
          <span className="section-label">Markets We Serve</span>
          <h1>Industries</h1>
          <p>PET and HDPE packaging solutions tailored for diverse sectors — from food and beverages to industrial chemicals.</p>
        </div>
      </section>

      {/* PET Benefits */}
      <section className="section pet-benefits-section">
        <div className="container text-center">
          <span className="section-label">Why PET Packaging</span>
          <h2 className="section-title">Benefits of PET</h2>
          <p className="section-subtitle">PET is an excellent material for food-grade, durable, and sustainable packaging.</p>

          <div className="pet-benefits-grid">
            <div className="pet-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h4>BPA Free</h4>
            </div>
            <div className="pet-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
              <h4>Recyclable</h4>
            </div>
            <div className="pet-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
              <h4>Durable</h4>
            </div>
            <div className="pet-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75" /></svg>
              <h4>Lightweight</h4>
            </div>
            <div className="pet-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" /></svg>
              <h4>Leak-Proof</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '8px' }}>
            <span className="section-label">Sectors</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">Our products cater to a wide range of industries with specialised packaging solutions.</p>
          </div>

          <div className="industries-detail-grid">
            {industries.map((ind, i) => (
              <div className="industry-detail-card" key={i}>
                <div className="industry-detail-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
                <div className="industry-products">
                  {ind.products.map((p, j) => (
                    <span className="industry-product-tag" key={j}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-cta-strip">
        <div className="container">
          <div className="industries-cta-inner">
            <div>
              <h3>Need Packaging for Your Industry?</h3>
              <p>Tell us about your product and we'll recommend the ideal packaging solution.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;

import { Link } from 'react-router-dom';
import './About.css';

const NotFound = () => {
  return (
    <section className="page-header" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', marginBottom: '8px', color: 'var(--aqua)', opacity: 0.3 }}>404</h1>
        <h2 style={{ color: 'var(--off-white)', marginBottom: '16px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-on-dark)', opacity: 0.8, maxWidth: '480px', margin: '0 auto 32px' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

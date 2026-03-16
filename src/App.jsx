import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import PetPreforms from './pages/PetPreforms';
import BottlesJars from './pages/BottlesJars';
import CapsHandles from './pages/CapsHandles';
import HdpeJerricans from './pages/HdpeJerricans';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/pet-preforms" element={<PetPreforms />} />
          <Route path="/products/bottles-jars" element={<BottlesJars />} />
          <Route path="/products/caps-handles" element={<CapsHandles />} />
          <Route path="/products/hdpe-jerricans" element={<HdpeJerricans />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;

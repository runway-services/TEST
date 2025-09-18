import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FixedContactButtons from './components/FixedContactButtons';
import CookieBanner from './components/CookieBanner';
import Legal from './components/Legal';

function App() {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  // Listen for legal page navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'impressum' || hash === 'datenschutz' || hash === 'agb') {
        setLegalPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeLegalPage = () => {
    setLegalPage(null);
    window.history.pushState('', document.title, window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Fixed Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* About Section */}
        <About />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Fixed Contact Buttons */}
      <FixedContactButtons />
      
      {/* Cookie Banner */}
      <CookieBanner />
      
      {/* Legal Pages Modal */}
      <Legal page={legalPage} onClose={closeLegalPage} />
    </div>
  );
}

export default App;
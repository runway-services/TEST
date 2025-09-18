import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6195109/pexels-photo-6195109.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Professional cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professionelle Reinigung
            <span className="block text-green-300">für Ihr Zuhause</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Zuverlässig, gründlich und umweltfreundlich – Ihr lokaler Partner für 
            saubere Räume und zufriedene Kunden seit über 10 Jahren.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Jetzt Termin vereinbaren
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Unsere Leistungen
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Shield className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Versichert & Bondet</h3>
              <p className="text-sm opacity-80">Vollversichert für Ihren Schutz</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Clock className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pünktlich & Zuverlässig</h3>
              <p className="text-sm opacity-80">Termine werden eingehalten</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Users className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">500+ Zufriedene Kunden</h3>
              <p className="text-sm opacity-80">Lokaler Vertrauenspartner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6195109/pexels-photo-6195109.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Professional cleaning service"
          className="w-full h-full object-cover transform scale-105 animate-pulse"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-green-900/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-shadow-lg animate-fade-in">
            Professionelle Reinigung
            <span className="block text-green-300 mt-2">für Ihr Zuhause</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-4xl mx-auto leading-relaxed text-shadow">
            Zuverlässig, gründlich und umweltfreundlich – Ihr lokaler Partner für 
            saubere Räume und zufriedene Kunden seit über <span className="text-green-300 font-semibold">10 Jahren</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-3 shadow-xl"
            >
              Jetzt Termin vereinbaren
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollToServices}
              className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/80 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg transform hover:scale-105"
            >
              Unsere Leistungen
            </button>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">24h Notfallservice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">100% Zufriedenheitsgarantie</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-full p-5 mb-4 transform hover:scale-110 transition-all duration-300">
                <Shield className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-shadow">Versichert & Bondet</h3>
              <p className="text-sm opacity-90">Vollversichert für Ihren Schutz</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-full p-5 mb-4 transform hover:scale-110 transition-all duration-300">
                <Clock className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-shadow">Pünktlich & Zuverlässig</h3>
              <p className="text-sm opacity-90">Termine werden eingehalten</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-full p-5 mb-4 transform hover:scale-110 transition-all duration-300">
                <Users className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-shadow">500+ Zufriedene Kunden</h3>
              <p className="text-sm opacity-90">Lokaler Vertrauenspartner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Haushaltsreinigung',
    'Büroreinigung', 
    'Autoreinigung',
    'Grundreinigung',
    'Fensterreinigung',
    'Spezialreinigung'
  ];

  const quickLinks = [
    'Startseite',
    'Dienstleistungen', 
    'Über uns',
    'Galerie',
    'Preise',
    'Kontakt'
  ];

  const legalLinks = [
    'Impressum',
    'Datenschutzerklärung',
    'AGB',
    'Widerrufsrecht'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              CleanPro Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen 
              in Hamburg und Umgebung. Seit über 10 Jahren mit Qualität und Vertrauen.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-green-400 mr-3" />
                <span className="text-sm text-gray-300">+49 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-3" />
                <span className="text-sm text-gray-300">info@cleanpro-services.de</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-purple-400 mr-3 mt-1" />
                <div className="text-sm text-gray-300">
                  <div>Musterstraße 123</div>
                  <div>20359 Hamburg</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Unsere Dienstleistungen</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicezeiten</h4>
            <div className="text-sm text-gray-300 space-y-1 mb-6">
              <div className="flex justify-between">
                <span>Mo - Fr:</span>
                <span>7:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span>8:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag:</span>
                <span>Notfallservice</span>
              </div>
            </div>

            <h5 className="font-semibold mb-3 text-sm">Rechtliches</h5>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} CleanPro Services. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#impressum" className="hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#agb" className="hover:text-white transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Vollversichert & Bondet
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              DSGVO-konform
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Zertifiziert & Geprüft
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
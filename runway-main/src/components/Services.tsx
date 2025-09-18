import React from 'react';
import { Home, Car, Building, Sparkles, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Haushaltsreinigung',
      description: 'Gründliche Reinigung Ihrer Wohnräume mit umweltfreundlichen Produkten',
      features: ['Küche & Badezimmer', 'Staubsaugen & Wischen', 'Fensterreinigung', 'Grundreinigung'],
      price: 'ab 25€/Std'
    },
    {
      icon: Building,
      title: 'Büroreinigung',
      description: 'Professionelle Büroreinigung für ein sauberes Arbeitsumfeld',
      features: ['Tägliche Reinigung', 'Sanitärbereiche', 'Küchen/Pausenräume', 'Mülldienst'],
      price: 'ab 20€/Std'
    },
    {
      icon: Car,
      title: 'Autoreinigung',
      description: 'Innen- und Außenreinigung für Ihr Fahrzeug mit Detailpflege',
      features: ['Innenreinigung', 'Außenwäsche', 'Polsterreinigung', 'Wachsversiegelung'],
      price: 'ab 45€'
    },
    {
      icon: Sparkles,
      title: 'Spezialreinigung',
      description: 'Spezielle Reinigungsdienstleistungen für besondere Anforderungen',
      features: ['Bauschlussreinigung', 'Teppichreinigung', 'Glasreinigung', 'Desinfektion'],
      price: 'auf Anfrage'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Grundreinigung bis zur Spezialreinigung – wir bieten maßgeschneiderte 
            Lösungen für Privat- und Geschäftskunden in der Region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price */}
                <div className="text-center">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Kostenlose Beratung & Angebot
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Jeder Auftrag ist einzigartig. Kontaktieren Sie uns für eine individuelle 
              Beratung und ein maßgeschneidertes Angebot ohne Verpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Kostenlose Beratung
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Preise ansehen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
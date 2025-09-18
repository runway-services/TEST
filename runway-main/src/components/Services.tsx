import React from 'react';
import { Home, Car, Building, Sparkles, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Haushaltsreinigung',
      description: 'Gründliche Reinigung Ihrer Wohnräume mit umweltfreundlichen Produkten',
      features: ['Küche & Badezimmer', 'Staubsaugen & Wischen', 'Fensterreinigung', 'Grundreinigung'],
      price: 'ab 25€/Std',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: 'Büroreinigung',
      description: 'Professionelle Büroreinigung für ein sauberes Arbeitsumfeld',
      features: ['Tägliche Reinigung', 'Sanitärbereiche', 'Küchen/Pausenräume', 'Mülldienst'],
      price: 'ab 20€/Std',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Car,
      title: 'Autoreinigung',
      description: 'Innen- und Außenreinigung für Ihr Fahrzeug mit Detailpflege',
      features: ['Innenreinigung', 'Außenwäsche', 'Polsterreinigung', 'Wachsversiegelung'],
      price: 'ab 45€',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Spezialreinigung',
      description: 'Spezielle Reinigungsdienstleistungen für besondere Anforderungen',
      features: ['Bauschlussreinigung', 'Teppichreinigung', 'Glasreinigung', 'Desinfektion'],
      price: 'auf Anfrage',
      gradient: 'from-orange-500 to-orange-600'
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.gradient} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 group-hover:text-green-600 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price */}
                <div className="text-center relative z-10">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform duration-300`}>
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-2xl p-10 shadow-xl max-w-4xl mx-auto border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-10 w-10 text-green-500 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">
                Kostenlose Beratung & Angebot
              </h3>
            </div>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Jeder Auftrag ist einzigartig. Kontaktieren Sie uns für eine individuelle 
              Beratung und ein maßgeschneidertes Angebot ohne Verpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                Kostenlose Beratung
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
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
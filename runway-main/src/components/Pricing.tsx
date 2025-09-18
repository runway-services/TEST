import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basis',
      icon: Star,
      price: '25',
      period: 'pro Stunde',
      description: 'Ideal für regelmäßige Haushaltsreinigung',
      features: [
        'Staubsaugen & Wischen',
        'Badezimmer reinigen',
        'Küche grundreinigen',
        'Mülldienst',
        'Umweltfreundliche Produkte'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Premium',
      icon: Crown,
      price: '35',
      period: 'pro Stunde',
      description: 'Umfassende Reinigung mit Extras',
      features: [
        'Alle Basis-Leistungen',
        'Fenster innen reinigen',
        'Polstermöbel absaugen',
        'Schränke innen wischen',
        'Kühlschrank reinigen',
        'Prioritätstermine'
      ],
      popular: true,
      color: 'green'
    },
    {
      name: 'Deluxe',
      icon: Zap,
      price: '45',
      period: 'pro Stunde',
      description: 'Premium-Service mit Spezialbehandlung',
      features: [
        'Alle Premium-Leistungen',
        'Fenster außen reinigen',
        'Teppichreinigung',
        'Wäsche waschen & falten',
        'Bügeln (bis 10 Teile)',
        'Balkon/Terrasse reinigen',
        'Flexible Terminwünsche'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const additionalServices = [
    { name: 'Grundreinigung (einmalig)', price: 'ab 15€/m²' },
    { name: 'Fensterreinigung (außen)', price: 'ab 3€/m²' },
    { name: 'Teppichreinigung', price: 'ab 8€/m²' },
    { name: 'Büroreinigung', price: 'ab 20€/Std' },
    { name: 'Autoreinigung komplett', price: 'ab 45€' },
    { name: 'Bauschlussreinigung', price: 'auf Anfrage' }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      blue: popular 
        ? 'border-blue-500 bg-blue-50' 
        : 'border-gray-200 bg-white hover:border-blue-300',
      green: popular 
        ? 'border-green-500 bg-green-50 ring-4 ring-green-100' 
        : 'border-gray-200 bg-white hover:border-green-300',
      purple: popular 
        ? 'border-purple-500 bg-purple-50' 
        : 'border-gray-200 bg-white hover:border-purple-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getButtonClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparente Preise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faire und transparente Preise ohne versteckte Kosten. 
            Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 transform hover:-translate-y-2 relative ${getColorClasses(plan.color, plan.popular)}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      BELIEBT
                    </span>
                  </div>
                )}
                
                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.color === 'blue' ? 'bg-blue-100' : 
                    plan.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      plan.color === 'blue' ? 'text-blue-600' : 
                      plan.color === 'green' ? 'text-green-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}€
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${getButtonClasses(plan.color)}`}
                >
                  Paket auswählen
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Zusatzleistungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-900 font-medium text-sm">
                  {service.name}
                </span>
                <span className="text-blue-600 font-bold text-sm">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              100% Zufriedenheitsgarantie
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Sollten Sie mit unserer Leistung nicht vollständig zufrieden sein, 
              kommen wir kostenlos zurück und bessern nach. Das ist unser Versprechen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center text-gray-700">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Keine versteckten Kosten</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Kostenlose Nachbesserung</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Vollversichert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Weber',
      role: 'Privatkundin',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'CleanPro Services reinigt seit zwei Jahren unsere Wohnung. Das Team ist immer pünktlich, gründlich und sehr freundlich. Wir sind rundum zufrieden und können sie nur weiterempfehlen!',
      location: 'Hamburg'
    },
    {
      id: 2,
      name: 'Thomas Müller',
      role: 'Geschäftsführer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Für unsere Büroräume haben wir den perfekten Partner gefunden. Zuverlässig, diskret und mit höchsten Qualitätsansprüchen. Die Zusammenarbeit ist seit Jahren problemlos.',
      location: 'Hamburg'
    },
    {
      id: 3,
      name: 'Sandra Klein',
      role: 'Privatkundin',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Nach einem Wasserschaden brauchten wir eine Grundreinigung. CleanPro hat unser Zuhause wieder bewohnbar gemacht. Professionell, schnell und zu fairen Preisen.',
      location: 'Altona'
    },
    {
      id: 4,
      name: 'Dr. Schmidt',
      role: 'Arztpraxis',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'In unserer Praxis sind Hygiene und Sauberkeit oberstes Gebot. CleanPro erfüllt alle Anforderungen mit Bravour. Wir schätzen die zuverlässige und diskrete Arbeit sehr.',
      location: 'Eimsbüttel'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lesen Sie, was unsere zufriedenen Kunden über unsere 
            Reinigungsdienstleistungen berichten.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-gray-700 font-semibold ml-2">4.9/5</span>
            <span className="text-gray-600">aus über 200 Bewertungen</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Content */}
              <div className="mb-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Ihre Zufriedenheit ist unser Antrieb
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
                <div className="text-gray-600 text-sm">Durchschnittsbewertung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Weiterempfehlungsrate</div>
              </div>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Werden Sie unser nächster zufriedener Kunde
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
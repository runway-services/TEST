import React from 'react';
import { Award, Users, Shield, Leaf, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Zufriedene Kunden' },
    { icon: Award, number: '10+', label: 'Jahre Erfahrung' },
    { icon: Star, number: '4.9', label: 'Kundenbewertung' },
    { icon: Shield, number: '100%', label: 'Versichert' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Zuverlässigkeit',
      description: 'Pünktlichkeit und Termintreue sind für uns selbstverständlich'
    },
    {
      icon: Leaf,
      title: 'Umweltfreundlich',
      description: 'Wir verwenden ausschließlich ökologische Reinigungsmittel'
    },
    {
      icon: Award,
      title: 'Qualität',
      description: 'Höchste Standards bei jedem Auftrag, garantiert'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Über CleanPro Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr vertrauensvoller Partner für professionelle Reinigungsdienstleistungen 
            in der Region – seit über 10 Jahren mit Leidenschaft für Sauberkeit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Familienbetrieb mit persönlicher Note
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Als inhabergeführtes Familienunternehmen stehen wir seit 2014 für 
                zuverlässige und gründliche Reinigungsdienstleistungen. Was als 
                kleines Unternehmen begann, ist heute ein etablierter Service-Partner 
                für über 500 zufriedene Kunden.
              </p>
              <p>
                Unser Team besteht aus erfahrenen, geschulten Mitarbeitern, die 
                mit modernsten Geräten und umweltfreundlichen Reinigungsmitteln 
                arbeiten. Dabei legen wir größten Wert auf Qualität, Zuverlässigkeit 
                und einen persönlichen Service.
              </p>
              <p>
                Ob Privathaushalt, Büro oder Spezialreinigung – wir behandeln jeden 
                Auftrag mit der gleichen Sorgfalt und Aufmerksamkeit, als würden 
                wir unser eigenes Zuhause reinigen.
              </p>
            </div>

            {/* Team Photo */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Familie Schmidt</h4>
                    <p className="text-gray-600 text-sm">Inhaber & Gründer</p>
                    <p className="text-gray-600 text-sm italic">"Sauberkeit ist Vertrauenssache"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="CleanPro Services Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
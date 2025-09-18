import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: 'Wie oft sollte ich eine professionelle Reinigung in Anspruch nehmen?',
      answer: 'Das hängt von Ihren individuellen Bedürfnissen ab. Für Privathaushalte empfehlen wir eine wöchentliche oder 14-tägige Reinigung. Büros werden meist täglich oder mehrmals pro Woche gereinigt. Gerne beraten wir Sie persönlich zu einem optimalen Reinigungsrhythmus.'
    },
    {
      question: 'Bringen Sie Ihre eigenen Reinigungsmittel und Geräte mit?',
      answer: 'Ja, wir bringen alle erforderlichen Reinigungsmittel und professionellen Geräte mit. Unsere Produkte sind umweltfreundlich und für alle Oberflächen geeignet. Falls Sie spezielle Wünsche haben oder eigene Produkte bevorzugen, sprechen Sie uns gerne darauf an.'
    },
    {
      question: 'Sind Sie versichert und was passiert bei Schäden?',
      answer: 'Ja, wir sind vollständig haftpflichtversichert. Sollte trotz aller Sorgfalt ein Schaden entstehen, ist dieser durch unsere Versicherung abgedeckt. Zusätzlich sind alle unsere Mitarbeiter geschult und arbeiten nach höchsten Qualitätsstandards.'
    },
    {
      question: 'Wie kann ich einen Termin vereinbaren?',
      answer: 'Termine können Sie ganz einfach telefonisch, per E-Mail oder über unser Kontaktformular vereinbaren. Wir bieten auch flexible Terminzeiten am Abend und Wochenende an. Für regelmäßige Termine erstellen wir gerne einen festen Reinigungsplan.'
    },
    {
      question: 'Was kostet eine Reinigung?',
      answer: 'Die Kosten variieren je nach Art und Umfang der Reinigung. Unsere Stundensätze beginnen bei 25€ für die Haushaltsreinigung. Gerne erstellen wir Ihnen ein individuelles, kostenloses Angebot basierend auf Ihren spezifischen Anforderungen.'
    },
    {
      question: 'Muss ich während der Reinigung anwesend sein?',
      answer: 'Nein, Sie müssen nicht anwesend sein. Viele unserer Kunden geben uns einen Schlüssel oder nutzen ein Schlüsseldepot. Alle unsere Mitarbeiter sind zuverlässig, diskret und haben ein einwandfreies Führungszeugnis. Selbstverständlich können Sie auch gerne anwesend sein.'
    },
    {
      question: 'Bieten Sie auch Notfall- oder Sofortreinigungen an?',
      answer: 'Ja, für Notfälle oder dringende Reinigungsarbeiten bieten wir einen Express-Service an. Kontaktieren Sie uns telefonisch, und wir versuchen, zeitnah einen Termin zu ermöglichen. Beachten Sie, dass für kurzfristige Termine möglicherweise ein Aufschlag anfällt.'
    },
    {
      question: 'Welche Zahlungsmöglichkeiten bieten Sie an?',
      answer: 'Wir akzeptieren Barzahlung, Überweisung und auf Wunsch auch Kartenzahlung vor Ort. Für regelmäßige Kunden bieten wir auch die Möglichkeit des Lastschriftverfahrens an. Die Rechnung erhalten Sie zeitnah per E-Mail oder Post.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Häufige Fragen
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen 
            zu unseren Reinigungsdienstleistungen.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {item.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {/* Answer */}
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ihre Frage ist nicht dabei?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Kein Problem! Kontaktieren Sie uns gerne direkt. Wir beantworten 
              alle Ihre Fragen persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Kontakt aufnehmen
              </button>
              <a 
                href="tel:+491234567890"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
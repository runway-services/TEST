import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Formular-Übermittlung stattfinden
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein kostenloses Angebot erhalten? 
            Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Wir sind für Sie da
            </h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">+49 123 456 7890</p>
                  <p className="text-sm text-gray-500">Mo-Fr 8:00-18:00, Sa 9:00-15:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                  <p className="text-gray-600">info@cleanpro-services.de</p>
                  <p className="text-sm text-gray-500">Antwort innerhalb von 24 Stunden</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    Musterstraße 123<br />
                    20359 Hamburg<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Servicezeiten</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Montag - Freitag: 7:00 - 19:00</p>
                    <p>Samstag: 8:00 - 16:00</p>
                    <p>Sonntag: Notfallservice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Unser Einzugsgebiet</h4>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Hamburg und Umgebung</p>
                  <p className="text-xs">bis zu 30 km Radius</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kostenloses Angebot anfordern
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  Nachricht gesendet!
                </h4>
                <p className="text-gray-600">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Max Mustermann"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="max@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="+49 123 456 7890"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Gewünschte Dienstleistung
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="haushaltsreinigung">Haushaltsreinigung</option>
                    <option value="bueroreinigung">Büroreinigung</option>
                    <option value="autoreinigung">Autoreinigung</option>
                    <option value="grundreinigung">Grundreinigung</option>
                    <option value="fensterreinigung">Fensterreinigung</option>
                    <option value="spezialreinigung">Spezialreinigung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 resize-vertical"
                    placeholder="Beschreiben Sie uns kurz Ihre Anforderungen..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kostenlose Anfrage senden
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer 
                  <button 
                    type="button" 
                    onClick={() => {/* Link zur Datenschutzerklärung */}}
                    className="text-blue-600 hover:underline ml-1"
                  >
                    Datenschutzerklärung
                  </button> zu.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Oder kontaktieren Sie uns direkt
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+491234567890"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Sofort anrufen
            </a>
            <a 
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              WhatsApp
            </a>
            <a 
              href="mailto:info@cleanpro-services.de"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
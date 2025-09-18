import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

const FixedContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Contact Options */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          />
          
          {/* Contact Options */}
          <div className="relative">
            <div className="absolute bottom-20 right-0 space-y-3">
              {/* WhatsApp Button */}
              <div className="flex items-center">
                <div className="bg-white rounded-l-full py-2 px-4 shadow-lg mr-2 opacity-0 animate-fade-in-left">
                  <span className="text-sm font-medium text-gray-800">WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/491234567890?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsdienstleistungen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>

              {/* Phone Button */}
              <div className="flex items-center">
                <div className="bg-white rounded-l-full py-2 px-4 shadow-lg mr-2 opacity-0 animate-fade-in-left" style={{animationDelay: '100ms'}}>
                  <span className="text-sm font-medium text-gray-800">Anrufen</span>
                </div>
                <a
                  href="tel:+491234567890"
                  className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>

              {/* Email Button */}
              <div className="flex items-center">
                <div className="bg-white rounded-l-full py-2 px-4 shadow-lg mr-2 opacity-0 animate-fade-in-left" style={{animationDelay: '200ms'}}>
                  <span className="text-sm font-medium text-gray-800">E-Mail</span>
                </div>
                <a
                  href="mailto:info@cleanpro-services.de?subject=Anfrage%20Reinigungsservice&body=Hallo%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsdienstleistungen%20und%20h%C3%A4tte%20gerne%20weitere%20Informationen.%0A%0AVielen%20Dank!"
                  className="bg-gray-600 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform ${
          isExpanded 
            ? 'bg-red-500 hover:bg-red-600 rotate-180' 
            : 'bg-green-600 hover:bg-green-700 hover:scale-110'
        } text-white`}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Pulse Animation Ring */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FixedContactButtons;
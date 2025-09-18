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
                <div className="bg-white rounded-l-full py-2 px-4 shadow-xl mr-2 opacity-0 animate-fade-in-left backdrop-blur-sm">
                  <span className="text-sm font-medium text-gray-800">WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/491234567890?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsdienstleistungen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <MessageCircle className="h-7 w-7" />
                </a>
              </div>

              {/* Phone Button */}
              <div className="flex items-center">
                <div className="bg-white rounded-l-full py-2 px-4 shadow-xl mr-2 opacity-0 animate-fade-in-left backdrop-blur-sm" style={{animationDelay: '100ms'}}>
                  <span className="text-sm font-medium text-gray-800">Anrufen</span>
                </div>
                <a
                  href="tel:+491234567890"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <Phone className="h-7 w-7" />
                </a>
              </div>

              {/* Email Button */}
              <div className="flex items-center">
                <div className="bg-white rounded-l-full py-2 px-4 shadow-xl mr-2 opacity-0 animate-fade-in-left backdrop-blur-sm" style={{animationDelay: '200ms'}}>
                  <span className="text-sm font-medium text-gray-800">E-Mail</span>
                </div>
                <a
                  href="mailto:info@cleanpro-services.de?subject=Anfrage%20Reinigungsservice&body=Hallo%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsdienstleistungen%20und%20h%C3%A4tte%20gerne%20weitere%20Informationen.%0A%0AVielen%20Dank!"
                  className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <Mail className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform ${
          isExpanded 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rotate-180 scale-110' 
            : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:scale-125 animate-pulse'
        } text-white`}
      >
        {isExpanded ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </button>

      {/* Pulse Animation Ring */}
      {!isExpanded && (
        <>
          <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-30"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" style={{animationDelay: '0.5s'}}></div>
        </>
      )}
    </div>
  );
};

export default FixedContactButtons;
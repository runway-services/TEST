import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    const consent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    // Hier würden normalerweise die entsprechenden Tracking-Skripte geladen
  };

  const acceptSelectedCookies = () => {
    const consent = {
      ...cookieSettings,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectOptionalCookies = () => {
    const consent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const toggleSetting = (setting: keyof typeof cookieSettings) => {
    if (setting === 'necessary') return; // Necessary cookies can't be disabled
    setCookieSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50 transform transition-transform duration-300">
        <div className="container mx-auto px-4 py-6">
          {!showSettings ? (
            /* Main Cookie Banner */
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Cookie className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Cookie-Einstellungen
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  Notwendige Cookies sind für die Grundfunktionen erforderlich. Mit Ihrer Zustimmung 
                  verwenden wir auch Cookies für Analyse und Marketing.
                </p>
                <div className="mt-3">
                  <button 
                    onClick={() => {/* Link zur Datenschutzerklärung */}}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Mehr erfahren in unserer Datenschutzerklärung
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </button>
                <button
                  onClick={rejectOptionalCookies}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            /* Cookie Settings Detail */
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Cookie-Einstellungen anpassen
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      IMMER AKTIV
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich 
                    und können nicht deaktiviert werden.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Funktionale Cookies</h4>
                    <button
                      onClick={() => toggleSetting('functional')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookieSettings.functional ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookieSettings.functional ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ermöglichen erweiterte Funktionen und Personalisierung 
                    der Website-Erfahrung.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Analyse Cookies</h4>
                    <button
                      onClick={() => toggleSetting('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookieSettings.analytics ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookieSettings.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Helfen uns zu verstehen, wie Besucher unsere Website nutzen, 
                    um sie zu verbessern.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                    <button
                      onClick={() => toggleSetting('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookieSettings.marketing ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookieSettings.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Werden verwendet, um relevante Werbung und Inhalte 
                    anzuzeigen und zu personalisieren.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={acceptSelectedCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Auswahl bestätigen
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
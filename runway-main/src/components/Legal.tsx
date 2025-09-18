import React from 'react';
import { FileText, Shield, Scale, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  page: 'impressum' | 'datenschutz' | 'agb' | null;
  onClose: () => void;
}

const Legal: React.FC<LegalPageProps> = ({ page, onClose }) => {
  if (!page) return null;

  const getPageContent = () => {
    switch (page) {
      case 'impressum':
        return {
          title: 'Impressum',
          icon: FileText,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>CleanPro Services GmbH</strong></p>
                  <p>Musterstraße 123<br />20359 Hamburg<br />Deutschland</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Vertreten durch</h3>
                <div className="text-gray-700">
                  <p>Geschäftsführer: Max Schmidt<br />
                  Geschäftsführerin: Maria Schmidt</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontakt</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Telefon: +49 (0) 123 456 7890</p>
                  <p>E-Mail: info@cleanpro-services.de</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Registereintrag</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Amtsgericht Hamburg</p>
                  <p>Registernummer: HRB 123456</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Umsatzsteuer-ID</h3>
                <div className="text-gray-700">
                  <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                  DE123456789</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">EU-Streitschlichtung</h3>
                <div className="text-gray-700">
                  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a></p>
                  <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                <div className="text-gray-700">
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </section>
            </div>
          )
        };

      case 'datenschutz':
        return {
          title: 'Datenschutzerklärung',
          icon: Shield,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h3>
                <h4 className="font-medium text-gray-900 mb-2">Allgemeine Hinweise</h4>
                <p className="text-gray-700 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                
                <h4 className="font-medium text-gray-900 mb-2">Datenerfassung auf dieser Website</h4>
                <p className="text-gray-700">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Hosting</h3>
                <p className="text-gray-700 mb-4">
                  Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
                </p>
                <h4 className="font-medium text-gray-900 mb-2">Externes Hosting</h4>
                <p className="text-gray-700">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                  Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <h4 className="font-medium text-gray-900 mb-2">Datenschutz</h4>
                <p className="text-gray-700 mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                
                <h4 className="font-medium text-gray-900 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                <p className="text-gray-700">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Datenerfassung auf dieser Website</h3>
                <h4 className="font-medium text-gray-900 mb-2">Cookies</h4>
                <p className="text-gray-700 mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies richten auf Ihrem 
                  Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser 
                  Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                
                <h4 className="font-medium text-gray-900 mb-2">Kontaktformular</h4>
                <p className="text-gray-700">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Ihre Rechte</h3>
                <div className="text-gray-700 space-y-2">
                  <p>Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                    <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                    <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                    <li>Datenübertragbarkeit zu verlangen</li>
                  </ul>
                </div>
              </section>
            </div>
          )
        };

      case 'agb':
        return {
          title: 'Allgemeine Geschäftsbedingungen (AGB)',
          icon: Scale,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 1 Geltungsbereich</h3>
                <p className="text-gray-700">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                  der CleanPro Services GmbH (nachfolgend „Auftragnehmer") und ihren Auftraggebern 
                  (nachfolgend „Auftraggeber") über Reinigungsdienstleistungen.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 2 Vertragsschluss</h3>
                <p className="text-gray-700 mb-3">
                  Der Vertrag kommt durch schriftliche oder mündliche Auftragserteilung und deren 
                  Bestätigung durch den Auftragnehmer zustande. Kostenvoranschläge sind unverbindlich, 
                  sofern nicht ausdrücklich als verbindlich bezeichnet.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 3 Leistungsumfang</h3>
                <p className="text-gray-700 mb-3">
                  Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen 
                  Auftragsbestätigung. Änderungen bedürfen der schriftlichen Vereinbarung.
                </p>
                <p className="text-gray-700">
                  Der Auftragnehmer stellt die erforderlichen Reinigungsmittel und -geräte zur Verfügung, 
                  sofern nicht anders vereinbart.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 4 Preise und Zahlungsbedingungen</h3>
                <p className="text-gray-700 mb-3">
                  Es gelten die zum Zeitpunkt der Auftragserteilung gültigen Preise. 
                  Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
                </p>
                <p className="text-gray-700">
                  Rechnungen sind binnen 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig. 
                  Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem 
                  Basiszinssatz berechnet.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 5 Ausführung der Arbeiten</h3>
                <p className="text-gray-700 mb-3">
                  Der Auftraggeber sorgt für den ungehinderten Zugang zu den zu reinigenden Räumen 
                  und Objekten. Termine werden nach Vereinbarung durchgeführt.
                </p>
                <p className="text-gray-700">
                  Der Auftraggeber hat wertvolle und zerbrechliche Gegenstände vor Arbeitsbeginn 
                  zu sichern oder zu entfernen.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 6 Haftung</h3>
                <p className="text-gray-700 mb-3">
                  Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. 
                  Die Haftung ist auf die Höhe der abgeschlossenen Betriebshaftpflichtversicherung beschränkt.
                </p>
                <p className="text-gray-700">
                  Schäden sind dem Auftragnehmer unverzüglich, spätestens binnen 24 Stunden, 
                  schriftlich anzuzeigen.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 7 Kündigung</h3>
                <p className="text-gray-700 mb-3">
                  Verträge über regelmäßige Reinigungsleistungen können von beiden Seiten mit 
                  einer Frist von 4 Wochen zum Monatsende gekündigt werden.
                </p>
                <p className="text-gray-700">
                  Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 8 Schlussbestimmungen</h3>
                <p className="text-gray-700 mb-3">
                  Es gilt das Recht der Bundesrepublik Deutschland. Erfüllungsort und Gerichtsstand 
                  ist Hamburg, sofern der Auftraggeber Kaufmann ist.
                </p>
                <p className="text-gray-700">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit 
                  der übrigen Bestimmungen unberührt.
                </p>
              </section>
            </div>
          )
        };

      default:
        return null;
    }
  };

  const pageData = getPageContent();
  if (!pageData) return null;

  const Icon = pageData.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">{pageData.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="prose prose-gray max-w-none">
            {pageData.content}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 rounded-b-2xl border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Stand: Januar 2025 | CleanPro Services GmbH
            </p>
            <button 
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
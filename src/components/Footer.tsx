import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900/30 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white">
                    <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    <polygon points="14,2 14,10 22,6" fill="currentColor" opacity="0.8"/>
                  </svg>
                </div>
              </div>
              <span className="text-3xl font-bold">TalkLess</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Die intelligente Software für effizienten Telefonvertrieb und Support.
              Weniger reden, mehr erreichen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group w-12 h-12 bg-dark-700/50 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-brand-600 transition-all duration-300 border border-dark-600/50 hover:border-brand-500">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group w-12 h-12 bg-dark-700/50 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-dark-600/50 hover:border-purple-500">
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-300">Produkt</h4>
            <ul className="space-y-3">
              {['Features', 'Preise', 'Demo', 'Dokumentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-all duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-300">Kontakt</h4>
            <div className="space-y-4">
              <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-10 h-10 bg-dark-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-600 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@talkless.de</span>
              </div>
              <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-10 h-10 bg-dark-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-600 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+49 (0) 123 456789</span>
              </div>
              <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-10 h-10 bg-dark-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-700 transition-colors duration-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Berlin, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 TalkLess. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              {['Datenschutz', 'Impressum', 'AGB'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-brand-500 to-purple-600 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-gradient-shift bg-300%"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-3">
                Bereit für effizientere Telefonate?
              </h3>
              <p className="text-gray-200 text-lg">
                Starten Sie noch heute kostenlos und erleben Sie den Unterschied.
              </p>
            </div>
            <button className="group bg-white text-brand-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                Kostenlos registrieren
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

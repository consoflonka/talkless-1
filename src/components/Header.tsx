import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-2xl border-b border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white">
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                  <polygon
                    points="14,2 14,10 22,6"
                    fill="currentColor"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
            <span
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              } group-hover:text-brand-400`}
            >
              TalkLess
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Problem', id: 'problem' },
              { name: 'Features', id: 'features' },
              { name: 'Zielgruppe', id: 'zielgruppe' },
              { name: 'Preise', id: 'pricing' },
              { name: 'Kontakt', id: 'kontakt' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isScrolled
                    ? 'text-gray-300 hover:text-brand-400'
                    : 'text-white hover:text-brand-300'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button className="relative overflow-hidden bg-gradient-to-r from-brand-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
              <span className="relative z-10">Demo buchen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </nav>

          <button
            className={`md:hidden transition-all duration-300 p-2 rounded-lg ${
              isScrolled
                ? 'text-white hover:bg-dark-800'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-dark-800/95 backdrop-blur-md border-t border-dark-700 py-4 rounded-b-xl shadow-xl">
            {[
              { name: 'Problem', id: 'problem' },
              { name: 'Features', id: 'features' },
              { name: 'Zielgruppe', id: 'zielgruppe' },
              { name: 'Preise', id: 'pricing' },
              { name: 'Kontakt', id: 'kontakt' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-gray-300 hover:bg-brand-500/20 hover:text-brand-400 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 pt-2">
              <button className="w-full bg-gradient-to-r from-brand-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Demo buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
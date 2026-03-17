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
          <div className="flex items-center group">
            <img
              src={`${import.meta.env.BASE_URL}logo-full.png`}
              alt="TalkLess"
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
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
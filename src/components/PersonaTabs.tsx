import React, { useState } from 'react';
import { Users, TrendingUp, Shield, Zap, List, BarChart3, CheckCircle, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

interface PersonaPanel {
  title: string;
  description: string;
  benefits: string[];
  features: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
  carousel: Array<{
    imgSrc: string;
    imgAlt: string;
    title: string;
  }>;
  cta: {
    label: string;
    href: string;
  };
}

interface PersonaTabsProps {
  agent: PersonaPanel;
  manager: PersonaPanel;
}

const PersonaTabs: React.FC<PersonaTabsProps> = ({ agent, manager }) => {
  const [activeTab, setActiveTab] = useState<'agent' | 'manager'>('agent');
  const [agentSlide, setAgentSlide] = useState(0);
  const [managerSlide, setManagerSlide] = useState(0);

  const handleTabClick = (tab: 'agent' | 'manager') => {
    setActiveTab(tab);
  };

  const scrollToAnchor = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = (persona: 'agent' | 'manager') => {
    if (persona === 'agent') {
      setAgentSlide((prev) => (prev + 1) % agent.carousel.length);
    } else {
      setManagerSlide((prev) => (prev + 1) % manager.carousel.length);
    }
  };

  const prevSlide = (persona: 'agent' | 'manager') => {
    if (persona === 'agent') {
      setAgentSlide((prev) => (prev - 1 + agent.carousel.length) % agent.carousel.length);
    } else {
      setManagerSlide((prev) => (prev - 1 + manager.carousel.length) % manager.carousel.length);
    }
  };

  const goToSlide = (persona: 'agent' | 'manager', index: number) => {
    if (persona === 'agent') {
      setAgentSlide(index);
    } else {
      setManagerSlide(index);
    }
  };

  const currentPanel = activeTab === 'agent' ? agent : manager;
  const currentSlide = activeTab === 'agent' ? agentSlide : managerSlide;

  return (
    <section className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/6 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Für wen ist TalkLess gemacht?
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400 block">
              Ihr Nutzen im Fokus
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie, wie TalkLess Mitarbeitende entlastet und Managern bessere Kontrolle gibt
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-700/50 backdrop-blur-md rounded-2xl p-2 border border-dark-600/50">
            <div className="flex" role="tablist" aria-label="Persona Auswahl">
              <button
                role="tab"
                aria-selected={activeTab === 'agent'}
                aria-controls="agent-panel"
                onClick={() => handleTabClick('agent')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  activeTab === 'agent'
                    ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-dark-600/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Für Mitarbeitende</span>
                </div>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'manager'}
                aria-controls="manager-panel"
                onClick={() => handleTabClick('manager')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  activeTab === 'manager'
                    ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-dark-600/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6" />
                  <span>Für Manager:innen</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div
          role="tabpanel"
          id={`${activeTab}-panel`}
          aria-labelledby={`${activeTab}-tab`}
          className="transition-all duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-white mb-6">
                {currentPanel.title}
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {currentPanel.description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-brand-300 mb-4">Ihre Vorteile:</h4>
                <ul className="space-y-3">
                  {currentPanel.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <div className="w-6 h-6 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mini Features */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-purple-300 mb-4">Wichtigste Features:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {currentPanel.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToAnchor(currentPanel.cta.href)}
                className="self-start bg-transparent border-2 border-brand-400/50 text-brand-300 px-6 py-3 rounded-xl font-bold hover:bg-brand-500/20 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                {currentPanel.cta.label}
              </button>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-3xl bg-dark-600/50 shadow-2xl border border-dark-600/50">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {currentPanel.carousel.map((slide, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="aspect-[4/3] bg-gradient-to-br from-dark-600 to-dark-700">
                          <img
                            src={slide.imgSrc}
                            alt={slide.imgAlt}
                            className="w-full h-full object-cover opacity-90"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  {currentPanel.carousel.length > 1 && (
                    <>
                      <button
                        onClick={() => prevSlide(activeTab)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-800/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-dark-700/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Vorheriges Bild"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => nextSlide(activeTab)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-800/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-dark-700/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Nächstes Bild"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Slide Indicators */}
                  {currentPanel.carousel.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {currentPanel.carousel.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(activeTab, index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                            index === currentSlide
                              ? 'bg-brand-400 scale-125'
                              : 'bg-gray-500 hover:bg-gray-400'
                          }`}
                          aria-label={`Gehe zu Bild ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image Title Overlay */}
                  <div className="absolute bottom-8 left-6 right-6">
                    <div className="bg-dark-900/80 backdrop-blur-md rounded-xl p-4 border border-dark-600/50">
                      <h4 className="text-white font-bold text-lg">
                        {currentPanel.carousel[currentSlide]?.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-brand-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                  {activeTab === 'agent' ? 'Für den Alltag' : 'Für die Steuerung'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaTabs;

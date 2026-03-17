import React, { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Starter',
      price: 'Kostenlos',
      period: '',
      description: 'Perfekt zum Ausprobieren',
      features: [
        '5 Audio-Slots',
        'Basis-Kategorien',
        'Hotkey-Steuerung',
        'Community Support',
      ],
      cta: 'Jetzt starten',
      popular: false,
      icon: Zap,
      gradient: 'from-gray-600 to-gray-700',
      bgGradient: 'from-dark-700/80 to-dark-600/80',
    },
    {
      name: 'Professional',
      price: '19€',
      period: '/Monat pro Nutzer',
      description: 'Für wachsende Teams',
      features: [
        'Unbegrenzte Audio-Slots',
        'Erweiterte Kategorien',
        'Text-to-Speech',
        'Usage Analytics',
        'Priority Support',
        'Team-Verwaltung',
      ],
      cta: '14 Tage kostenlos testen',
      popular: true,
      icon: Star,
      gradient: 'from-brand-500 to-purple-600',
      bgGradient: 'from-brand-900/30 to-purple-900/30',
    },
    {
      name: 'Enterprise',
      price: 'Individuell',
      period: '',
      description: 'Für große Organisationen',
      features: [
        'Alles aus Professional',
        'Dedizierte Einrichtung',
        'Custom Integrationen',
        'SLA & Priority Support',
        'Compliance Features',
        'On-Premise Option',
      ],
      cta: 'Kontakt aufnehmen',
      popular: false,
      icon: Crown,
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-900/30 to-dark-700/80',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 bg-gradient-to-br from-dark-800 via-dark-900 to-purple-900/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 font-semibold">
              Transparent & Fair
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wählen Sie den Plan,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
              {' '}
              der zu Ihrem Team passt
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Jederzeit kündbar, keine versteckten Kosten. Starten Sie kostenlos
            und skalieren Sie nach Bedarf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 animate-scale-in ${
                plan.popular ? 'md:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center shadow-xl animate-glow">
                    <Star className="w-4 h-4 mr-2" />
                    Beliebtester Plan
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  plan.gradient
                } rounded-3xl opacity-0 transition-opacity duration-500 blur-xl ${
                  hoveredPlan === index ? 'opacity-20' : ''
                }`}
              ></div>

              <div
                className={`relative bg-gradient-to-br ${
                  plan.bgGradient
                } backdrop-blur-md rounded-3xl shadow-xl p-8 transition-all duration-500 transform border ${
                  plan.popular
                    ? 'border-brand-500/50 shadow-2xl shadow-brand-500/20'
                    : 'border-dark-600/50 hover:border-brand-500/50'
                } ${hoveredPlan === index ? '-translate-y-4 shadow-2xl' : ''}`}
              >
                {/* Plan Icon */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <plan.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400 text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center transition-all duration-300 ${
                        hoveredPlan === index ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-200 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl hover:shadow-brand-500/25`
                      : 'bg-gradient-to-r from-dark-600 to-dark-700 text-white hover:from-brand-500/20 hover:to-purple-500/20 hover:text-brand-300 border border-dark-500'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-dark-700/50 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-dark-600/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">
                  Sofort einsatzbereit
                </h4>
                <p className="text-gray-400">Setup in unter 5 Minuten</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">
                  Keine Vertragsbindung
                </h4>
                <p className="text-gray-400">Monatlich kündbar</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">
                  30 Tage Geld-zurück
                </h4>
                <p className="text-gray-400">Risikofrei testen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

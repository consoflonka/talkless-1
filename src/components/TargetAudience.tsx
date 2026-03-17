import React from 'react';
import { Users, Headphones, Briefcase, Globe, Phone } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <Phone className="h-12 w-12 text-green-400" />,
      title: 'Sales Teams & Call Center',
      subtitle: 'Outbound & Inbound Call Center',
      description:
        'Mehr Abschlüsse mit weniger Aufwand: TalkLess sorgt für klare, konsistente und professionelle Kommunikation in jedem Gespräch.',
      benefits: [
        'Höhere Conversion Rate',
        'Einheitliche Gesprächsqualität',
        'Schnellere Einarbeitung neuer Teammitglieder',
      ],
    },
    {
      icon: <Headphones className="h-12 w-12 text-blue-400" />,
      title: 'Customer Support & Hotlines',
      subtitle: 'IT-Support und Service-Hotlines',
      description:
        'Schnell helfen statt ständig wiederholen: Mit TalkLess stehen geprüfte Antworten jederzeit bereit – für entlastete Teams und zufriedene Kundschaft.',
      benefits: [
        'Schnellere Problemlösung',
        'Konsistente Hilfe für Kundschaft',
        'Weniger Stress im Support-Team',
      ],
    },
  ];

  return (
    <section id="zielgruppe" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Für wen ist TalkLess gemacht?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            TalkLess ist die Lösung für alle, die tagtäglich viele Telefonate führen – vom spezialisierten Sales-Team bis zum Support-Center.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-10 rounded-xl border border-gray-600/30 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                    {audience.title}
                  </h3>
                  <p
                    className={`font-medium mb-4 ${
                      index === 0 ? 'text-green-400' : 'text-blue-400'
                    }`}
                  >
                    {audience.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {audience.description}
                  </p>

                  <ul className="space-y-2">
                    {audience.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

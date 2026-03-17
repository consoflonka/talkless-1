import React from 'react';
import {
  Clock,
  Repeat,
  TrendingDown,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Problem = () => {
  const problems = [
    {
      icon: <Repeat className="h-8 w-8 text-red-400" />,
      title: 'Ständige Wiederholungen',
      description:
        'Immer wieder dieselben Begrüßungen, Erklärungen und Standardantworten sprechen.',
    },
    {
      icon: <Clock className="h-8 w-8 text-red-400" />,
      title: 'Zeitverlust',
      description:
        'Wertvolle Minuten gehen für Routinephrasen verloren, anstatt für echte Lösungen oder Kundengespräche genutzt zu werden.',
    },
    {
      icon: <Volume2 className="h-8 w-8 text-red-400" />,
      title: 'Stimmermüdung',
      description:
        'Monotone Wiederholungen belasten Stimme und Konzentration, vor allem bei hohem Call-Volumen.',
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-red-400" />,
      title: 'Uneinheitliche Qualität',
      description:
        'Abweichungen bei wichtigen Formulierungen führen zu Missverständnissen, Fehlern oder sogar rechtlichen Risiken.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Das Problem in Sales und Support
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Mitarbeitende verschwenden täglich wertvolle Zeit mit
            Routinephrasen, während Qualität und Konsistenz der Kommunikation
            leiden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-left p-6 rounded-xl bg-red-500/10 border border-red-500/20 hover:border-red-400/40 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105 animate-fadeInUp group"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="mb-4 group-hover:animate-bounce flex justify-start">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-400 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

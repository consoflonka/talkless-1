import React from 'react';
import {
  Mic,
  Zap,
  List,
  BarChart3,
  Brain,
  FileText,
  Settings,
  PenTool,
  Phone,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-12 w-12 text-brand-400" />,
      title: 'Audio Bibliothek & Wiedergabe',
      description:
        'Standardantworten aufnehmen, zentral speichern und per Klick oder Hotkey im Gespräch abspielen.',
    },
    {
      icon: <List className="h-12 w-12 text-purple-400" />,
      title: 'Smart Playlists & Call Flows',
      description:
        'Gesprächsleitfäden als Playlists nutzen für klare Struktur, sichere Abläufe und Compliance.',
    },
    {
      icon: <FileText className="h-12 w-12 text-brand-300" />,
      title: 'Teleprompter Funktion',
      description:
        'Skripte beim Einsprechen nutzen für einheitliche und fehlerfreie Audios.',
    },
    {
      icon: <Settings className="h-12 w-12 text-purple-300" />,
      title: 'Audio Optimierung & Bearbeitung',
      description:
        'Lautstärke angleichen, Clips schneiden und anpassen für konsistente Qualität.',
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-brand-500" />,
      title: 'Team Insights & Performance',
      description:
        'Analysen zeigen, welche Formulierungen wirken und verbessern so Training und Ergebnisse.',
    },
    {
      icon: <Brain className="h-12 w-12 text-orange-400" />,
      title: 'KI Analyse & Empfehlungen',
      description:
        'Gespräche automatisch auswerten lassen und konkrete Verbesserungsvorschläge erhalten.',
    },
    {
      icon: <PenTool className="h-12 w-12 text-purple-500" />,
      title: 'Transkription & KI Optimierung',
      description:
        'Gesprochenes transkribieren, von der KI optimieren lassen und daraus neue Audios erstellen.',
    },
    {
      icon: <Phone className="h-12 w-12 text-brand-600" />,
      title: 'Universelle Kompatibilität',
      description:
        'Kompatibel mit allen Telefon- und Kommunikationslösungen. Flexibel, unabhängig und sofort nutzbar.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
           TalkLess in 8 Funktionen erklärt
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Reduzieren Sie Routinearbeit, steigern Sie Effizienz und sichern Sie gleichbleibende Qualität.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-brand-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-500/10 animate-fadeInUp"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp animation-delay-1000">
          <button className="bg-gradient-to-r from-brand-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-500/25">
            Alle Funktionen entdecken
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

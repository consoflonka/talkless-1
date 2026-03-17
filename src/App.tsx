import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonaTabs from './components/PersonaTabs';
import Problem from './components/Problem';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Mic, Settings, CheckCircle, TrendingUp, BarChart3, Zap, List } from 'lucide-react';

function App() {
  // Persona Tabs Data
  const agentPanel = {
    title: 'Im Alltag entlastet',
    description: 'Spiele Standardphrasen per Hotkey ab und konzentriere dich auf echte Gespräche. Weniger Wiederholung, weniger Stimmverschleiß, mehr Flow.',
    benefits: [
      'Sofortige Wiedergabe im Gespräch',
      'Klare Struktur mit Playlists',
      'Sicherheit bei Formulierungen'
    ],
    features: [
      { icon: <Zap className="w-4 h-4 text-brand-400" />, name: 'Hotkeys & Favoriten' },
      { icon: <List className="w-4 h-4 text-brand-400" />, name: 'Smart Playlists' },
      { icon: <Mic className="w-4 h-4 text-brand-400" />, name: 'Teleprompter' },
      { icon: <Settings className="w-4 h-4 text-brand-400" />, name: 'Lautstärke-Anpassung' }
    ],
    carousel: [
      {
        imgSrc: '/Home.png',
        imgAlt: 'TalkLess Hauptansicht mit Audio-Bibliothek',
        title: 'Übersichtliche Audio-Bibliothek'
      },
      {
        imgSrc: '/Audio play back engine-1.png',
        imgAlt: 'Live-Call Interface mit Hotkey-Steuerung',
        title: 'Live-Call Interface'
      },
      {
        imgSrc: '/Sounboard record audio-3.png',
        imgAlt: 'Audio-Aufnahme mit Teleprompter-Funktion',
        title: 'Audio-Aufnahme & Teleprompter'
      }
    ],
    cta: {
      label: 'So arbeitet TalkLess im Alltag',
      href: '#features'
    }
  };

  const managerPanel = {
    title: 'Qualität messbar steuern',
    description: 'Sichern Sie einheitliche, compliance-konforme Kommunikation. Nutzen Sie Insights für Training, Onboarding und bessere KPIs.',
    benefits: [
      'Compliance-gesicherte Aussagen',
      'Einheitliche Gesprächsqualität',
      'Schnelleres Onboarding'
    ],
    features: [
      { icon: <BarChart3 className="w-4 h-4 text-brand-400" />, name: 'Team Insights' },
      { icon: <CheckCircle className="w-4 h-4 text-brand-400" />, name: 'Freigabe-Workflows' },
      { icon: <TrendingUp className="w-4 h-4 text-brand-400" />, name: 'Performance KPIs' },
      { icon: <Settings className="w-4 h-4 text-brand-400" />, name: 'Rollen & Rechte' }
    ],
    carousel: [
      {
        imgSrc: '/Analytics & Reporting.png',
        imgAlt: 'Analytics Dashboard mit Team Performance Metriken',
        title: 'Team Performance Analytics'
      },
      {
        imgSrc: '/Compliance & Logs-4.png',
        imgAlt: 'Compliance Dashboard mit Audit-Logs',
        title: 'Compliance & Audit-Logs'
      },
      {
        imgSrc: '/Home.png',
        imgAlt: 'Zentrale Verwaltung der Audio-Bibliothek',
        title: 'Zentrale Audio-Verwaltung'
      }
    ],
    cta: {
      label: 'Qualität & Compliance steuern',
      href: '#features'
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <Problem />
      <PersonaTabs agent={agentPanel} manager={managerPanel} />
      <Features />
      <TargetAudience />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
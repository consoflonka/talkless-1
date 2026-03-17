import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // API-Aufruf für Kontaktformular mit CORS-Handling
      const response = await fetch('https://n8n.srv949930.hstgr.cloud/webhook-test/f86eec14-2c9b-4b7a-b861-403e42bdaf48', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formData),
      });

      // Prüfe ob Response OK ist
      if (response.ok) {
        // Versuche JSON zu parsen, falls vorhanden
        let result;
        try {
          result = await response.json();
        } catch {
          // Kein JSON, aber Request war erfolgreich
          result = { success: true };
        }
        
        // Erfolg
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      
      // Spezifische Fehlermeldungen
      let errorMessage = 'Es gab einen Fehler beim Senden Ihrer Nachricht.';
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage = 'Verbindungsfehler: Bitte prüfen Sie Ihre Internetverbindung oder versuchen Sie es später erneut.';
      } else if (error instanceof Error && error.message.includes('404')) {
        errorMessage = 'Der Service ist momentan nicht verfügbar. Bitte kontaktieren Sie uns direkt per E-Mail.';
      }
      
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400 block">
              Kontaktieren Sie uns
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam besprechen, wie TalkLess Ihr Team effizienter macht.
            Vereinbaren Sie eine kostenlose Demo oder stellen Sie Ihre Fragen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-dark-700/50 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-dark-600/50 hover:border-brand-500/50 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8">
                Sprechen wir über Ihre Ziele
              </h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Unser Team steht bereit, um Ihnen zu zeigen, wie TalkLess Ihre 
                Telefonkommunikation revolutionieren kann. Kostenlose Beratung 
                und Demo inklusive.
              </p>

              <div className="space-y-6">
                <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">E-Mail</p>
                    <p className="text-brand-400">hello@talkless.de</p>
                  </div>
                </div>

                <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Telefon</p>
                    <p className="text-purple-400">+49 (0) 123 456789</p>
                  </div>
                </div>

                <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Standort</p>
                    <p className="text-blue-400">Berlin, Deutschland</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-brand-500/10 to-purple-500/10 rounded-2xl border border-brand-500/20">
                <h4 className="font-bold text-white mb-3 text-lg">Schnelle Antwort garantiert</h4>
                <p className="text-gray-300 text-sm">
                  Wir antworten innerhalb von 24 Stunden auf alle Anfragen. 
                  Für dringende Fälle rufen Sie uns direkt an.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-dark-700/50 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-dark-600/50 hover:border-brand-500/50 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-dark-600/50 border border-dark-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 group-hover:border-brand-500/30"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-dark-600/50 border border-dark-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 group-hover:border-brand-500/30"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-3">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-dark-600/50 border border-dark-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 group-hover:border-brand-500/30"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-dark-600/50 border border-dark-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 group-hover:border-brand-500/30"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-dark-600/50 border border-dark-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 group-hover:border-brand-500/30 resize-none"
                    placeholder="Erzählen Sie uns von Ihren Anforderungen und wie wir Ihnen helfen können..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-brand-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 animate-fadeInUp">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    <span>Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 animate-fadeInUp">
                    <AlertCircle className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-semibold mb-1">Nachricht konnte nicht gesendet werden</p>
                      <p className="text-sm">Bitte kontaktieren Sie uns direkt per E-Mail: hello@talkless.de</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
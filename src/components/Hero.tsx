import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Sparkles, Phone, Zap, Mic, TrendingUp, Shield, Clock, Users, CheckCircle, Target } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [isPhoneHangingUp, setIsPhoneHangingUp] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  const slogans = [
    { text: 'Talk Less, Sell More.', icon: TrendingUp },
    { text: 'Talk Less, Stay Compliant.', icon: Shield },
    { text: 'Talk Less, Onboard Faster.', icon: Users },
    { text: 'Talk Less, Save Energy.', icon: Clock },
    { text: 'Talk Less, Work Smarter.', icon: Zap },
    { text: 'Talk Less, Ensure Quality.', icon: CheckCircle },
    { text: 'Talk Less, Close More Deals.', icon: Target },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 15,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start hang-up animation
      setIsPhoneHangingUp(true);

      // Change slogan after a short delay
      setTimeout(() => {
      setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
        setIsPhoneHangingUp(false);
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-purple-900/30 to-gray-900 holographic"></div>

        {/* Floating particles */}
        <div className="floating-particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle animate-float-particle"
              style={{
                left: `${particle.x}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Morphing background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 morphing-blob animate-morph blur-3xl"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 morphing-blob animate-morph blur-2xl"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-400/20 morphing-blob animate-morph blur-xl"
          style={{ animationDelay: '4s' }}
        ></div>

        {/* Audio waves background */}
        <div className="absolute inset-0 overflow-hidden opacity-70">
          <div className="absolute right-16 top-1/3 flex items-end space-x-2">
            <div className="w-3 h-48 bg-gradient-to-t from-brand-400/40 to-brand-400/10 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-3 h-80 bg-gradient-to-t from-brand-400/40 to-brand-400/10 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-64 bg-gradient-to-t from-brand-400/40 to-brand-400/10 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-3 h-96 bg-gradient-to-t from-brand-400/40 to-brand-400/10 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-3 h-40 bg-gradient-to-t from-brand-400/40 to-brand-400/10 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-72 bg-gradient-to-t from-brand-400/40 to-brand-400/10 rounded-full animate-wave-delayed-2 origin-bottom"></div>
          </div>

          <div className="absolute left-1/4 top-1/4 flex items-end space-x-2">
            <div className="w-3 h-56 bg-gradient-to-t from-purple-400/40 to-purple-400/10 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-3 h-72 bg-gradient-to-t from-purple-400/40 to-purple-400/10 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-40 bg-gradient-to-t from-purple-400/40 to-purple-400/10 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-3 h-88 bg-gradient-to-t from-purple-400/40 to-purple-400/10 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-3 h-64 bg-gradient-to-t from-purple-400/40 to-purple-400/10 rounded-full animate-wave origin-bottom"></div>
          </div>

          <div className="absolute right-1/3 top-1/3 flex items-end space-x-2">
            <div className="w-3 h-32 bg-gradient-to-t from-brand-500/40 to-brand-500/10 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-64 bg-gradient-to-t from-brand-500/40 to-brand-500/10 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-3 h-48 bg-gradient-to-t from-brand-500/40 to-brand-500/10 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-3 h-72 bg-gradient-to-t from-brand-500/40 to-brand-500/10 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-56 bg-gradient-to-t from-brand-500/40 to-brand-500/10 rounded-full animate-wave-delayed origin-bottom"></div>
          </div>

          {/* Additional audio waves for more presence */}
          <div className="absolute left-1/2 top-1/6 flex items-end space-x-2">
            <div className="w-3 h-80 bg-gradient-to-t from-purple-400/30 to-purple-400/5 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-96 bg-gradient-to-t from-purple-400/30 to-purple-400/5 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-3 h-64 bg-gradient-to-t from-purple-400/30 to-purple-400/5 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-3 h-88 bg-gradient-to-t from-purple-400/30 to-purple-400/5 rounded-full animate-wave-delayed-3 origin-bottom"></div>
          </div>

          <div className="absolute right-1/4 top-1/5 flex items-end space-x-2">
            <div className="w-3 h-72 bg-gradient-to-t from-brand-400/30 to-brand-400/5 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-3 h-80 bg-gradient-to-t from-brand-400/30 to-brand-400/5 rounded-full animate-wave origin-bottom"></div>
            <div className="w-3 h-56 bg-gradient-to-t from-brand-400/30 to-brand-400/5 rounded-full animate-wave-delayed-2 origin-bottom"></div>
          </div>

          {/* Additional wave groups for more dynamic effect */}
          <div className="absolute left-16 top-1/3 flex items-end space-x-1">
            <div className="w-2 h-32 bg-gradient-to-t from-purple-500/30 to-purple-500/5 rounded-full animate-wave-delayed-3 origin-bottom"></div>
            <div className="w-2 h-48 bg-gradient-to-t from-purple-500/30 to-purple-500/5 rounded-full animate-wave origin-bottom"></div>
            <div className="w-2 h-24 bg-gradient-to-t from-purple-500/30 to-purple-500/5 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-2 h-64 bg-gradient-to-t from-purple-500/30 to-purple-500/5 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-2 h-40 bg-gradient-to-t from-purple-500/30 to-purple-500/5 rounded-full animate-wave-delayed-3 origin-bottom"></div>
          </div>

          <div className="absolute right-8 top-1/4 flex items-end space-x-1">
            <div className="w-2 h-56 bg-gradient-to-t from-brand-500/25 to-brand-500/5 rounded-full animate-wave origin-bottom"></div>
            <div className="w-2 h-32 bg-gradient-to-t from-brand-500/25 to-brand-500/5 rounded-full animate-wave-delayed-2 origin-bottom"></div>
            <div className="w-2 h-72 bg-gradient-to-t from-brand-500/25 to-brand-500/5 rounded-full animate-wave-delayed origin-bottom"></div>
            <div className="w-2 h-48 bg-gradient-to-t from-brand-500/25 to-brand-500/5 rounded-full animate-wave-delayed-3 origin-bottom"></div>
          </div>
        </div>

        {/* Interactive mouse follower */}
        <div
          className="absolute w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse transition-all duration-300"
          style={{
            left: mousePosition.x / 8,
            top: mousePosition.y / 8,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 animate-fadeInUp">
            <div className="inline-flex items-center justify-center space-x-3 bg-gray-800/50 backdrop-blur-md border holographic-border rounded-full px-6 py-3 mb-8 hover:scale-105 transition-all duration-300 w-80">
              <div className="relative">
                <Phone className={`h-5 w-5 text-brand-400 transition-transform duration-500 ${
                  isPhoneHangingUp ? 'rotate-180 scale-95' : 'rotate-0 scale-100'
                }`} />
                <div className="absolute inset-0 bg-brand-400/30 rounded-full blur-md animate-ping"></div>
              </div>
              <span
                key={currentSloganIndex}
                className="text-brand-300 text-sm font-medium neon-text animate-fadeInUp flex items-center space-x-2"
              >
                <span>{slogans[currentSloganIndex].text}</span>
                {React.createElement(slogans[currentSloganIndex].icon, { className: "h-4 w-4 animate-bounce" })}
              </span>
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-200 glitch"
            data-text="Talk Less, Sell More."
          >
            <span className="block mb-2">Talk Less,</span>
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-purple-400 bg-clip-text text-transparent block liquid neon-text">
              Sell More.
            </span>
          </h1>

          <div className="mb-8 animate-fadeInUp animation-delay-300">
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
               TalkLess macht Telefonate effizienter mit vorbereiteten Audios auf Knopfdruck.
                Wir machen Calls kürzer, konsistenter und rechtssicher – egal ob mit 5 oder 500 Mitarbeitenden.
              </span>
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto animate-fadeInUp animation-delay-800">
            <div className="holographic-border bg-gray-800/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 card-3d">
              <div className="aspect-video bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated tech grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-brand-400/20 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="text-center relative z-10">
                  <div className="relative mb-6">
                    <img
                      src={`${import.meta.env.BASE_URL}logo-stacked.png`}
                      alt="TalkLess"
                      className="h-40 w-auto mx-auto group-hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                    />
                  </div>
                  <p className="text-white text-xl font-bold mb-2 neon-text">
                    Interactive Product Demo
                  </p>
                  <p className="text-brand-300 text-sm">
                    Erleben Sie TalkLess in Aktion
                  </p>
                </div>

                {/* Holographic border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-500/80 rounded-xl transition-all duration-500 holographic-border"></div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fadeInUp animation-delay-1000">
            <button className="group relative bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-brand-500/50 liquid overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="h-5 w-5 group-hover:animate-spin" />
                <span>Demo starten</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <button className="group relative bg-transparent border-2 border-brand-400/50 text-brand-300 px-8 py-4 rounded-xl font-bold text-lg hover:scale-110 transition-all duration-300 holographic-border hover:text-white overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Phone className="h-5 w-5 group-hover:animate-bounce" />
                <span>Kostenlos testen</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-purple-600/20 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
            </button>
          </div>

          {/* Stats section with holographic effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16 max-w-7xl mx-auto animate-fadeInUp animation-delay-1200">
            <div className="text-center group">
              <div className="holographic-border bg-gray-800/30 backdrop-blur-md rounded-xl p-6 card-3d hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text mb-2">
                  –70%
                </div>
                <p className="text-gray-300 text-sm font-medium mb-2">Weniger aktive Redezeit pro Call</p>
                <p className="text-gray-400 text-xs">Routinen übernimmt TalkLess – mehr Energie für echte Gespräche.</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="holographic-border bg-gray-800/30 backdrop-blur-md rounded-xl p-6 card-3d hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent neon-text mb-2">
                  3x
                </div>
                <p className="text-gray-300 text-sm font-medium mb-2">Mehr Gespräche pro Stunde</p>
                <p className="text-gray-400 text-xs">Kürzere Calls durch Standard-Audios = höhere Schlagzahl.</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="holographic-border bg-gray-800/30 backdrop-blur-md rounded-xl p-6 card-3d hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-brand-400 bg-clip-text text-transparent neon-text mb-2">
                  99%
                </div>
                <p className="text-gray-300 text-sm font-medium mb-2">Konsistente & compliance-sichere Kommunikation</p>
                <p className="text-gray-400 text-xs">Keine Abweichungen bei wichtigen Formulierungen.</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="holographic-border bg-gray-800/30 backdrop-blur-md rounded-xl p-6 card-3d hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-brand-400 bg-clip-text text-transparent neon-text mb-2">
                  +25%
                </div>
                <p className="text-gray-300 text-sm font-medium mb-2">Höhere Conversion Rate</p>
                <p className="text-gray-400 text-xs">Mehr Abschlüsse durch klare, präzise Kommunikation.</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="holographic-border bg-gray-800/30 backdrop-blur-md rounded-xl p-6 card-3d hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-300 to-purple-300 bg-clip-text text-transparent neon-text mb-2">
                  50%
                </div>
                <p className="text-gray-300 text-sm font-medium mb-2">Schnelleres Onboarding neuer Teammitglieder</p>
                <p className="text-gray-400 text-xs">Sofort Zugriff auf geprüfte Standardphrasen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

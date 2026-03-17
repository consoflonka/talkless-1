import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Zap, List, BarChart3, Globe } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  imgSrc: string;
  imgAlt: string;
  icon: React.ReactNode;
}

interface ProductCarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ slides, autoPlay = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-900 to-purple-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            TalkLess im Überblick
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400 block">
              So funktioniert es
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die Kernfunktionen, die Ihre Telefonate effizienter machen
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div 
            className="relative overflow-hidden rounded-3xl bg-dark-700/50 backdrop-blur-md border border-dark-600/50 shadow-2xl"
            role="region"
            aria-roledescription="carousel"
            aria-label="Produkt-Features Karussell"
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className="w-full flex-shrink-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} von ${slides.length}: ${slide.title}`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 p-12">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                          {slide.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-gray-300 text-lg">
                            {slide.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {slide.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center text-gray-200">
                            <div className="w-2 h-2 bg-brand-400 rounded-full mr-4 flex-shrink-0"></div>
                            <span className="font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] bg-gradient-to-br from-dark-600 to-dark-700 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={slide.imgSrc}
                          alt={slide.imgAlt}
                          className="w-full h-full object-cover opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-dark-800/90 backdrop-blur-sm text-white p-4 rounded-full hover:bg-dark-700/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Vorheriges Slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-dark-800/90 backdrop-blur-sm text-white p-4 rounded-full hover:bg-dark-700/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Nächstes Slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    index === currentSlide
                      ? 'bg-brand-400 scale-125'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Gehe zu Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToFeatures}
            className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Alle Funktionen im Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
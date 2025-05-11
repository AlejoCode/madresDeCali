import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative py-4 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cali opacity-100 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cali-pink-strong-dark">
            Celebremos a mamá <span className="text-white">con amor, respeto y un detalle muy nuestro</span>
          </h1>
          
        
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="#negocios" 
              className="bg-cali-pink-dark hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-300"
            >
              Descubrir Negocios
            </a>
          </div>
        </div>
        
        {/* Video Section */}
        <div className="mt-12 max-w-5xl mx-auto text-center">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XwaLfBkiZX4?autoplay=1&mute=1&loop=1&playlist=XwaLfBkiZX4&controls=0&rel=0&showinfo=0&modestbranding=1"
              title="Alcaldía de Santiago de Cali"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

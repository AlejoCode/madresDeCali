
import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cali opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4">
            <Heart className="h-10 w-10 text-cali-pink-dark mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-gray-800">
            Celebremos a Mamá <span className="text-cali-pink-dark">con el corazón de Cali</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Una iniciativa de la Alcaldía de Santiago de Cali para apoyar a nuestros 
            emprendedores locales en esta fecha tan especial.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="#negocios" 
              className="bg-cali-pink-dark hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-300"
            >
              Descubrir Negocios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

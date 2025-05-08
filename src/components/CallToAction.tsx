import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-cali">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
          <div className="inline-flex items-center justify-center p-3 bg-cali-pink-light rounded-full mb-6">
            <Heart className="h-7 w-7 text-cali-pink-dark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-800">
            Juntos apoyamos lo nuestro
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Celebra el Día de las Madres y apoya el comercio local. 
            Cada compra fortalece a un emprendedor caleño y hace especial 
            esta fecha para las mamás de nuestra ciudad.
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

export default CallToAction;

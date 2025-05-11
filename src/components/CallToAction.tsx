import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-cali">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Juntos <span className="text-cali-pink-strong-dark">apoyamos lo nuestro</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Celebra el Día de las Madres y apoya el comercio local. 
            Cada compra fortalece a un emprendedor caleño y hace especial 
            esta fecha para las mamás de nuestra ciudad.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="#negocios" 
              className="bg-cali-pink-dark hover:bg-cali-orange-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 text-md"
            >
              Descubrir Negocios
            </a>
            {/* Video goes here  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

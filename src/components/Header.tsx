
import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-cali-pink-light to-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2">
            <img 
              src="/lovable-uploads/41ef0378-43bd-4072-b61d-1906c2b0ddf5.png" 
              alt="Logo Alcaldía de Santiago de Cali" 
              className="h-16 md:h-20"
            />
          </div>
        </div>
        <nav className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
          <a href="#inicio" className="text-gray-800 hover:text-cali-pink-dark transition-colors">Inicio</a>
          <a href="#negocios" className="text-gray-800 hover:text-cali-pink-dark transition-colors">Negocios</a>
          <a href="#contacto" className="text-gray-800 hover:text-cali-pink-dark transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

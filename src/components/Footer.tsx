import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span>Campaña Día de las Madres</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Una iniciativa de la Alcaldía de Santiago de Cali para apoyar 
              a los emprendedores locales y celebrar a las madres de nuestra ciudad.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/alcaldiadecali" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cali-pink-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.6668 6.67334C18.0002 7.00001 17.3336 7.13334 16.6668 7.33334C15.9336 6.49334 14.9336 6.44001 13.8002 6.84001C12.6668 7.24001 11.9336 8.00001 11.8002 9.24001C11.7336 9.81334 11.8668 10.2667 11.9336 10.6C9.56683 10.3333 8.06683 9.13334 6.93349 7.33334C6.13349 8.86667 6.46683 10.4 7.53349 11.2667C7.13349 11.2667 6.46683 11.2 6.13349 10.8667C6.13349 12.2 6.93349 13.4667 8.13349 13.8667C7.33349 14.1333 6.80016 14.0667 6.46683 14C6.80016 15.1333 7.86683 16.0667 9.06683 16.2667C8.26683 16.8667 7.06683 17.2 5.60016 17.2C5.13349 17.2 4.93349 17.2 4.66683 17.2C5.93349 17.8 7.40016 18 8.86683 18C16.2002 18 20.0669 12.0667 20.0669 7.06667C20.0669 6.80001 20.0669 6.53334 20.0669 6.26667C20.7336 5.80001 21.2669 5.26667 21.6669 4.53334C21.4669 4.66667 20.6669 5.06667 19.9336 5.13334C20.6669 4.73334 21.1336 4.26667 21.3002 3.33334C20.6669 3.80001 19.8669 4.06667 19.2002 4.20001C18.6668 3.73334 17.9336 3.33334 17.3336 3.33334C15.4669 3.33334 14.0669 5.13334 14.6002 6.93334C14.2002 6.86667 9.46683 6.26667 7.06683 3.73334C5.86683 5.86667 6.60016 8.26667 8.20016 9.26667C7.73349 9.26667 7.33349 9.13334 6.86683 9.00001C6.86683 10.7333 8.13349 12.1333 9.73349 12.5333C9.46683 12.6 8.66683 12.6667 8.33349 12.6C8.73349 13.8667 9.93349 14.7333 11.2002 14.7333C10.0669 15.7333 7.73349 16.3333 5.60016 16.0667C6.93349 16.9333 8.46683 17.4 10.2002 17.4C17.0669 17.4 20.8002 12.0667 20.6002 7.13334C20.6002 7.06667 20.6002 7.00001 20.6002 6.93334C21.2669 6.53334 21.8002 5.86667 22.2002 5.26667"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/AlcaldiaDeCali" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cali-pink-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/alcaldiadecali" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cali-pink-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@AlcaldiaDeSantiagoDeCali" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cali-pink-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-center justify-end">
                <Phone className="h-4 w-4 mr-3 text-cali-pink-light" />
                <span>Línea nacional: 01 8000 222 195</span>
              </li>
              <li className="flex items-center justify-end">
                <Phone className="h-4 w-4 mr-3 text-cali-pink-light" />
                <span>Líneas locales: 195 - +57 6028879020</span>
              </li>
              <li className="flex items-center justify-end">
                <Phone className="h-4 w-4 mr-3 text-cali-pink-light" />
                <span>Línea gratuita: 01 8000 512 734</span>
              </li>
              <li className="flex items-center justify-end">
                <Mail className="h-4 w-4 mr-3 text-cali-pink-light" />
                <span>contactenos@cali.gov.co</span>
              </li>
              <li>
                Centro Administrativo Municipal CAM<br />
                Avenida 2N #10-70, Cali, Colombia
              </li>
            </ul>
          </div>
          
         
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alcaldía de Santiago de Cali. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

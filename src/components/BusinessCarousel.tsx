import React, { useState, useRef, useEffect, useMemo } from 'react';
import BusinessCard from './BusinessCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Business, sampleBusinesses } from '../services/excelService';
import { fetchBusinessesFromGoogleSheets } from '../services/googleSheetsService';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { useToast } from "@/hooks/use-toast";

const BusinessCarousel = () => {
  // Estado para los negocios
  const [businesses, setBusinesses] = useState<Business[]>(sampleBusinesses);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Estado para el filtro de categorías y búsqueda
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Estados para el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 3;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const { toast } = useToast();

  // Extraer categorías únicas de los negocios
  const categories = useMemo(() => 
    [...new Set(businesses.map(business => business.category))],
    [businesses]
  );
  
  // Filtrar los negocios por categoría y búsqueda
  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      const matchesCategory = !selectedCategory || business.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [businesses, selectedCategory, searchQuery]);

  // Cargar datos desde Google Sheets al montar el componente
  useEffect(() => {
    const loadBusinessesFromGoogleSheets = async () => {
      setLoading(true);
      try {
        const data = await fetchBusinessesFromGoogleSheets();
        if (data && data.length > 0) {
          setBusinesses(data);
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBusinessesFromGoogleSheets();
  }, []);

  // Actualizamos windowWidth cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determinamos el número de elementos visibles según el ancho de la ventana
  const getVisibleItems = () => {
    if (windowWidth < 640) {
      return 1; // Móvil
    } else if (windowWidth < 1024) {
      return 2; // Tablet
    } else {
      return maxVisibleItems; // Desktop
    }
  };

  const visibleItems = getVisibleItems();
  
  // Resetear el índice cuando cambia el filtro, búsqueda o datos
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, searchQuery, businesses]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleItems >= filteredBusinesses.length 
        ? 0 
        : prevIndex + visibleItems
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - visibleItems < 0 
        ? Math.max(0, filteredBusinesses.length - visibleItems) 
        : prevIndex - visibleItems
    );
  };

  // Efecto para manejar el desplazamiento del carrusel cuando cambia el índice actual
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth / visibleItems;
      carouselRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, visibleItems]);
  
  // Mostrar solo el número correcto de tarjetas visibles a la vez
  const visibleBusinesses = filteredBusinesses.slice(currentIndex, currentIndex + visibleItems);
  
  // Agregar más tarjetas si necesitamos para rellenar la vista (para carrusel circular)
  if (visibleBusinesses.length < visibleItems && filteredBusinesses.length > 0) {
    visibleBusinesses.push(...filteredBusinesses.slice(0, visibleItems - visibleBusinesses.length));
  }

  return (
    <section id="negocios" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
        <p className="text-xl md:text-xl mb-8 text-gray-700 leading-relaxed ">
        Les presentamos los emprendimientos locales de madres caleñas, una iniciativa de la Alcaldía de Santiago de Cali, que busca apoyar lo nuestro en una fecha tan especial.
          </p>

        </div>
        {/* Estado de carga */}
        {loading && (
          <div className="text-center py-4">
            <p className="text-cali-pink-dark">Cargando datos de negocios...</p>
          </div>
        )}
        
        {/* Barra de búsqueda y filtros */}
        {businesses.length > 0 && (
          <div className="flex flex-col items-start gap-2 mb-6 bg-white p-4 rounded-lg shadow-md">
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
            <div className="w-full max-w-sm">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
          </div>
        )}

        <div className="relative mt-8">
          {filteredBusinesses.length > 0 ? (
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              {filteredBusinesses.map((business) => (
                <div key={business.id} className="w-full sm:w-[340px] max-w-xs flex-shrink-0">
                  <BusinessCard
                    name={business.name}
                    description={business.description}
                    category={business.category}
                    imageUrls={business.imageUrls}
                    instagram={business.instagram}
                    facebook={business.facebook}
                    telefono={business.telefono}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">
                {searchQuery 
                  ? "No se encontraron negocios que coincidan con tu búsqueda."
                  : "No hay negocios para mostrar en esta categoría."}
              </p>
            </div>
          )}

          {filteredBusinesses.length > visibleItems && (
            <div className="flex justify-center mt-8 gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="rounded-full border-cali-pink-dark text-cali-pink-dark hover:bg-cali-pink-light hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="rounded-full border-cali-pink-dark text-cali-pink-dark hover:bg-cali-pink-light hover:text-white"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessCarousel;

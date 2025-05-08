import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Facebook, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

interface BusinessCardProps {
  name: string;
  description: string;
  category: string;
  imageUrls: string[];
  instagram?: string;
  facebook?: string;
  telefono?: string;
  videoUrl?: string;
}

const BusinessCard = ({ 
  name, 
  description, 
  category, 
  imageUrls, 
  instagram, 
  facebook, 
  telefono,
  videoUrl
}: BusinessCardProps) => {
  const [currentImg, setCurrentImg] = useState(0);
  const hasMultipleImages = imageUrls && imageUrls.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  // WhatsApp link formatting
  const getWhatsAppLink = (telefono?: string) => {
    if (!telefono) return undefined;
    // Remove spaces and non-numeric chars
    const phone = String(telefono).replace(/\D/g, '');
    return `https://wa.me/${phone}`;
  };

  // Calculate how many buttons will be shown
  const buttonCount = [instagram, facebook, telefono].filter(Boolean).length;

  return (
    <Card className="h-full flex flex-col overflow-hidden border-2 border-gray-100 hover:border-cali-pink-light transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="relative pt-[56.25%] overflow-hidden bg-gray-100">
        {imageUrls && imageUrls.length > 0 && (
          <>
            <img 
              src={imageUrls[currentImg]} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placeholder.pics/svg/300x200";
              }}
            />
            {hasMultipleImages && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </>
        )}
      </div>
      {videoUrl && (
        <div className="w-full mt-2 rounded-lg overflow-hidden aspect-video bg-black">
          <video
            src={videoUrl}
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ background: '#000' }}
            poster={imageUrls && imageUrls[0] ? imageUrls[0] : undefined}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <CardHeader className="pb-2">
        {category && <div className="text-xs text-cali-pink-dark font-medium mb-1">{category}</div>}
        <CardTitle className="text-xl font-serif">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        {description && <CardDescription className="text-gray-600">{description}</CardDescription>}
      </CardContent>
      <CardFooter className="pt-0 flex flex-col gap-2">
        <div className={`flex ${buttonCount === 3 ? 'flex-wrap gap-2 gap-y-2 w-full' : 'justify-center gap-2'}`}>
          {instagram && (
            <Button asChild variant="outline" className={`${buttonCount === 3 ? 'min-w-[60px] flex-1' : ''} border-cali-pink-dark text-cali-pink-dark hover:bg-cali-pink-light hover:text-white p-3`}>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          )}
          {facebook && (
            <Button asChild variant="outline" className={`${buttonCount === 3 ? 'min-w-[60px] flex-1' : ''} border-cali-pink-dark text-cali-pink-dark hover:bg-cali-pink-light hover:text-white p-3`}>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
          )}
          {telefono && (
            <Button asChild variant="outline" className={`${buttonCount === 3 ? 'min-w-[60px] flex-1' : ''} border-cali-pink-dark text-cali-pink-dark hover:bg-cali-pink-light hover:text-white p-3`}>
              <a href={getWhatsAppLink(telefono)} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;

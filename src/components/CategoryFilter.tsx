import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-center my-4">
      <div className="flex items-center mr-2">
        <Filter className="h-4 w-4 mr-1 text-cali-pink-dark" />
        <span className="text-sm font-medium">Filtrar por:</span>
      </div>
      
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        className={`rounded-full text-sm ${
          selectedCategory === null
            ? "bg-cali-pink-dark text-white"
            : "border-cali-pink-dark text-gray-600 hover:bg-cali-pink-light hover:text-white"
        }`}
        onClick={() => onSelectCategory(null)}
      >
        Todos
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          className={`rounded-full text-sm ${
            selectedCategory === category
              ? "bg-cali-pink-dark text-white"
              : "border-cali-pink-dark text-gray-600 hover:bg-cali-pink-light hover:text-white"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Buscar negocios..."
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 focus:border-cali-pink-dark focus:ring-cali-pink-dark"
        />
      </div>
    </div>
  );
};

export default SearchBar; 
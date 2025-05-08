
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Upload } from 'lucide-react';
import { parseExcelFile } from '../services/excelService';
import { toast } from "@/hooks/use-toast";

interface ExcelUploaderProps {
  onDataLoaded: (data: any[]) => void;
}

const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onDataLoaded }) => {
  const [loading, setLoading] = useState(false);
  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Verificar que sea un archivo Excel
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      toast({
        title: "Formato incorrecto",
        description: "Por favor, sube un archivo Excel (.xlsx o .xls)",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const data = await parseExcelFile(file);
      onDataLoaded(data);
      toast({
        title: "¡Datos cargados con éxito!",
        description: `Se cargaron ${data.length} negocios desde el archivo Excel.`,
      });
    } catch (error) {
      console.error("Error al procesar el archivo:", error);
      toast({
        title: "Error al procesar el archivo",
        description: "Ocurrió un error al leer el archivo Excel. Verifica el formato.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center my-4">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="hidden"
        id="excel-file-input"
      />
      <label htmlFor="excel-file-input">
        <Button 
          variant="outline" 
          className="border-2 border-cali-pink-dark text-cali-pink-dark hover:bg-cali-pink-light hover:text-white transition-colors"
          disabled={loading}
        >
          <Upload className="mr-2 h-4 w-4" />
          {loading ? 'Cargando...' : 'Cargar base de datos Excel'}
        </Button>
      </label>
    </div>
  );
};

export default ExcelUploader;

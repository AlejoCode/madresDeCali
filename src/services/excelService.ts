import * as XLSX from 'xlsx';

export interface Business {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrls: string[];
  instagram?: string;
  facebook?: string;
  telefono?: string;
  catalogUrl: string;
}

export const parseExcelFile = async (file: File): Promise<Business[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // Convertir la hoja a JSON
        const jsonData = XLSX.utils.sheet_to_json<any>(sheet);
        
        // Mapear los datos al formato Business
        const businesses: Business[] = jsonData.map((row, index) => {
          let imageField = row.imageUrl || row.imagen || '';
          let imageUrls: string[] = [];
          if (imageField) {
            imageUrls = imageField.split(',').map((url: string) => url.trim()).filter(Boolean);
          }
          if (imageUrls.length === 0) {
            imageUrls = ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'];
          }
          return {
            id: row.id || index + 1,
            name: row.name || row.nombre || '',
            description: row.description || row.descripcion || '',
            category: row.category || row.categoria || '',
            imageUrls,
            instagram: row.instagram || '',
            facebook: row.facebook || '',
            telefono: row.telefono || '',
            catalogUrl: row.catalogUrl || row.catalogo || '#'
          };
        });
        
        resolve(businesses);
      } catch (error) {
        console.error('Error al procesar el archivo Excel:', error);
        reject(error);
      }
    };
    
    reader.onerror = (error) => {
      console.error('Error al leer el archivo:', error);
      reject(error);
    };
    
    reader.readAsBinaryString(file);
  });
};

// Datos de ejemplo para usar cuando no hay un archivo cargado
export const sampleBusinesses: Business[] = [
  {
    id: 1,
    name: "Dulces Momentos",
    description: "Repostería artesanal con los sabores auténticos que a mamá le encantarán. Especialidad en tortas personalizadas y cupcakes decorados.",
    category: "Repostería",
    imageUrls: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"],
    instagram: "",
    facebook: "",
    telefono: "",
    catalogUrl: "#dulces-momentos"
  },
  {
    id: 2,
    name: "Florería Caleña",
    description: "Arreglos florales únicos con flores frescas y locales. Diseños elegantes para sorprender a mamá en su día especial.",
    category: "Floristería",
    imageUrls: ["https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"],
    instagram: "",
    facebook: "",
    telefono: "",
    catalogUrl: "#floreria-calena"
  },
  {
    id: 3,
    name: "Artesanías El Valle",
    description: "Joyería y accesorios hechos a mano por artesanos locales. Piezas únicas que reflejan la cultura y tradición vallecaucana.",
    category: "Artesanías",
    imageUrls: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"],
    instagram: "",
    facebook: "",
    telefono: "",
    catalogUrl: "#artesanias-el-valle"
  },
  {
    id: 4,
    name: "Bienestar Natural",
    description: "Productos orgánicos para el cuidado personal. Sets de regalo con cremas, jabones y aceites esenciales para consentir a mamá.",
    category: "Cuidado Personal",
    imageUrls: ["https://images.unsplash.com/photo-1630333339977-b929ce86ac0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"],
    instagram: "",
    facebook: "",
    telefono: "",
    catalogUrl: "#bienestar-natural"
  }
];

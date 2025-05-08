import { Business } from './excelService';

// ID de la hoja de Google Sheets
const GOOGLE_SHEET_ID = '1XBcVme4y2jaIVzu2OfdqCf2szoIpRMkF5ndqqC-uGyw';
const SHEET_NAME = 'Sheet1'; // Nombre de la hoja, ajusta según sea necesario

export const fetchBusinessesFromGoogleSheets = async (): Promise<Business[]> => {
  try {
    // Construir la URL para la API de Google Sheets (versión pública)
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;
    
    const response = await fetch(url);
    const text = await response.text();
    
    // La respuesta viene con un prefijo que debemos eliminar
    const jsonText = text.replace('/*O_o*/', '').replace(/google.visualization.Query.setResponse\(|\);$/g, '');
    const data = JSON.parse(jsonText);
    
    // Mapear los datos al formato de negocio
    const businesses: Business[] = [];
    
    // Obtener los nombres de las columnas
    const columns = data.table.cols.map((col: any) => col.label?.toLowerCase() || '');
    
    // Mapear cada fila a un objeto Business
    data.table.rows.forEach((row: any, index: number) => {
      if (index === 0) return;
      const businessData: any = {};
      row.c.forEach((cell: any, cellIndex: number) => {
        if (cell && cell.v !== null && cell.v !== undefined) {
          switch(cellIndex) {
            case 0: businessData.category = cell.v; break;
            case 1: businessData.name = cell.v; break;
            case 2: businessData.description = cell.v; break;
            case 3: businessData.imageUrls = cell.v ? cell.v.split(',').map((url: string) => url.trim()).filter(Boolean) : []; break;
            case 4: businessData.instagram = cell.v || ''; break;
            case 5: businessData.facebook = cell.v || ''; break;
            case 6: businessData.telefono = cell.v || ''; break;
          }
        }
      });
      if (!businessData.imageUrls || businessData.imageUrls.length === 0) {
        businessData.imageUrls = ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'];
      }
      if (businessData.name) {
        businesses.push({
          id: index,
          name: businessData.name || '',
          description: businessData.description || '',
          category: businessData.category || '',
          imageUrls: businessData.imageUrls,
          instagram: businessData.instagram || '',
          facebook: businessData.facebook || '',
          telefono: businessData.telefono || '',
          catalogUrl: '#'
        });
      }
    });
    
    console.log("Datos cargados:", businesses);
    return businesses;
  } catch (error) {
    console.error('Error al obtener datos de Google Sheets:', error);
    throw error;
  }
};

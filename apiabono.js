import axios from 'axios';

// Configuración del cliente Axios
const api = axios.create({
  baseURL: 'http://localhost:8492/AbonoController',
});

// Obtener todos los abonosos
export const fetchAbonos = async () => {
  try {
    const response = await api.get('/listarabonos');
    return response.data;
  } catch (error) {
    console.error('Error al cargar los abonosos:', error);
    throw error;
  }
};

// Crear un nuevo abonoso
export const createAbonos = async (newAbono) => {
  try {
    await api.post('/insertarabonos', newAbono);
  } catch (error) {
    console.error('Error al crear el abonoso:', error);
    throw error;
  }
};

// Actualizar un abonoso
export const updateAbonos = async (id, updatedAbono) => {
  try {
    await api.put(`/actualizarcredicto/${id}`, updatedAbono);
  } catch (error) {
    console.error('Error al actualizar el abonoso:', error);
    throw error;
  }
};

// Eliminar un abonoso
export const deleteAbonos = async (id) => {
  try {
    await api.delete(`/eliminarabonos/${id}`);
  } catch (error) {
    console.error('Error al eliminar el abonoso:', error);
    throw error;
  }
};
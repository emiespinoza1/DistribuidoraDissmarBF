import axios from 'axios';

// Configuración del cliente Axios
const api = axios.create({
  baseURL: 'http://localhost:8492/CreditoController',
});

// Obtener todos los Creditoos
export const fetchCredito = async () => {
  try {
    const response = await api.get('/listarcredito');
    return response.data;
  } catch (error) {
    console.error('Error al cargar los Creditoos:', error);
    throw error;
  }
};

// Crear un nuevo Creditoo
export const createCredito = async (newCredito) => {
  try {
    await api.post('/insertarcredito', newCredito);
  } catch (error) {
    console.error('Error al crear el Creditoo:', error);
    throw error;
  }
};

// Actualizar un Creditoo
export const updateCredito = async (id, updatedCredito) => {
  try {
    await api.put(`/actualizarcredicto/${id}`, updatedCredito);
  } catch (error) {
    console.error('Error al actualizar el Creditoo:', error);
    throw error;
  }
};

// Eliminar un Creditoo
export const deleteCredito = async (id) => {
  try {
    await api.delete(`/eliminarcredito/${id}`);
  } catch (error) {
    console.error('Error al eliminar el Creditoo:', error);
    throw error;
  }
};
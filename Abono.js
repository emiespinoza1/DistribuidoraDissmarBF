import React, { useState, useEffect } from 'react';
import { fetchAbonos, createAbonos, updateAbonos, deleteAbonos } from './apiabono.js';



const Abono = () => {
  const [abonos, setAbonos] = useState([]);
  const [newAbono, setNewAbono] = useState({
    id_Cliente: '',
    Monto: '',
    fecha_abo: '',
  });
  const [selectedAbono, setSelectedAbono] = useState(null);

  useEffect(() => {
    const loadAbonos = async () => {
      const data = await fetchAbonos();
      setAbonos(data);
    };
    loadAbonos();
  }, []);

  const handleCreateAbonos = async () => {
    await createAbonos(newAbono);
    const data = await fetchAbonos();
    setAbonos(data);
    setNewAbono({
      id_Cliente: '',
      Monto: '',
      fecha_abo: '',
    });
  };

  const handleUpdateAbonos = async () => {
    try {
      await updateAbonos(selectedAbono.id_Abono, selectedAbono);
      const data = await fetchAbonos();
      setAbonos(data);
      setSelectedAbono(null);
    } catch (error) {
      console.error('Error al actualizar el abono:', error);
    }
  };

  const handleEditAbonos = (abono) => {
    setSelectedAbono(abono);
  };

  const handleDeleteConfirmation = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este abono?");
    if (confirmDelete) {
      await handleDeleteAbonos(id);
    }
  };

  const handleDeleteAbonos = async (id) => {
    try {
      await deleteAbonos(id);
      const data = await fetchAbonos();
      setAbonos(data);
    } catch (error) {
      console.error("Error al eliminar el abono:", error);
    }
  };

  return (
    <div>
      <h1>Historial de Abonos</h1>
      <div>
        
        <form onSubmit={handleCreateAbonos}>
          <label>
           
          </label>
          
        </form>
       
        <table>
          <thead>
            <tr>
              <th>ID Abono</th>
              <th>ID Cliente</th>
              <th>Monto</th>
              <th>Fecha</th>
              
            </tr>
          </thead>
          <tbody>
            {abonos.map((abono) => (
              <tr key={abono.id_abono}>
                <td>{abono.id_abono}</td>
                <td>{abono.id_cliente}</td>
                <td>{abono.monto}</td>
                <td>{abono.fecha_abo}</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default Abono;
import React, { useState, useEffect } from 'react';
import { fetchCredito, createCredito, updateCredito, deleteCredito } from './api';
import './App.css';

const App = () => {
  const [creditos, setCreditos] = useState([]);
  const [newCredito, setNewCredito] = useState({
    id_Cliente: '',
    tipo_credito: '',
    Plazo_pago: '',
    Tasa_interes: '',
    fecha_venc: '',
    Monto_cred: '',
    Limit_Cred: '',
  });
  const [selectedCredito, setSelectedCredito] = useState(null);

  useEffect(() => {
    const loadCreditos = async () => {
      const data = await fetchCredito();
      setCreditos(data);
    };
    loadCreditos();
  }, []);

  const handleCreateCredito = async () => {
    await createCredito(newCredito);
    const data = await fetchCredito();
    setCreditos(data);
    setNewCredito({
      id_Cliente: '',
      tipo_credito: '',
      Plazo_pago: '',
      Tasa_interes: '',
      fecha_venc: '',
      Monto_cred: '',
      Limit_Cred: '',
    });
  };

  const handleUpdateCredito = async () => {
    try {
      await updateCredito(selectedCredito.id, selectedCredito);
      const data = await fetchCredito();
      setCreditos(data);
      setSelectedCredito(null);
    } catch (error) {
      console.error('Error al actualizar el crédito:', error);
    }
  };

  const handleEditCredito = (credito) => {
    setSelectedCredito(credito);
  };

  const handleDeleteConfirmation = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este crédito?");
    if (confirmDelete) {
      await handleDeleteCredito(id);
    }
  };

  const handleDeleteCredito = async (id) => {
    try {
      await deleteCredito(id);
      const data = await fetchCredito();
      setCreditos(data);
    } catch (error) {
      console.error("Error al eliminar el crédito:", error);
    }
  };

  return (
    <div>
      <h1>Historial de Créditos</h1>
      <div>
        
        
      </div>
      <table>
        <thead>
          <tr>
            <th>ID Cliente</th>
            <th>Tipo de Crédito</th>
            <th>Plazo de Pago</th>
            <th>Tasa de Interés</th>
            <th>Fecha de Vencimiento</th>
            <th>Monto de Crédito</th>
            <th>Límite de Crédito</th>
            
          </tr>
        </thead>
        <tbody>
          {creditos.map((credito) => (
            <tr key={credito.id_credit}>
              <td>{credito.id_cliente}</td>
              <td>{credito.tipo_credit}</td>
              <td>{credito.plazo_pago}</td>
              <td>{credito.tasa_inters}</td>
              <td>{credito.Fecha_venc}</td>
              <td>{credito.monto_cred}</td>
              <td>{credito.limit_cred}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
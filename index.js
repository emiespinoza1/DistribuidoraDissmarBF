import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Abono from './Abono';
import FormLogin from './FormLogin';
import logo from './logo/dissmar.png';

const JSX = () => {
  const [sesionOk, cambiarEstadoSesion] = useState(false); // Estado de sesión

  const handleLogin = () => {
    cambiarEstadoSesion(true); // Cambiar el estado a verdadero
  };

  const handleLogout = () => {
    cambiarEstadoSesion(false); // Cambiar el estado a falso
  };

  return (
    <>
      {sesionOk ? (
        // Vista principal después del inicio de sesión
        <div>
          <img src={logo} alt="Dissmar Logo" />
          <App />
          <Abono />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        // Vista del formulario de inicio de sesión
        <div>
          <FormLogin onLogin={handleLogin} />

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin} // Al hacer clic cambia a la vista principal
          >
            Iniciar sesión
          </button>
        </div>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JSX />);
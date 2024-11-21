import React from "react";
import "./App.css";
import logo from './logo/dissmar.png';

const FormLogin = ({ onLogin }) => {
  // Función para manejar el evento de envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar la recarga de la página
    // Llama a la función que indica inicio de sesión
    if (onLogin) onLogin();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <img src={logo} alt="Dissmar Logo" />
          <h1 className="Iniciar" style={{ color: "black" }}>Inicio de Sesión</h1>
          <label htmlFor="user" className="form-label">Usuario</label>
          <input type="text" name="user" id="user" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" name="password" id="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar</button>
      </form>
    </div>
  );
};

export default FormLogin;
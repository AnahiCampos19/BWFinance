import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/color-bw-03.svg";
import "../NavBar.css";

// Navbar: Barra de navegación que incluye un menú responsive con enlaces.
export const Navbar = () => {
  // Estado local para manejar si el menú está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para alternar el estado del menú (abrir/cerrar)
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="navbar"> {/* Contenedor principal de la barra de navegación */}
      {/* Logo de la aplicación */}
      <img src={logo} alt="Logo ByteWise" className="logo" />

      {/* Botón del menú hamburguesa para dispositivos móviles */}
      <button
        className="btn-menu"
        onClick={toggleMenu} // Maneja el clic para abrir/cerrar menú
        aria-expanded={menuAbierto} // Propiedad accesible para indicar estado del menú
        aria-label="Abrir menú de navegación"
      >
        {menuAbierto ? "✖" : "☰"} {/* Cambia entre 'X' y '☰' (hamburguesa) */}
      </button>

      {/* Menú de enlaces */}
      <nav className={`menu ${menuAbierto ? "menu-abierto" : ""}`}>
        <ul>
          <li>
            <Link to="/">Inicio</Link> {/* Enlace a la página principal */}
          </li>
          <li>
            <Link to="/register">Registrarse</Link> {/* Enlace a la página de registro */}
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link> {/* Enlace al dashboard */}
          </li>
          <li>
            <Link to="/transacciones">Transacciones</Link> {/* Enlace a transacciones */}
          </li>
          <li>
            <Link to="/tareas-habitos">Hábitos</Link> {/* Enlace a tareas y hábitos */}
          </li>
        </ul>
      </nav>
    </header>
  );
};



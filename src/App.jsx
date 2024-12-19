import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
// Importa las herramientas necesarias de react-router-dom para manejar la navegación.

import RegisterScreen from './components/RegisterScreen'; 
import HomeScreen from './components/HomeScreen'; 
import Dashboard from './components/Dashboard';
import Transacciones from './components/Transacciones';
import TareasHabitos from './components/TareasHabitos';
// Importa los componentes de las distintas rutas que tiene la aplicación.

import './App.css';
// Importa los estilos globales CSS para aplicar un formato base a la aplicación.

import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
// Importamos los componentes Navbar y Footer que se repetirán en toda la app.

function App() {
  // Definimos mensajes de error o en construcción para reutilizarlos.
  const WIP_MESSAGE = "Página aún en construcción...";
  const ERROR_MESSAGE = "¡UPS! Esa página no existe...";

  return (
    <> {/* Fragmento React para evitar elementos innecesarios */}
      <BrowserRouter>
        {/* Envolvemos la aplicación con BrowserRouter para habilitar la navegación. */}
        <Navbar /> {/* Renderizamos la barra de navegación en todas las páginas. */}
        <main>
          <Routes>
            {/* Definimos las rutas de la aplicación. */}

            {/* Ruta principal (Home) */}
            <Route path="/" element={<HomeScreen user={{ name: "Pao" }} />} />
            {/* Le pasamos un prop user a HomeScreen para simular datos del usuario */}

            {/* Ruta de Registro */}
            <Route path="/register" element={<RegisterScreen />} />

            {/* Rutas internas del Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transacciones" element={<Transacciones />} />
            <Route path="/tareas-habitos" element={<TareasHabitos />} />

            {/* Ruta comodín para páginas no existentes */}
            <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
          </Routes>
        </main>
        <Footer /> {/* El pie de página también se renderiza en toda la app. */}
      </BrowserRouter>
    </>
  );
}

export default App; 

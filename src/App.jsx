import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa los componentes
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Transacciones from './components/Transacciones';
import TareasHabitos from './components/TareasHabitos';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import PrecontractualesTerms from './components/PrecontractualesTerms';
import EliminacionDatos from './components/EliminacionDatos'; 
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import LoginScreen from "./components/LoginScreen";
import './App.css';

// Importa Navbar y Footer
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const ERROR_MESSAGE = "¡UPS! Esa página no existe...";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen user={{ name: "Pao" }} />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/precontractualesterms" element={<PrecontractualesTerms />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transacciones" element={<Transacciones />} />
            <Route path="/tareas-habitos" element={<TareasHabitos />} />
            <Route path="/eliminaciondatos" element={<EliminacionDatos />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

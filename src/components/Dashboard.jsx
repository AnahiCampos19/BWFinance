import React from 'react';
import ResumenGeneral from '../components/ResumenGeneral';
import MetasPresupuestos from '../components/MetasPresupuestos';
import AlertasRecomendaciones from '../components/AlertasRecomendaciones';
import '../Dashboard.css';
// Componente Dashboard que organiza las secciones principales del panel financiero.
function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Título principal del Dashboard */}
            <h1>Dashboard Financiero</h1>

            {/* Sección de Resumen General */}
            <section className="dashboard-section">
                <h2>Resumen General</h2>
                <ResumenGeneral />
            </section>

            {/* Sección de Metas y Presupuestos */}
            <section className="dashboard-section">
                <h2>Metas y Presupuestos</h2>
                <MetasPresupuestos />
            </section>

            {/* Sección de Alertas y Recomendaciones */}
            <section className="dashboard-section">
                <h2>Alertas y Recomendaciones</h2>
                <AlertasRecomendaciones />
            </section>
        </div>
    );
}

export default Dashboard;

/* Cambios realizados:
1. Agregé una clase "dashboard-section" a cada sección del Dashboard para aplicar estilos responsivos y separar visualmente cada bloque.
2. Añadí comentarios a cada bloque para mejorar la legibilidad del código.
3. Mantengo "dashboard-container" como clase principal para el contenedor del Dashboard.
4. Las secciones ahora son más flexibles y se pueden estilizar individualmente. */

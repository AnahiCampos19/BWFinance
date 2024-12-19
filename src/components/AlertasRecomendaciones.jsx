import React from 'react';

function AlertasRecomendaciones() {
    const alertas = [
        { id: 1, mensaje: 'Recordatorio: Pagar factura de electricidad antes del 5 de octubre.' },
        { id: 2, mensaje: 'Sugerencia: Aumenta tus ahorros en un 10% este mes.' }
    ];

    return (
        <div>
            <ul>
                {alertas.map(alerta => (
                    <li key={alerta.id}>
                        {alerta.mensaje}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlertasRecomendaciones;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AlertasRecomendaciones() {
//     // Estado para las alertas fijas
//     const alertasFijas = [
//         { id: 1, mensaje: 'Recordatorio: Pagar factura de electricidad antes del 5 de octubre.' },
//         { id: 2, mensaje: 'Sugerencia: Aumenta tus ahorros en un 10% este mes.' }
//     ];

//     // Estado para datos dinámicos
//     const [tiempo, setTiempo] = useState(null);
//     const [dolar, setDolar] = useState({ oficial: null, blue: null });

//     // Estado para eventos en el calendario
//     const [eventos, setEventos] = useState([
//         { id: 1, fecha: '2024-12-20', evento: 'Cumpleaños de Ana' },
//     ]);
//     const [nuevoEvento, setNuevoEvento] = useState({ fecha: '', evento: '' });

//     // Llamada a APIs externas
//     useEffect(() => {
//         // API del tiempo
//         const fetchTiempo = async () => {
//             try {
//                 const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
//                     params: { key: 'TU_API_KEY_TIEMPO', q: 'Buenos Aires' }
//                 });
//                 setTiempo(response.data.current.condition.text);
//             } catch (error) {
//                 console.error('Error obteniendo el clima:', error);
//             }
//         };

//         // API del dólar
//         const fetchDolar = async () => {
//             try {
//                 const response = await axios.get('https://api.bluelytics.com.ar/v2/latest');
//                 setDolar({
//                     oficial: response.data.oficial.value_avg,
//                     blue: response.data.blue.value_avg
//                 });
//             } catch (error) {
//                 console.error('Error obteniendo cotización del dólar:', error);
//             }
//         };

//         fetchTiempo();
//         fetchDolar();
//     }, []);

//     // Función para agregar un evento al calendario
//     const agregarEvento = (e) => {
//         e.preventDefault();
//         if (nuevoEvento.fecha && nuevoEvento.evento) {
//             setEventos([...eventos, { id: eventos.length + 1, ...nuevoEvento }]);
//             setNuevoEvento({ fecha: '', evento: '' });
//         }
//     };

//     return (
//         <div>
//             <h3>Alertas y Recomendaciones</h3>
            
//             {/* Alertas Fijas */}
//             <ul>
//                 {alertasFijas.map(alerta => (
//                     <li key={alerta.id}>{alerta.mensaje}</li>
//                 ))}
//             </ul>

//             {/* Datos Dinámicos */}
//             <h4>Información Actualizada</h4>
//             <p>Clima actual en Buenos Aires: {tiempo || 'Cargando...'}</p>
//             <p>Dólar Oficial: ${dolar.oficial || 'Cargando...'}</p>
//             <p>Dólar Blue: ${dolar.blue || 'Cargando...'}</p>

//             {/* Calendario */}
//             <h4>Calendario de Actividades</h4>
//             <form onSubmit={agregarEvento}>
//                 <input
//                     type="date"
//                     value={nuevoEvento.fecha}
//                     onChange={(e) => setNuevoEvento({ ...nuevoEvento, fecha: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Descripción del evento"
//                     value={nuevoEvento.evento}
//                     onChange={(e) => setNuevoEvento({ ...nuevoEvento, evento: e.target.value })}
//                     required
//                 />
//                 <button type="submit">Agregar Evento</button>
//             </form>
//             <ul>
//                 {eventos.map(evento => (
//                     <li key={evento.id}>{evento.fecha} - {evento.evento}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default AlertasRecomendaciones;
//WeatherAPI para obtener una API Key.
//Bluelytics para obtener las cotizaciones del dólar
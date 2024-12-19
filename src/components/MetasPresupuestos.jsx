import React, { useState } from 'react';

function MetasPresupuestos() {
    const [metas, setMetas] = useState([
        { id: 1, nombre: 'Pago del alquiler', monto: 800, categoria: 'Gastos Fijos', periodo: 'Mensual', completado: false },
        { id: 2, nombre: 'Cena con amigos', monto: 50, categoria: 'Gastos de Dispersión', periodo: 'Mensual', completado: false },
        { id: 3, nombre: 'Ahorro para jubilación', monto: 200, categoria: 'Inversiones a Futuro', tiempo: '5 años', completado: false },
    ]);

    const [nuevaMeta, setNuevaMeta] = useState({
        nombre: '',
        monto: '',
        categoria: 'Gastos Fijos',
        periodo: 'Mensual',
        tiempo: ''
    });

    const [error, setError] = useState(''); // Estado para los mensajes de error

    // Validar y agregar meta
    const agregarMeta = (e) => {
        e.preventDefault();
        setError(''); // Reinicia el estado de error

        if (!nuevaMeta.nombre || nuevaMeta.monto <= 0) {
            setError('Por favor, ingresa un nombre válido y un monto mayor a 0.');
            return;
        }

        if (nuevaMeta.categoria === 'Inversiones a Futuro' && !nuevaMeta.tiempo) {
            setError('Debes ingresar el tiempo estimado para las inversiones a futuro.');
            return;
        }

        if (
            (nuevaMeta.categoria === 'Gastos Fijos' || nuevaMeta.categoria === 'Gastos de Dispersión') &&
            nuevaMeta.tiempo
        ) {
            setError('No puedes ingresar tiempo para Gastos Fijos o de Dispersión.');
            return;
        }

        const meta = {
            id: metas.length + 1,
            nombre: nuevaMeta.nombre,
            monto: parseFloat(nuevaMeta.monto),
            categoria: nuevaMeta.categoria,
            periodo: nuevaMeta.categoria === 'Inversiones a Futuro' ? null : nuevaMeta.periodo,
            tiempo: nuevaMeta.categoria === 'Inversiones a Futuro' ? nuevaMeta.tiempo : null,
            completado: false
        };

        setMetas([...metas, meta]);
        setNuevaMeta({ nombre: '', monto: '', categoria: 'Gastos Fijos', periodo: 'Mensual', tiempo: '' });
    };

    const eliminarMeta = (id) => setMetas(metas.filter(meta => meta.id !== id));

    const toggleMetaCompletada = (id) => {
        setMetas(metas.map(meta => (meta.id === id ? { ...meta, completado: !meta.completado } : meta)));
    };

    const filtrarPorCategoria = (categoria) => metas.filter(meta => meta.categoria === categoria);

    return (
        <div>
            {/* Formulario */}
            <form onSubmit={agregarMeta}>
                <input
                    type="text"
                    placeholder="Nombre de la meta"
                    value={nuevaMeta.nombre}
                    onChange={(e) => setNuevaMeta({ ...nuevaMeta, nombre: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Monto"
                    min="1"
                    value={nuevaMeta.monto}
                    onChange={(e) => setNuevaMeta({ ...nuevaMeta, monto: e.target.value })}
                    required
                />
                <select
                    value={nuevaMeta.categoria}
                    onChange={(e) => setNuevaMeta({ ...nuevaMeta, categoria: e.target.value, tiempo: '', periodo: 'Mensual' })}
                >
                    <option value="Gastos Fijos">Gastos Fijos</option>
                    <option value="Gastos de Dispersión">Gastos de Dispersión</option>
                    <option value="Inversiones a Futuro">Inversiones a Futuro</option>
                </select>

                {/* Campo adicional para "Inversiones a Futuro" */}
                {nuevaMeta.categoria === 'Inversiones a Futuro' && (
                    <input
                        type="text"
                        placeholder="Tiempo estimado (ej: 2 años)"
                        value={nuevaMeta.tiempo}
                        onChange={(e) => setNuevaMeta({ ...nuevaMeta, tiempo: e.target.value })}
                        required
                    />
                )}

                {/* Campo adicional para Gastos Fijos o Dispersión */}
                {(nuevaMeta.categoria === 'Gastos Fijos' || nuevaMeta.categoria === 'Gastos de Dispersión') && (
                    <select
                        value={nuevaMeta.periodo}
                        onChange={(e) => setNuevaMeta({ ...nuevaMeta, periodo: e.target.value })}
                    >
                        <option value="Mensual">Mensual</option>
                        <option value="Anual">Anual</option>
                    </select>
                )}

                <button type="submit">Agregar Meta</button>
            </form>

            {/* Mensaje de error */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Secciones por categorías */}
            <section>
                <h3>Gastos Fijos</h3>
                <ul>
                    {filtrarPorCategoria('Gastos Fijos').map(meta => (
                        <li key={meta.id}>
                            {meta.nombre} - ${meta.monto} ({meta.periodo})
                            <button onClick={() => toggleMetaCompletada(meta.id)}>Completar</button>
                            <button onClick={() => eliminarMeta(meta.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Gastos de Dispersión</h3>
                <ul>
                    {filtrarPorCategoria('Gastos de Dispersión').map(meta => (
                        <li key={meta.id}>
                            {meta.nombre} - ${meta.monto} ({meta.periodo})
                            <button onClick={() => toggleMetaCompletada(meta.id)}>Completar</button>
                            <button onClick={() => eliminarMeta(meta.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Inversiones a Futuro</h3>
                <ul>
                    {filtrarPorCategoria('Inversiones a Futuro').map(meta => (
                        <li key={meta.id}>
                            {meta.nombre} - ${meta.monto} (En {meta.tiempo})
                            <button onClick={() => toggleMetaCompletada(meta.id)}>Completar</button>
                            <button onClick={() => eliminarMeta(meta.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default MetasPresupuestos;


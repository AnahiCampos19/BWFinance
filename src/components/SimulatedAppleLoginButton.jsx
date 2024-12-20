import React from "react";

const SimulatedAppleLoginButton = () => {
    const handleSimulatedLogin = () => {
        alert("Inicio de sesión simulado con Apple");
        // Aquí puedes redirigir al usuario a otra parte de tu aplicación
    };

    return (
        <button
            onClick={handleSimulatedLogin}
            style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Iniciar sesión con Apple (Simulado)
        </button>
    );
};

export default SimulatedAppleLoginButton;

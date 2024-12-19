import React, { useEffect } from "react";

const AppleLoginButton = () => {
    useEffect(() => {
        // Inicializa el SDK de Apple
        window.AppleID.auth.init({
            clientId: "com.your.app", // Cambia esto por un ID ficticio o el real si lo tienes
            scope: "name email",
            redirectURI: "https://your-redirect-uri", // Cambia esto por tu URI de redirección
            state: "state", // Puedes usar un valor estático o dinámico para identificar la sesión
            usePopup: true, // Usa un popup para la autenticación
        });
    }, []);

    const handleLogin = () => {
        window.AppleID.auth
            .signIn()
            .then((response) => {
                console.log("Apple Login Success:", response);
                alert("Inicio de sesión con Apple exitoso");
                // Aquí puedes manejar el token devuelto por Apple y enviarlo a tu backend
            })
            .catch((error) => {
                console.error("Apple Login Failed:", error);
                alert("Error al iniciar sesión con Apple");
            });
    };

    return (
        <button
            onClick={handleLogin}
            style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Iniciar sesión con Apple
        </button>
    );
};

export default AppleLoginButton;

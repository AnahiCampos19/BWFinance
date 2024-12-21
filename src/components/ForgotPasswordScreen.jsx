import React, { useState } from "react";

function ForgotPasswordScreen() {
    const [email, setEmail] = useState("");
    const [formError, setFormError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Función local para validar el email
    const validateEmail = (email) => {
        if (!email) {
            return "El correo electrónico es obligatorio.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return "Introduce un correo electrónico válido.";
        }
        return null;
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        if (emailError) {
            setFormError(emailError);
            setSuccessMessage("");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("http://localhost:5000/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccessMessage(
                    "Se ha enviado un enlace de recuperación a tu correo electrónico."
                );
                setFormError("");
                setEmail("");
                // Opcional: Redirección tras éxito
                // setTimeout(() => window.location.href = "/login", 5000);
            } else if (response.status === 404) {
                setFormError("El correo no está registrado.");
                setSuccessMessage("");
            } else {
                setFormError(
                    "Hubo un error al procesar tu solicitud. Intenta nuevamente."
                );
                setSuccessMessage("");
            }
        } catch (error) {
            console.error("Error:", error);
            setFormError(
                "No se pudo conectar con el servidor. Por favor, intenta más tarde."
            );
            setSuccessMessage("");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="forgot-password-container">
            <h3>Recuperar Contraseña</h3>
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                {formError && <p className="error">{formError}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar enlace de recuperación"}
                </button>
            </form>

            <p>
                ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
            </p>

            <footer>
                <p>
                    Al usar ByteWise, aceptas los{""}
                    <a href="/termsofuse">Términos de uso</a>,{""}
                    <a href="/privacypolicy">Política de privacidad</a> {""} y
                    <a href="/precontractualesterms">Términos precontractuales</a> de nuestra
                    empresa.
                </p>
            </footer>
        </div>
    );
}

export default ForgotPasswordScreen;


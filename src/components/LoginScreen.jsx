import React, { useState } from "react";
import FacebookLogin from "react-facebook-login-lite";
import GoogleLoginButton from "./GoogleLoginButton"; // Reutilizamos el componente de Google Login
import SimulatedAppleLoginButton from "./SimulatedAppleLoginButton";

function LoginScreen() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = () => {
        const errors = {};
        const emailError = validateEmail(formValues.email);
        if (emailError) errors.email = emailError;

        if (!formValues.password) {
            errors.password = "La contraseña es obligatoria.";
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                const response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formValues),
                });

                if (response.ok) {
                    alert("Inicio de sesión exitoso");
                    setFormValues({ email: "", password: "" });
                } else if (response.status === 401) {
                    setFormErrors({
                        email: "Correo o contraseña incorrectos.",
                    });
                } else {
                    alert("Error al iniciar sesión. Intenta nuevamente.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("No se pudo conectar con el servidor.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        alert("Inicio de sesión con Google exitoso");
        // Aquí enviar el token al backend para validarlo
    };

    const handleGoogleFailure = () => {
        console.error("Google Login Failed");
        alert("Error al iniciar sesión con Google.");
    };

    const handleFacebookResponse = (response) => {
        console.log("Facebook Login Response:", response);
        alert("Inicio de sesión con Facebook exitoso");
    };

    return (
        <div className="login-container">
            <h3>Inicia sesión en ByteWise</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formValues.password}
                    onChange={handleChange}
                />
                {formErrors.password && <p className="error">{formErrors.password}</p>}

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Iniciando..." : "Iniciar sesión"}
                </button>
            </form>

            <p className="forgot-password">
                <a href="/forgot-password" className="link">
                    ¿Olvidaste tu contraseña? Recuperarla aquí
                </a>
            </p>

            <div className="social-login">
                <p>...o a través de</p>
                <FacebookLogin
                    appId="1119510899398623"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebookResponse}
                    textButton="Facebook"
                    cssClass="facebook-btn"
                />

                <GoogleLoginButton
                    onSuccess={handleGoogleSuccess}
                    onFailure={handleGoogleFailure}
                />
                <SimulatedAppleLoginButton />
            </div>

            <footer>
                <p>
                    Al usar ByteWise, aceptas los{""}
                    <a href="/termsofuse">Términos de uso</a>{""},
                    <a href="/privacypolicy">Política de privacidad</a> {""} y
                    <a href="/precontractualesterms">Términos precontractuales</a> de nuestra
                    empresa.
                </p>
            </footer>
        </div>
    );
}

export default LoginScreen;

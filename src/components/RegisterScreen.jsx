import React, { useState } from "react";
import FacebookLogin from "react-facebook-login-lite";
import GoogleLoginButton from "./GoogleLoginButton";
import SimulatedAppleLoginButton from "./SimulatedAppleLoginButton";

function RegisterScreen() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = () => {
        const errors = {};

        if (!formValues.email) {
            errors.email = "El correo electrónico es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = "Introduce un correo electrónico válido.";
        }

        if (!formValues.password) {
            errors.password = "La contraseña es obligatoria.";
        } else if (formValues.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }

        if (formValues.confirmPassword !== formValues.password) {
            errors.confirmPassword = "Las contraseñas no coinciden.";
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
                const response = await fetch("http://localhost:5000/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formValues.email,
                        password: formValues.password,
                    }),
                });

                if (response.ok) {
                    alert("Registro exitoso");
                    setFormValues({ email: "", password: "", confirmPassword: "" });
                } else if (response.status === 409) {
                    setFormErrors({
                        email: "El correo electrónico ya está registrado.",
                    });
                } else {
                    alert("Error al registrar usuario");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error al conectar con el servidor.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        alert("Inicio de sesión con Google exitoso");
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
        <div className="register-container">
            <h3>Regístrate en ByteWise</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
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

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                />
                {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Registrando..." : "Registrarse"}
                </button>
            </form>

            <div className="social-login">
                <p>...o regístrate con</p>
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
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                </p>
            </footer>
        </div>
    );
}

export default RegisterScreen;

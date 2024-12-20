import React, { useState } from "react";
import FacebookLogin from "react-facebook-login-lite";
import GoogleLoginButton from "./GoogleLoginButton"; // Importa el componente
import SimulatedAppleLoginButton from "./SimulatedAppleLoginButton";


function RegisterScreen() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({});

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
            try {
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formValues.email,
                        password: formValues.password,
                    }),
                });
                if (response.ok) {
                    alert('Registro exitoso');
                    setFormValues({ email: '', password: '', confirmPassword: '' });
                } else {
                    alert('Error al registrar usuario');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error al conectar con el servidor');
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
        <div className="register-container">
            <p>
                ¿Tienes una cuenta? <a href="/login">¡Inicia sesión aquí!</a>
            </p>

            <h3>Sino te invitamos a registrarte:</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Dirección de correo electrónico"
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
                    placeholder="Confirmar contraseña"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                />
                {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}

                <button type="submit" className="submit-btn">
                    ¡Si! Me quiero registrar en ByteWise
                </button>
            </form>

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

export default RegisterScreen;


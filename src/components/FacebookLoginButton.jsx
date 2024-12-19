import React from "react";
import FacebookLogin from "react-facebook-login-lite";

const FacebookLoginButton = () => {
    return (
        <FacebookLogin
            appId="TU_APP_ID_FACEBOOK" // Reemplaza con tu App ID
            onSuccess={(response) => console.log("Facebook Login Success:", response)}
            onFailure={(error) => console.error("Facebook Login Failed:", error)}
            buttonStyle={{
                backgroundColor: "#4267B2",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Iniciar sesión con Facebook
        </FacebookLogin>
    );
};

export default FacebookLoginButton;

import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log("Google Login Success:", credentialResponse);
                if (onSuccess) onSuccess(credentialResponse);
            }}
            onError={() => {
                console.error("Google Login Failed");
                if (onFailure) onFailure();
            }}
            className="social-btn google-btn"
        />
    );
};

export default GoogleLoginButton;


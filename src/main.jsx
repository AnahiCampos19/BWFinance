import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google" // Importa GoogleOAuthProvider
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="802029685973-ftn3e3avv6rou0kn940a2u3gfidb35c3.apps.googleusercontent.com"> {/* Agrega tu clientId */}
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)

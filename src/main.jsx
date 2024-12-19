import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google" // Importa GoogleOAuthProvider
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="just-cosmos-445203-j2"> {/* Agrega tu clientId */}
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)

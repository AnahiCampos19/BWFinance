import React from 'react';
import '../Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} ByteWise. Todos los derechos reservados.
        <br />
        <a href="/termsofuse">Términos de Uso</a> |{" "}
        <a href="/privacypolicy">Política de Privacidad</a> |{" "}
        <a href="/precontractualesterms">Términos Precontractuales</a>|{""}
        <a href="/eliminaciondatos">Eliminacion de Datos</a>
      </p>
      <div className="social-icons">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;



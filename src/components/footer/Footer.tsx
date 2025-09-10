import React from 'react';
import './Foooter.css';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MinhaEmpresa. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

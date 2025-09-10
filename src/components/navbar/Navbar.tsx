import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa os estilos

const Navbar: React.FC = () => {
  const handleLogout = () => {
    alert("Você clicou em sair.");
    // Se quiser redirecionar para login, por exemplo:
    // navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MinhaEmpresa</Link>
      </div>
      <div className="navbar-links">
        <Link to="/funcionarios">Funcionários</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </nav>
  );
};

export default Navbar;

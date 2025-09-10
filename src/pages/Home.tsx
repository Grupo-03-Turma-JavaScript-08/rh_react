import React from 'react';
import '../Home.css';
import logo from '../assets/logo.png';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo da empresa" className="home-logo" />
      <h1 className="home-text">
        Bem-vindo à nossa plataforma! <br /> Aqui valorizamos pessoas e resultados.
      </h1>
    </div>
  );
};

export default Home;

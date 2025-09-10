import React from 'react';
import '../Sobre.css';

const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-titulo">Sobre Nós</h1>

      <div className="sobre-content">
        <div className="sobre-imagem-container">
          <img
            className="sobre-imagem"
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80"
            alt="Equipe trabalhando"
          />
        </div>

        <div className="sobre-texto-container">
          <p className="sobre-texto">
            A <strong>RH Solution</strong> para médias e grandes empresas. <br />
            Feito sob medida para organizações que buscam eficiência e flexibilidade
            em seus processos de gestão de pessoas — sem complicação, sem trocar de
            sistema, e mantendo sempre a alta performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

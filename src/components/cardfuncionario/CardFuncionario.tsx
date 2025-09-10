import React from 'react';
import './CardFuncionario.css'; // Importa os estilos

type FuncionarioProps = {
  foto: string;
  nome: string;
  email: string;
  cargo: string;
  dataAdmissao: string;
};

const CardFuncionario: React.FC<FuncionarioProps> = ({
  foto,
  nome,
  email,
  cargo,
  dataAdmissao,
}) => {
  return (
    <div className="card-funcionario">
      <img src={foto} alt={nome} className="foto-funcionario" />
      <h3>{nome}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Cargo:</strong> {cargo}</p>
      <p><strong>Admissão:</strong> {dataAdmissao}</p>
    </div>
  );
};

export default CardFuncionario;

import React, { useEffect, useState } from 'react';
import funcionariosData from '../data/funcionarios.json';
import CardFuncionario from '../components/cardfuncionario/CardFuncionario';

type Funcionario = {
    id: number;
    foto: string;
    nome: string;
    email: string;
    cargo: string;
    dataAdmissao: string;
};

const Funcionarios: React.FC = () => {
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

    useEffect(() => {
        setFuncionarios(funcionariosData);
    }, []);

    return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '24px',
      padding: '60px 20px', // Espaço acima e abaixo
      backgroundColor: "#E3EDF9"
    }}
  >
    {funcionarios.map((funcionario) => (
      <CardFuncionario
        key={funcionario.id}
        foto={funcionario.foto}
        nome={funcionario.nome}
        email={funcionario.email}
        cargo={funcionario.cargo}
        dataAdmissao={funcionario.dataAdmissao}
      />
    ))}
  </div>
);
};

export default Funcionarios;
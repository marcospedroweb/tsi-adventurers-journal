import React from 'react';
import RegisterSection from '../Components/RegisterSection';

const Register = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);

    window.document.title = "Adventurer's Journal | Criando conta";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);
  return (
    <main>
      <RegisterSection />
    </main>
  );
};

export default Register;

import React from 'react';
import FormAnyQuestions from '../Components/FormAnyQuestions';
import SectionFormContact from '../Components/SectionFormContact';

const Contact = () => {
  // Coloca o de "entre em contato" aqui mesmo, ai depois usa o componentes abaixo

  React.useEffect(() => {
    window.scrollTo(0, 0);

    window.document.title = "Adventurer's Journal | Contato";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);
  return (
    <main>
      <FormAnyQuestions />
    </main>
  );
};

export default Contact;

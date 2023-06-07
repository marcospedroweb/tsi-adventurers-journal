import React from 'react';
import StartWithPlan from '../Components/StartWithPlan';
import UsersPlans from '../Components/UsersPlans';
import DontWasteTime from '../Components/DontWasteTime';
import FormAnyQuestions from '../Components/FormAnyQuestions';

const Plans = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);

    window.document.title = "Adventurer's Journal | Planos";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);
  return (
    <main>
      <StartWithPlan />
      <UsersPlans />
      <DontWasteTime />
      <FormAnyQuestions />
    </main>
  );
};

export default Plans;

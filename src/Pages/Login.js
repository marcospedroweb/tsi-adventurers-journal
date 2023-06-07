import React from 'react';
import LoginSection from '../Components/LoginSection';

const Login = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);

    window.document.title = "Adventurer's Journal | Login";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);
  return (
    <main>
      <LoginSection />
    </main>
  );
};

export default Login;

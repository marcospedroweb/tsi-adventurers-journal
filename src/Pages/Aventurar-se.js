import React from 'react';
import BannerAdventure from '../Components/BannerAdventure';
import AllModalitys from '../Components/AllModalitys';
import TravelSupport from '../Components/TravelSupport';
import FormAnyQuestions from '../Components/FormAnyQuestions';
import Footer from '../Components/Footer';

const AventurarSe = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    window.document.title = "Adventurer's Journal | Aventurar-se";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);

  return (
    <>
      <main>
        <BannerAdventure />
        <AllModalitys />
        <TravelSupport />
        <FormAnyQuestions />
      </main>
    </>
  );
};

export default AventurarSe;

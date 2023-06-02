import React from 'react';
import BannerAdventure from '../Components/BannerAdventure';
import AllModalitys from '../Components/AllModalitys';
import TravelSupport from '../Components/TravelSupport';
import FormAnyQuestions from '../Components/FormAnyQuestions';
import Footer from '../Components/Footer';

const AventurarSe = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
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

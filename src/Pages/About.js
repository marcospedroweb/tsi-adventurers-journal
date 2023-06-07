import React from 'react';
import BannerAbout from '../Components/BannerAbout';
import SectionAwakenTheAdventurer from '../Components/SectionAwakenTheAdventurer';
import TravelSupport from '../Components/TravelSupport';
import SectionBigReviews from '../Components/SectionBigReviews';

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    window.document.title = "Adventurer's Journal | Sobre nós";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);

  return (
    <main>
      <BannerAbout />
      <SectionAwakenTheAdventurer />
      <TravelSupport />
      <SectionBigReviews />
    </main>
  );
};

export default About;

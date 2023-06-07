import React from 'react';
import BannerHome from '../Components/BannerHome';
import SectionModalityPlan from '../Components/SectionModalityPlan';
import SectionTouristGuide from '../Components/SectionTouristGuide';
import SectionReviews from '../Components/SectionReviews';
import SectionAbout from '../Components/SectionAbout';

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);

    window.document.title = "Adventurer's Journal | Home";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);

  return (
    <main>
      <BannerHome />
      <SectionModalityPlan />
      <SectionTouristGuide />
      {/* <SectionReviews /> */}
      <SectionAbout />
    </main>
  );
};

export default Home;

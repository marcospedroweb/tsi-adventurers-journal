import React from 'react';
import BannerAbout from '../Components/BannerAbout';
import SectionAwakenTheAdventurer from '../Components/SectionAwakenTheAdventurer';
import TravelSupport from '../Components/TravelSupport';
import SectionBigReviews from '../Components/SectionBigReviews';

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
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

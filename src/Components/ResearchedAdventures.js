import React from 'react';
import styles from './ResearchedAdventures.module.css';
import DesktopFilterAdventure from './DesktopFilterAdventure';
import AdventureCard from './AdventureCard';
import MobileFilterAdventure from './MobileFilterAdventure';

const ResearchedAdventures = () => {
  return (
    <section className="row justify-content-between align-items-start">
      <div className="d-none d-lg-block col-12 col-lg-3">
        <DesktopFilterAdventure />
      </div>
      <div className="d-block d-lg-none col-12 col-lg-3">
        <MobileFilterAdventure />
      </div>
      <div className="col-12 col-lg-9">
        <AdventureCard />
        <AdventureCard />
        <AdventureCard />
      </div>
    </section>
  );
};

export default ResearchedAdventures;

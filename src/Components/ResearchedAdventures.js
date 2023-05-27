import React from 'react';
import styles from './ResearchedAdventures.module.css';
import DesktopFilterAdventure from './DesktopFilterAdventure';

const ResearchedAdventures = () => {
  return (
    <section className="row justify-content-between align-items-center">
      <div className="col-12 col-lg-3">
        <DesktopFilterAdventure />
      </div>
      <div className="col-12 col-lg-9"></div>
    </section>
  );
};

export default ResearchedAdventures;

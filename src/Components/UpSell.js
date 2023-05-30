import React from 'react';
import styles from './UpSell.module.css';
import AdventureCard from './AdventureCard';
import AirlineTicked from './AirlineTicked';

const UpSell = () => {
  return (
    <section className={`${styles.section} container-xl`}>
      <div className={`${styles.divUp} bg-white p-3 rounded`}>
        <h2>Que tal garantir sua hospedagem proximo a aventura?</h2>
        <p>Veja alguns hotéis próximos ás suas aventuras.</p>
        <div>
          <AdventureCard hotel={true} best={true} />
          <AdventureCard hotel={true} />
        </div>
      </div>
      <div className={`${styles.divUp} bg-white p-3 rounded mt-5`}>
        <h2>Que tal garantir sua passagem até a aventura?</h2>
        <p>Veja voos de avião que te deixarão proximo a sua aventura.</p>
        <div>
          <AirlineTicked best={true} />
          <AirlineTicked />
          <AirlineTicked />
        </div>
      </div>
    </section>
  );
};

export default UpSell;

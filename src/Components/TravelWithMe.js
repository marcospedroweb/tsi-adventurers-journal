import React from 'react';
import styles from './TravelWithMe.module.css';
import CardLabels from './CardLabels';

const TravelWithMe = () => {
  return (
    <div className={`${styles.divMain} px-2 py-4`}>
      <h2>Viaje Comigo</h2>
      <div
        className="row flex-column flex-lg-row justify-content-between align-items-center"
        style={{ height: 'fit-content' }}
      >
        <CardLabels
          title={'Modalidades Favoritas'}
          labels={[
            {
              icon: 'whatsapp',
              text: '(11) 91010-0101',
              link: 'gaga',
            },
            {
              icon: 'telegram',
              text: '(11) 91010-0101',
            },
            {
              icon: 'email',
              text: 'jorgeemail@jorgememail.com',
            },
          ]}
        />
        <CardLabels
          title={'Locais Favoritos'}
          labels={[
            {
              icon: 'instagram',
              text: 'jorgeredes',
            },
            {
              icon: 'facebook',
              text: 'jorgeredes',
            },
            {
              icon: 'twitter',
              text: 'jorgeredesoficial',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TravelWithMe;

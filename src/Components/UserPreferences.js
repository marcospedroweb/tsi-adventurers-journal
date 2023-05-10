import React from 'react';
import styles from './UserPreferences.module.css';
import CardLabels from './CardLabels';

const UserPreferences = () => {
  return (
    <div className={`${styles.divMain} px-2 py-4`}>
      <h2>Minhas preferências</h2>
      <div
        className="row flex-column flex-lg-row justify-content-between align-items-center"
        style={{ height: 'fit-content' }}
      >
        <CardLabels
          title={'Modalidades Favoritas'}
          labels={[
            {
              icon: '',
              text: 'Paraquedismo',
            },
            {
              icon: '',
              text: 'Escalada',
            },
            {
              icon: '',
              text: 'Trekking',
            },
            {
              icon: '',
              text: 'Base jump',
            },
            {
              icon: '',
              text: 'Surf',
            },
          ]}
        />
        <CardLabels
          title={'Locais Favoritos'}
          labels={[
            {
              icon: '',
              text: 'São Paulo',
            },
            {
              icon: '',
              text: 'Rio de Janeiro',
            },
            {
              icon: '',
              text: 'Las Vegas',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UserPreferences;

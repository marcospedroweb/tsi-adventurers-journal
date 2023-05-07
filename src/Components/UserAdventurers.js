import React from 'react';
import styles from './UserAdventurers.module.css';
import ModalityCard from './ModalityCard';

const UserAdventurers = () => {
  return (
    <div className="">
      <h3 className={styles.divTitle}>Algumas das minhas aventuras</h3>
      <div className="row justify-content-center align-items-center">
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="Profile"
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="Profile"
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="Profile"
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="Profile"
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="Profile"
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="Profile"
        />
      </div>
    </div>
  );
};

export default UserAdventurers;

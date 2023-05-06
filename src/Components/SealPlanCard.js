import React from 'react';
import styles from './SealPlanCard.module.css';

const SealPlanCard = ({ type }) => {
  return (
    <div
      className={`${styles.seal}  ${
        type === 'adventurer' ? styles.adventurer : ''
      } ${type === 'plus' ? styles.plus : ''}`}
    >
      {type === 'gratis' ? (
        <span>Grátis</span>
      ) : (
        <span>{`Adventurer ${type === 'plus' ? 'Plus' : ''}`}</span>
      )}
    </div>
  );
};

export default SealPlanCard;

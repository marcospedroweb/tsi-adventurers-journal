import React from 'react';
import styles from './SmallContact.module.css';

const SmallContact = ({ icon, text, link }) => {
  return (
    <div
      className={`${styles.divMain} d-flex justify-content-between align-items-center mt-2`}
    >
      <a
        href={link}
        target="_blanck"
        className="d-flex justify-content-between align-items-center"
      >
        <div className={styles.divIcon}>
          <img src={`/imgs/${icon}`} alt={text} />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default SmallContact;

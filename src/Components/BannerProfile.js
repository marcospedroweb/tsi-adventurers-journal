import React from 'react';
import styles from './BannerProfile.module.css';

const BannerProfile = ({ img = '' }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: 'url(/imgs/Banner.png)' }}
    ></div>
  );
};

export default BannerProfile;
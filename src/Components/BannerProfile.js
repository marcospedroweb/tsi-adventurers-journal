import React from 'react';
import styles from './BannerProfile.module.css';

const BannerProfile = ({ img }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('data:image/png;base64,${img}')` }}
    ></div>
  );
};

export default BannerProfile;

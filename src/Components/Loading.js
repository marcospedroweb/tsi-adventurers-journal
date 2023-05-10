import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.divMain}>
      <div className="container-xl">
        <div
          className={`${styles.containerLoading} d-flex flex-column justify-content-center align-items-center`}
        >
          <div className={styles.loading}></div>
          <h2>Carregando...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;

import React from 'react';
import styles from './UserOrders.module.css';

const UserOrders = () => {
  return (
    <section className={styles.section}>
      <div className="container-xl">
        <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
          Meus pedidos
        </h2>
      </div>
    </section>
  );
};

export default UserOrders;

import React from 'react';
import styles from './ProfileUserSide.module.css';
import SealPlanCard from './SealPlanCard';

const ProfileUserSide = () => {
  return (
    <section className="col-4">
      <div>
        <div className={styles.divImg}>
          <img src="/imgs/no_user_img.png" alt="" />
        </div>
        <div>
          <h2>Jorge Fernandes da Silva</h2>
          <SealPlanCard type={'gratis'} />
          <SealPlanCard type={'adventurer'} />
          <SealPlanCard type={'plus'} />
        </div>
      </div>
    </section>
  );
};

export default ProfileUserSide;

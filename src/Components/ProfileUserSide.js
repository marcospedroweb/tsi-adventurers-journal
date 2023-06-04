import React from 'react';
import styles from './ProfileUserSide.module.css';
import SealPlanCard from './SealPlanCard';
import LabelCard from './LabelCard';
import { noUserImageBase64 } from '../Helpers/NoUserBase64';

const ProfileUserSide = ({ user }) => {
  const date = new Date(user.created);
  const dateFormated = `Desde ${date.getFullYear()}`;

  return (
    <section className="col-12 col-lg-4 sticky-lg-top">
      <div className={`${styles.divMain}`}>
        <div
          className={`${styles.divImg} position-absolute top-0 start-50 translate-middle`}
        >
          {user.foto_URL && (
            <div style={{ backgroundImage: `url(${user.foto_URL})` }}></div>
          )}
          {!user.foto_URL && (
            <div style={{ backgroundImage: `url(${noUserImageBase64})` }}></div>
          )}
        </div>
        <div className={styles.divName}>
          <h2>{user.name}</h2>

          {user.Guia ? (
            <LabelCard
              text={'Guia turistico'}
              bsClass={'mx-auto text-uppercase fw-normal'}
              stylesCss={{ width: 'fit-content', fontSize: '1rem' }}
            />
          ) : (
            <SealPlanCard type={'plus'} classN={'mx-auto'} />
          )}
          <p className="mt-2">{dateFormated}</p>
        </div>
        <div className={styles.divAbout}>
          <h3>Sobre mim</h3>
          <div className={`${styles.aboutUser}`}>
            <img
              src="/imgs/Mark_Left.svg"
              className="position-absolute top-0 start-0"
              alt=""
            />
            <p>{user.bio ? user.bio : 'Texto não inserido'}</p>
            <img
              src="/imgs/Mark_Right.svg"
              className="position-absolute bottom-0 end-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUserSide;

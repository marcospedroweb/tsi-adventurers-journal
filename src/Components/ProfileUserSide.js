import React from 'react';
import styles from './ProfileUserSide.module.css';
import SealPlanCard from './SealPlanCard';
import { BsFill3CircleFill } from 'react-icons/bs';

const ProfileUserSide = () => {
  return (
    <section className="col-12 col-lg-4 sticky-lg-top">
      <div className={`${styles.divMain} `}>
        <div
          className={`${styles.divImg} position-absolute top-0 start-50 translate-middle`}
        >
          <img src="/imgs/no_user_img.png" alt="" />
        </div>
        <div className={styles.divName}>
          <h2>Jorge Fernandes da Silva</h2>
          <SealPlanCard type={'plus'} />
          <p className="mt-2">Desde 2015</p>
        </div>
        <div className={styles.divAbout}>
          <h3>Sobre mim</h3>
          <div className={`${styles.aboutUser}`}>
            <img
              src="/imgs/Mark_Left.svg"
              className="position-absolute top-0 start-0"
              alt=""
            />
            <p>
              E aí! Eu sou aquela pessoa que está sempre em busca de novas
              aventuras e experiências radicais. Amo viajar e explorar lugares
              diferentes, mas o que me motiva mesmo são os esportes radicais. Já
              pratiquei bungee jumping, rapel, paraquedismo, asa delta, surf,
              entre outros. Cada novo salto ou descida é uma emoção única, e eu
              adoro sentir essa adrenalina que só as atividades radicais podem
              proporcionar. Para mim, não há nada melhor do que sentir aquele
              friozinho na barriga antes de encarar um desafio.
            </p>
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

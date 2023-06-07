import React from 'react';
import styles from './SectionAwakenTheAdventurer.module.css';
import ModalityCard from './ModalityCard';
import ButtonCustom from './ButtonCustom';

const SectionAwakenTheAdventurer = () => {
  //Aqui é o mesmo esquema da home, mostrandos as modalidades
  //usa row e cols do bootstrap
  return (
    <section className={styles.section}>
      <div className="container-xl text-center">
        <h2 className={`${styles.title} fw-bold`}>
          Desperte o <span className="text-green-blue">Aventureiro(a)</span> que
          há em você
        </h2>
        <p>
          Oferecemos uma diversidade opções de viagens com esportes radicais.
          <span className="d-block mt-2 fw-semibold mb-5">
            Veja os mais famosos
          </span>
        </p>
        <div className="row justify-content-between aling-items-center">
          <ModalityCard
            modalityName={'Trekking'}
            img={
              'https://tsi-adventurers-journal.vercel.app/storage/modalidades_images/trekking.png'
            }
            desc={
              'Explore trilhas incríveis e descubra paisagens deslumbrantes em caminhadas pela natureza.'
            }
            col="4"
            showIn="home"
          />
          <ModalityCard
            modalityName={'Paraquedismo'}
            img={
              'https://tsi-adventurers-journal.vercel.app/storage/modalidades_images/paraquedismo.png'
            }
            desc={
              'Experimente a emoção da queda livre e a sensação de liberdade enquanto desce suavemente com um paraquedas.'
            }
            col="4"
            showIn="home"
          />
          <ModalityCard
            modalityName={'Rapel'}
            img={
              'https://tsi-adventurers-journal.vercel.app/storage/modalidades_images/rapel.png'
            }
            desc={
              'Desça paredões e encare desafios verticais com segurança e adrenalina.'
            }
            col="4"
            showIn="home"
          />
        </div>
        <div className="mt-4">
          <ButtonCustom
            bsClass="fw-bold text-uppercase py-2 px-4"
            style={{ fontSize: '1.15rem' }}
          >
            Buscar aventuras
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default SectionAwakenTheAdventurer;

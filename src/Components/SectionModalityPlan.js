import React from 'react';
import styles from './SectionModalityPlan.module.css';
import ModalityCard from './ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';

const SectionModalityPlan = () => {
  //Aqui você faz a seção com linear gradient do azul escuro para o claro
  //Faz mostrar algumas modalidades
  //E tambem mostrar os planos (Para deixar flutuando, tem que usar o position relative em toda div PAI e position absolute nos planos)
  return <>
    <div id={styles.body} className='row justify-content-between align-items-start'>
      <div className='col-12 col-lg-4'>

        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="3"
          showIn="home"
          loading={true}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="3"
          showIn="home"
          loading={true}
        />
      </div>
      <div className='col-12 col-lg-4'>
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="3"
          showIn="home"
          loading={true}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="3"
          showIn="home"
          loading={true}
        />
      </div>
      <div className='col-12 col-lg-4'>
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="3"
          showIn="home"
          loading={true}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="3"
          showIn="home"
          loading={true}
        />
      </div>
      <ButtonCustom>VER MAIS MODALIDADES</ButtonCustom>
    </div>
  </>
};

export default SectionModalityPlan;

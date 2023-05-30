import React from 'react';
import styles from './SectionModalityPlan.module.css';
import ModalityCard from './ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';

const SectionModalityPlan = () => {
  //Aqui você faz a seção com linear gradient do azul escuro para o claro
  //Faz mostrar algumas modalidades
  //E tambem mostrar os planos (Para deixar flutuando, tem que usar o position relative em toda div PAI e position absolute nos planos)
  return <section id={styles.body} >
    <div className='container-xl'>

      <div className='row justify-content-between align-items-start text-center'>

        <h2>Conheça algumas das modalidades</h2>

        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="home"
          loading={false}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="home"
          loading={false}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="home"
          loading={false}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="home"
          loading={false}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="home"
          loading={false}
        />
        <ModalityCard
          modalityName={'Paraquedismo'}
          img={'/imgs/paraquedas.jpeg'}
          desc={''}
          col="4"
          showIn="home"
          loading={false}
        />
        <div className='text-center'>
          <ButtonCustom bsClass='m-3'>VER MAIS MODALIDADES</ButtonCustom>
        </div>
      </div>
    </div>
  </section>
};

export default SectionModalityPlan;

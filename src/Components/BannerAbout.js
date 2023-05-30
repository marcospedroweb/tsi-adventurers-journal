import React from 'react';
import styles from './BannerAbout.module.css';

const BannerAbout = () => {

  return <>

    <div id={styles.body} className='row justify-content-between align-items-start'>

      <div className='col-12 col-lg-4 m-5 p-5'>
        <h1>Adventurer's Journal</h1>
        <div className='m-5'>
          <p>    É uma plataforma que oferece diversas opções
          de viagens com esportes radicais em diferentes
          regiões do mundo, e tudo isso de acordo com o
          seu orçamento e preferências.
          Nossa equipe está sempre disponível para
          auxiliá-lo em todas as etapas da viagem, desde o
          planejamento até o retorno.
          Além disso, oferecemos diferentes planos,
          incluindo um gratuito, para que você possa
          escolher o que melhor se encaixa nas suas
          necessidades. Estamos aqui para tornar sua
          viagem uma experiência incrível e inesquecível!</p>
      </div>
        </div>
        
      <div id={styles.aboutimg} className='col-12 col-lg-8 m-5'>

      </div>


    </div>


  </>;
};

export default BannerAbout;

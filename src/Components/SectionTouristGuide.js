import React from 'react';
import styles from './SectionTouristGuide.module.css';
import ButtonCustom from '../Components/ButtonCustom';


const SectionTouristGuide = () => {
  //Aqui você faz aquela seção para os guias turisticos, usando position
  return <>
    <div id={styles.body} className='row align-items-center text-center'>
      <h1>Seja o guia dos sonhos de nossos clientes aventureiros!</h1>


      <div className='col-12 col-lg-6'>
        <div>
          <div id={styles.img1}></div>
          <div id={styles.textwindow} className='justify-content-center text-center'>
            <h5>Oportunidades para agência de turismo</h5>
            <p>Se você é tem uma agência de turismo que busca expandir
              seus negócios no mercado de esportes radicais, temos uma ótima oportunidade
              para você. Estamos em busca de parceiros que possam nos ajudar a oferecer pacotes personalizados
              de viagem com atividades emocionantes para nossos clientes.
            </p>
            <ButtonCustom>ver</ButtonCustom>
          </div>
        </div>
      </div>


      <div className='col-12 col-lg-6'>
        <div>
          <div id={styles.textwindow} className='justify-content-center text-center'>
            <h5>Oportunidades para agência de turismo</h5>
            <p>Se você é tem uma agência de turismo que busca expandir
              seus negócios no mercado de esportes radicais, temos uma ótima oportunidade
              para você. Estamos em busca de parceiros que possam nos ajudar a oferecer pacotes personalizados
              de viagem com atividades emocionantes para nossos clientes.
            </p>
            <ButtonCustom>ver</ButtonCustom>
          </div>
          <div id={styles.img2}></div>
        </div>
      </div>




    </div>


  </>;
};

export default SectionTouristGuide;

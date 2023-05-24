import React from 'react';
import styles from './SectionAbout.module.css';
import ButtonCustom from '../Components/ButtonCustom';


const SectionAbout = () => {
  //Aqui você faz aquela seção se sobre nós
  //Ai o botão leva para o about
  return <>

    <div id={styles.body}>
      <div className='row justify-content-between align-items-start text-center'>
        <h2>Conheça mais sobre nos</h2>
        <div id={styles.logo} className='d-flex flex-column col-12 text-center m-5' style={{ width: "668px", height: "750px", margin: "10px" }} >
        </div>
        <div className='col-12 col-lg-6 m-5 p-5'>
          <p>sobre</p>
          <h1>Adventurer's Journey</h1>
          <p>Nós somos um site especializado em viagens
            com esportes radicais, criado para aqueles que
            buscam adrenalina e aventura em suas férias.
          </p>
          <p>
            Oferecemos uma ampla variedade de opções de
            atividades emocionantes, desde paraquedismo
            até rafting, para que você possa escolher aquelas
            que mais lhe agradam.
          </p>
          <p>
            Além disso, nosso site permite que você
            ajuste sua viagem de acordo com a região e
            seu orçamento, para que possa aproveitar ao máximo
            a sua aventura.
          </p>
          <p>
            Conheça mais sobre a nossa plataforma, serviços e equipe
          </p>
          <ButtonCustom bsClass={"mt-4"}>Conhecer Mais Sobre</ButtonCustom>
        </div>
      </div>

    </div>







  </>;
};

export default SectionAbout;

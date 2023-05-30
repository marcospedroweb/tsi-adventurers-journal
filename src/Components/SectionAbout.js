import React from "react";
import styles from "./SectionAbout.module.css";
import ButtonCustom from "../Components/ButtonCustom";

const SectionAbout = () => {
  //Aqui você faz aquela seção se sobre nós
  //Ai o botão leva para o about
  return (
    <section id={styles.body} className="pb-5">
      <div className="container-xl">
        <h2>Conheça mais sobre nos</h2>
        <div className="row flex-column flex-lg-row justify-content-between align-items-center text-center">
          <div className="col-12 col-lg-6">
            <div id={styles.logo}></div>
          </div>
          <div id={styles.texto} className="col-12 col-lg-6 pt-4 pt-lg-0 pb-5 pb-lg-0 text-center text-lg-start">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/imgs/infoIcon.png" />
              <p className="mb-0 ms-2"> Sobre</p>
            </div>
            <h3>Adventurer's Journey</h3>
            <p>
              Nós somos um site especializado em viagens com esportes radicais,
              criado para aqueles que buscam adrenalina e aventura em suas
              férias.
            </p>
            <p>
              Oferecemos uma ampla variedade de opções de atividades
              emocionantes, desde paraquedismo até rafting, para que você possa
              escolher aquelas que mais lhe agradam.
            </p>
            <p>
              Além disso, nosso site permite que você ajuste sua viagem de
              acordo com a região e seu orçamento, para que possa aproveitar ao
              máximo a sua aventura.
            </p>
            <p>Conheça mais sobre a nossa plataforma, serviços e equipe</p>
            <ButtonCustom bsClass={"mt-4"}>Conhecer Mais Sobre</ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;

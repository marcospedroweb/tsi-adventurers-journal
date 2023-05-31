import React from "react";
import styles from "./BannerAbout.module.css";

const BannerAbout = () => {
  return (
    <section id={styles.body}>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-4 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <img src="/imgs/infoIcon.png" />
            <p className="mb-0 ms-2"> Sobre</p>
          </div>
          <h2>Adventurer's Journal</h2>
          <div className="text-start mt-2">
            <p>
              É uma plataforma que oferece diversas opções de viagens com
              esportes radicais em diferentes regiões do mundo, e tudo isso de
              acordo com o seu orçamento e preferências. Nossa equipe está
              sempre disponível para auxiliá-lo em todas as etapas da viagem,
              desde o planejamento até o retorno. Além disso, oferecemos
              diferentes planos, incluindo um gratuito, para que você possa
              escolher o que melhor se encaixa nas suas necessidades. Estamos
              aqui para tornar sua viagem uma experiência incrível e
              inesquecível!
            </p>
          </div>
        </div>
        <div id={styles.aboutimg} className="col-12 col-lg-8 m-5"></div>
      </div>
    </section>
  );
};

export default BannerAbout;

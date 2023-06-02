import React from 'react';
import styles from './BannerAbout.module.css';

const BannerAbout = () => {
  return (
    <section id={styles.body}>
      <div className="container-xl">
        <div className="row flex-column-reverse flex-lg-row justify-content-between align-items-center">
          <div
            className={`${styles.divText} col-12 col-lg-5 text-start mt-3 mt-lg-0 text-center text-lg-start`}
          >
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <img src="/imgs/infoIcon.png" />
              <h2 className="mb-0 ms-2">Sobre</h2>
            </div>
            <h3>Adventurer's Journal</h3>
            <div className="text-center text-lg-start mt-2">
              <p>
                É uma plataforma que oferece diversas opções de viagens com
                esportes radicais em diferentes regiões do mundo.
              </p>
              <p>
                Nossa equipe está sempre disponível para auxiliá-lo em todas as
                etapas da viagem, desde o planejamento até o retorno. Além
                disso, oferecemos diferentes planos, incluindo um gratuito, para
                que você possa escolher o que melhor se encaixa nas suas
                necessidades.
              </p>
              <p>
                Estamos aqui para tornar sua viagem uma experiência incrível e
                inesquecível!
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            {/* <div id={styles.aboutimg}></div> */}
            <img
              src="/imgs/3img.png"
              className="d-none d-lg-block w-100"
              alt=""
            />
            <img
              src="/imgs/about_mobile_banner.png"
              className="d-blok d-lg-none w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;

import React from 'react';
import styles from './SectionTouristGuide.module.css';
import ButtonCustom from '../Components/ButtonCustom';
import { useNavigate } from 'react-router-dom';

const SectionTouristGuide = () => {
  const navigate = useNavigate();
  return (
    <section id={styles.body}>
      <div className="container-xl">
        <div className="row flex-column align-items-center text-center">
          <h2>Seja o guia dos sonhos de nossos aventureiros!</h2>

          <div className="col-12 col-lg-6 align-self-start d-none d-lg-block">
            <div className={`${styles.img1} position-relative`}>
              <div
                className={`${styles.divText} justify-content-center text-center position-absolute top-50 translate-middle-y rounded`}
              >
                <h3>Oportunidades para guias turisticos</h3>
                <p>
                  {' '}
                  Se você é um guia turístico experiente e apaixonado por
                  esportes radicais, temos uma oportunidade única para você!
                  Estamos em busca de profissionais que possam liderar nossos
                  clientes em aventuras emocionantes ao redor do mundo.
                </p>
                <ButtonCustom
                  bsClass="text-uppercase"
                  onClick={() => {
                    navigate('/criar-conta?guia=true');
                  }}
                >
                  Me inscrever
                </ButtonCustom>
              </div>
            </div>
          </div>
          {/* MOBILE */}
          <div className="col-12 d-block d-lg-none">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className={`${styles.img1}`}></div>
              <div
                className={`${styles.divText} justify-content-center text-center rounded mt-3 p-4`}
              >
                <h3>Oportunidades para guias turisticos</h3>
                <p>
                  Se você é tem uma agência de turismo que busca expandir seus
                  negócios no mercado de esportes radicais, temos uma ótima
                  oportunidade para você. Estamos em busca de parceiros que
                  possam nos ajudar a oferecer pacotes personalizados de viagem
                  com atividades emocionantes para nossos clientes.
                </p>
                <ButtonCustom
                  bsClass="text-uppercase"
                  onClick={() => {
                    navigate('/criar-conta?guia=true');
                  }}
                >
                  Me inscrever
                </ButtonCustom>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 align-self-end d-none d-lg-block mt-3">
            <div className={`${styles.img2} position-relative`}>
              <div
                className={`${styles.divText} justify-content-center text-center position-absolute top-50 translate-middle-y rounded`}
              >
                <h3>Oportunidades para agência de turismo</h3>
                <p>
                  Se você é tem uma agência de turismo que busca expandir seus
                  negócios no mercado de esportes radicais, temos uma ótima
                  oportunidade para você. Estamos em busca de parceiros que
                  possam nos ajudar a oferecer pacotes personalizados de viagem
                  com atividades emocionantes para nossos clientes.
                </p>
                <ButtonCustom
                  bsClass="text-uppercase"
                  onClick={() => {
                    navigate('/criar-conta?guia=true');
                  }}
                >
                  Me inscrever
                </ButtonCustom>
              </div>
            </div>
          </div>
          {/* MOBILE */}
          <div className="col-12 d-block d-lg-none mt-4">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className={`${styles.img2}`}></div>
              <div
                className={`${styles.divText} justify-content-center text-center rounded mt-3 p-4`}
              >
                <h3>Oportunidades para agência de turismo</h3>
                <p>
                  Se você é tem uma agência de turismo que busca expandir seus
                  negócios no mercado de esportes radicais, temos uma ótima
                  oportunidade para você. Estamos em busca de parceiros que
                  possam nos ajudar a oferecer pacotes personalizados de viagem
                  com atividades emocionantes para nossos clientes.
                </p>
                <ButtonCustom
                  bsClass="text-uppercase"
                  onClick={() => {
                    navigate('/criar-conta?guia=true');
                  }}
                >
                  Me inscrever
                </ButtonCustom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTouristGuide;

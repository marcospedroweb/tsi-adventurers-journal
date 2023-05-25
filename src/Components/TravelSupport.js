import React from 'react';
import styles from './TravelSupport.module.css';

const TravelSupport = () => {
  return (
    <section className={styles.section}>
      <div className="container-xl">
        <h2 className="text-center">Oferecemos suporte em toda sua viagem</h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src="/imgs/vetor_step_to_step.svg" alt="" />
                <p>1. Você escolhe a modalidade, data e local</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src="/imgs/vetor_step_to_step.svg" alt="" />
                <p>2. Sua reserva é feita e Informamos o guia turistico</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src="/imgs/vetor_step_to_step.svg" alt="" />
                <p>3. Você se dirige até o local</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src="/imgs/vetor_step_to_step.svg" alt="" />
                <p>4. Você tem a melhor experiência na sua aventura</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <img src="/imgs/vetor_step_to_step_final.svg" alt="" />
                <p>5. Você volta para sua casa com otimas lembranças</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div
                className={styles.divImg}
                style={{ backgroundImage: `url(/imgs/step1.png)` }}
              ></div>
              <div
                className={styles.divImg}
                style={{ backgroundImage: `url(/imgs/step2.png)` }}
              ></div>
              <div
                className={styles.divImg}
                style={{ backgroundImage: `url(/imgs/step3.png)` }}
              ></div>
              <div
                className={styles.divImg}
                style={{ backgroundImage: `url(/imgs/step4.png)` }}
              ></div>
              <div
                className={styles.divImg}
                style={{ backgroundImage: `url(/imgs/step5.png)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSupport;

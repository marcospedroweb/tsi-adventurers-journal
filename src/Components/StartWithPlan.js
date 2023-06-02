import React from 'react';
import styles from './StartWithPlan.module.css';
import CardsPlans from './CardsPlans';

const StartWithPlan = () => {
  return (
    <section className={styles.section}>
      <div className="container-xl text-center">
        <h2 className="mb-3">
          Comece a <span className="text-green-blue">se aventurar</span> agora e
          escolha o <span className="text-green-blue">plano ideal</span> para
          você depois!
        </h2>
        <p>
          Desperte o aventureiro que há em você com nossos serviços gratuitos.
        </p>
        <p className="mb-5">
          E se quiser levar suas experiências para o próximo nível e aproveitar
          descontos exclusivos, explore nossos planos e escolha o que melhor se
          adequa às suas aventuras
        </p>
        <CardsPlans dark={true} />
      </div>
    </section>
  );
};

export default StartWithPlan;

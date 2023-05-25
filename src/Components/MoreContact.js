import React from 'react';
import styles from './MoreContact.module.css';
import SmallContact from './SmallContact';

const MoreContact = () => {
  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-start align-items-center`}
    >
      <h3 className="visually-hidden">Outras formas de contato</h3>
      <div
        className={`${styles.logo} d-flex justify-content-center align-items-center`}
      >
        <img src="/imgs/logo.svg" alt="" />
      </div>
      <p className="align-self-lg-start mt-2 mb-4">
        <small>
          Nosso atendimento está disponível de segunda a sábado, em horarios
          comerciais.
        </small>
      </p>

      <div className="d-flex flex-column gap-4 gap-lg-0 align-self-lg-start mb-4 mb-lg-0">
        <SmallContact
          icon={'whatsapp.svg'}
          text="(11) 90000-0000"
          link="https://wa.me//5511978712340?text=Olá! Gostaria de falar com a Lordello Joias."
        />
        <SmallContact
          icon={'email.svg'}
          text="adventurerj.suporte@adventurerj.com"
          link="mailto:email@email.com"
        />
      </div>
    </div>
  );
};

export default MoreContact;

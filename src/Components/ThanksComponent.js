import React from 'react';
import styles from './ThanksComponent.module.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';

const ThanksComponent = () => {
  const navigate = useNavigate();
  return (
    <section className={`${styles.section} container-xl`}>
      <div className="d-flex justify-content-center align-items-center">
        <div className={styles.thanks}>
          <h2>Seu pedido foi concluido!</h2>
          <div className="mt-5 mb-4">
            <BsCheckCircleFill size={'4rem'} color="#87FAD1" />
          </div>
          <h3>Obrigado pela sua compra!</h3>
          <p>O ID da sua compra é: ADVENTURE058856541</p>
          <ButtonCustom
            onClick={() => {
              navigate('/');
            }}
          >
            Continuar comprando
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default ThanksComponent;

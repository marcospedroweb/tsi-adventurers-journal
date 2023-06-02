import React from 'react';
import styles from './DontWasteTime.module.css';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';

const DontWasteTime = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className="container-xl">
        <h2>
          Não perca mais tempo e venha se juntar a nossa comunidade de
          aventureiros!
        </h2>
        <p>Estamos ansiosos para ouvir suas aventuras conosco!</p>
        <ButtonCustom
          bsClass={'fw-bold text-uppercase'}
          onClick={() => {
            navigate('/aventurar-se');
          }}
        >
          Me aventurar
        </ButtonCustom>
      </div>
    </section>
  );
};

export default DontWasteTime;

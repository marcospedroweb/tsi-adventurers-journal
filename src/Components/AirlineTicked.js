import React from 'react';
import styles from './AirlineTicked.module.css';
import LabelCard from './LabelCard';
import { BsFillAirplaneFill } from 'react-icons/bs';
import ButtonCustom from './ButtonCustom';

const AirlineTicked = ({ best }) => {
  return (
    <div
      className={`${styles.divMain} d-flex justify-content-between align-items-center gap-5`}
    >
      <div className={styles.divImg}>
        <img src="/imgs/gol_logo.png" alt="" />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <LabelCard title={'Origem'} text={'GRU - 08:30'} />
          <BsFillAirplaneFill
            className="mx-2"
            style={{ transform: 'rotate(90deg)' }}
          />
          <LabelCard title={'Origem'} text={'GRI - 10:50'} />
        </div>
        <LabelCard title={'Data do Voo'} text={'20/12/2020'} bsClass={'ms-3'} />
        <LabelCard title={'Duração'} text={'2h 20min'} bsClass={'ms-3'} />
      </div>
      <div className={styles.price}>
        {best && (
          <LabelCard
            text="Menor preço"
            bsClass={'py-2 px-3 text-uppercase'}
            stylesCss={{
              color: '#87FAD1',
              backgroundColor: '#283040',
            }}
          />
        )}
        <div>
          <p>R$ 1.150,99</p>
          <ButtonCustom type="link" link="#">
            Saber mais
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default AirlineTicked;

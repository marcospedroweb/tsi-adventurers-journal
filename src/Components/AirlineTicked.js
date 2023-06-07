import React from 'react';
import styles from './AirlineTicked.module.css';
import LabelCard from './LabelCard';
import { BsFillAirplaneFill } from 'react-icons/bs';
import ButtonCustom from './ButtonCustom';

const AirlineTicked = ({ data, best }) => {
  return (
    <div
      className={`${styles.divMain} d-flex flex-column flex-lg-row justify-content-between align-items-center gap-5 w-100`}
    >
      <div
        className={`${styles.divImg} d-flex justify-content-center align-items-center bg-white p-4 rounded align-self-stretch`}
      >
        <div className="bg-white rounded h-100 d-flex justify-content-center align-items-center">
          <img src={`/imgs/${data.image}`} alt="" />
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <LabelCard
            title={'Origem'}
            text={`${data.origin.name} - ${data.origin.time}`}
          />
          <BsFillAirplaneFill
            className="mx-2 my-3 my-lg-0"
            style={{ transform: 'rotate(90deg)' }}
          />
          <LabelCard
            title={'Origem'}
            text={`${data.destination.name} - ${data.destination.time}`}
          />
        </div>
        <LabelCard
          title={'Data do Voo'}
          text={data.date}
          bsClass={'ms-0 ms-lg-3 mt-2 mt-lg-0'}
        />
        <LabelCard
          title={'Duração'}
          text={data.duration}
          bsClass={'ms-0 ms-lg-3 mt-2 mt-lg-0'}
        />
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
          <p>{data.price}</p>
          <ButtonCustom type="link">Saber mais</ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default AirlineTicked;

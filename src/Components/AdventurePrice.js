import React from 'react';
import styles from './AdventurePrice.module.css';
import LabelCard from './LabelCard';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';

const AdventurePrice = ({
  best = false,
  price,
  per,
  idAdventure,
  data,
  isHotel,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.divMain} align-self-stretch`}>
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

      <div className={`d-flex justify-content-center align-items-end`}>
        <span className="text-white fw-bold me-2" style={{ fontSize: '2rem' }}>
          R$
        </span>
        <span
          className="text-white fw-bold"
          style={{ fontSize: '2.625rem', lineHeight: '60px' }}
        >
          2.500
        </span>
      </div>
      <div>
        <span className="text-white" style={{ fontSize: '.9rem' }}>
          por pessoa
        </span>
      </div>
      <div>
        {!isHotel && (
          <ButtonCustom
            bsClass={'mt-3'}
            onClick={() => {
              const cart = JSON.parse(window.localStorage.getItem('cart'));
              if (cart)
                window.localStorage.setItem(
                  'cart',
                  JSON.stringify([...cart, 2]),
                );
              else window.localStorage.setItem('cart', JSON.stringify([2]));
              navigate('/carrinho');
            }}
          >
            Escolher aventura
          </ButtonCustom>
        )}
        {isHotel && (
          <ButtonCustom type="link" bsClass={'mt-3'} link={'#'}>
            Saber mais
          </ButtonCustom>
        )}
      </div>
    </div>
  );
};

export default AdventurePrice;

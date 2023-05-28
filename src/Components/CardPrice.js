import React from 'react';
import styles from './CardPrice.module.css';
import FormatPrice from '../Helpers/FormatPrice';

const CardPrice = ({
  price,
  per,
  texts,
  total,
  totalDescount,
  method,
  bsClass,
}) => {
  return (
    <div
      className={`${styles.divMain} ${bsClass} py-3 d-flex flex-column justify-content-start align-items-center align-self-stretch`}
    >
      <div className={styles.divPrice}>
        <span className="d-block">R$ {price}</span>
        <span className="d-block">{per}</span>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 px-4 mt-3">
        {texts.map(({ text, price }) => {
          return (
            <div
              key={text + price}
              className={`${styles.divReceipt} d-flex  justify-content-between align-items-center w-100 mb-2`}
            >
              <span>{text}</span>
              <span>{FormatPrice(price)}</span>
            </div>
          );
        })}
        <div className="d-flex  justify-content-between align-items-center w-100 mt-2 fs-5">
          <span className="text-uppercase fw-bold">Total: </span>
          <div>
            {method === 'No boleto ou Pix' && (
              <span
                className="me-1"
                style={{
                  color: '#9B9B9B',
                  fontSize: '.85rem',
                  textDecoration: 'line-through',
                }}
              >
                R$ {total}
              </span>
            )}
            <span className="text-uppercase fw-bold">R$ {totalDescount}</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        {method === 'No boleto ou Pix' && (
          <>
            <span
              className="mt-4"
              style={{ color: '#87FAD1', fontSize: '.9rem' }}
            >
              Ganhe <span className="fw-bold">10% de desconto</span>
            </span>
            <span
              className="text-uppercase d-block"
              style={{ color: '#87FAD1' }}
            >
              {method}
            </span>
          </>
        )}
        {method === 'No cartão de credito' && (
          <span className="text-uppercase mt-4">{method}</span>
        )}
      </div>
    </div>
  );
};

export default CardPrice;

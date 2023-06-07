import React from 'react';
import styles from './CardPrice.module.css';
import SealPlanCard from './SealPlanCard';

const CardPrice = ({
  price,
  per,
  texts,
  total,
  totalDescount,
  method,
  bsClass,
  size,
  seal,
  order,
}) => {
  if (size === 'small')
    return (
      <div className={bsClass}>
        <div
          className={`${styles.divMain}  py-3 d-flex flex-column justify-content-start align-items-center align-self-stretch w-100`}
        >
          <SealPlanCard type={seal} />
          <div className="d-flex flex-column justify-content-center align-items-center w-100 px-4 mt-3">
            {texts.map(({ text, price }) => {
              return (
                <div
                  key={text}
                  className={`${styles.divReceipt} d-flex  justify-content-between align-items-center w-100 mb-2`}
                >
                  <span>{text}</span>
                  <span>{price}</span>
                </div>
              );
            })}
            <div className="d-flex  justify-content-between align-items-center w-100 mt-2 fs-5">
              <span className="text-uppercase fw-bold me-0 me-lg-5">
                Total:{' '}
              </span>
              <div>
                <span
                  className="me-1 d-block d-sm-inline"
                  style={{
                    color: '#9B9B9B',
                    fontSize: '.85rem',
                    textDecoration: 'line-through',
                  }}
                >
                  {total}
                </span>
                <span className="text-uppercase fw-bold">{totalDescount}</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <span
              className="mt-4"
              style={{ color: '#87FAD1', fontSize: '.9rem' }}
            >
              Ganhe{' '}
              <span className="fw-bold">
                {seal === 'plus' ? '15%' : seal === 'adventurer' ? '10%' : '5%'}{' '}
                de desconto
              </span>
            </span>
            {method === 'No cartão de credito' && (
              <span className="text-uppercase mt-4">{method}</span>
            )}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={`${styles.divMain} ${bsClass} py-3 d-flex flex-column justify-content-start align-items-center align-self-stretch`}
      >
        <div className={styles.divPrice}>
          <span className="d-block">{price}</span>
          <span className="d-block">{per}</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center w-100 px-4 mt-3">
          {texts.map(({ text, price }) => {
            return (
              <div
                key={text}
                className={`${styles.divReceipt} d-flex  justify-content-between align-items-center w-100 mb-2`}
              >
                <span>{text}</span>
                <span>{price}</span>
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
                  {total}
                </span>
              )}
              <span className="text-uppercase fw-bold">{totalDescount}</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          {order ? (
            <span className="text-uppercase mt-4">{method}</span>
          ) : method === 'No boleto ou Pix' ? (
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
          ) : (
            <span className="text-uppercase mt-4">{method}</span>
          )}
        </div>
      </div>
    );
};

export default CardPrice;

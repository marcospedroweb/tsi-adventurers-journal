import React from 'react';
import styles from './BannerHome.module.css';
import ButtonCustom from '../Components/ButtonCustom';
import { useNavigate } from 'react-router-dom';
const BannerHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id={styles.banner}>
        <div className="container-xl h-100">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div>
              <h2>
                A coragem é o combustível para{' '}
                <span className="d-inline d-lg-block">novas experiências</span>
              </h2>
            </div>
            <div>
              <p>Experiencie esportes radicais com base no seu orçamento</p>
            </div>
            <div>
              <ButtonCustom
                bsClass={'fw-bold'}
                style={{ fontSize: '1.25rem', padding: '12px 16px' }}
                onClick={() => {
                  navigate('/aventurar-se');
                }}
              >
                ME AVENTURAR
              </ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome;

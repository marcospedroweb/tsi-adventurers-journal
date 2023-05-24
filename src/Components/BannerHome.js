import React from 'react';
import styles from './BannerHome.module.css';
import ButtonCustom from '../Components/ButtonCustom';
const BannerHome = () => {
  //Aqui você faz o banner da Home
  return (
    <>
      <div id={styles.banner}>

        <div className="container-xl">
          <div className="d-flex justify-content-center align-items-center">
            <h1>A coragem é o combustível para novas experiências</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p>Experiencie esportes radicais com base no seu orçamento</p>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <ButtonCustom>ME AVENTURAR</ButtonCustom>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome;

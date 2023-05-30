import React from "react";
import styles from "./BannerHome.module.css";
import ButtonCustom from "../Components/ButtonCustom";
const BannerHome = () => {
  //Aqui você faz o banner da Home
  return (
    <>
      <div id={styles.banner}>
        <div className="container-xl h-100">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div>
              <h2>A coragem é o combustível para novas experiências</h2>
            </div>
            <div>
              <p>Experiencie esportes radicais com base no seu orçamento</p>
            </div>
            <div>
              <ButtonCustom>ME AVENTURAR</ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome;

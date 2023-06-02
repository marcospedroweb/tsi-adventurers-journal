import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-xl">
        <div className="d-flex flex-column justify-content-between align-items-center align-items-lg-start w-100">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start w-100">
            <div>
              <img src="/imgs/logo.svg" alt="" />
            </div>
            <div className="text-center text-lg-start mt-4 mt-lg-0">
              <h2>Paginas</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/aventurar-se">Aventurar-se</Link>
                </li>
                <li>
                  <Link to="/planos">Planos</Link>
                </li>
                <li>
                  <Link to="/sobre-nos">Sobre nós</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>
            <div className="text-center text-lg-start mt-4 mt-lg-0">
              <h2>Sobre nós</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/sobre-nos">Nossa história</Link>
                </li>
              </ul>
            </div>
            <div className="text-center text-lg-start mt-4 mt-lg-0">
              <h2>Contato e Suporte</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contato">Fale conosco</Link>
                </li>
                <li>
                  <Link to="/sobre-nos#">Trabalhe conosco</Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 mt-lg-0">
              <h2>Redes sociais</h2>
              <ul
                className={`${styles.sociais} list-unstyled d-flex justify-content-between align-items-center`}
              >
                <li>
                  <a href="#" target="_blanck">
                    <img src="/imgs/linkedin.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <img src="/imgs/twitter.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <img src="/imgs/facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <img src="/imgs/instagram.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <span className="text-white mt-5 fw-semibold">
              Todos os direitos reservados © 2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

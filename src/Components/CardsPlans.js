import React from 'react';
import styles from './CardsPlans.module.css';
import { BsCheckLg, BsX, BsXLg } from 'react-icons/bs';
import LabelCard from './LabelCard';
import ButtonCustom from './ButtonCustom';

const CardsPlans = ({ dark }) => {
  if (dark)
    return (
      <div
        className={`${styles.divMain} row flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-start `}
      >
        <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0">
          <div className={`${styles.card} ${styles.dark}`}>
            <h3>Gratis</h3>
            <p>
              <span>R$ 0</span>/mensal
            </p>
            <div className={styles.textHidden}>
              <p>Para quem quer aventuras com esportes radicais</p>
            </div>
            <div className="mt-4">
              <ul className="list-unstyled">
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Acesso total ao site</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Segurança nas aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Suporte em horarios comerciais</span>
                </li>
                <li className={styles.disabled}>
                  <BsX />
                  <span>Sem vagas exclusivas</span>
                </li>
                <li className={styles.disabled}>
                  <BsX />
                  <span>Sem promoções unicas</span>
                </li>
                <li className={styles.disabled}>
                  <BsX />
                  <span>Sem promoção em aventuras</span>
                </li>
                <li className={styles.disabled}>
                  <BsX />
                  <span>Sem promoção em hospedagens</span>
                </li>
                <li className={styles.disabled}>
                  <BsX />
                  <span>Sem promoção em passagens aereas</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ButtonCustom>Escolher plano</ButtonCustom>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0">
          <div className={`${styles.card} ${styles.dark} ${styles.cardLight}`}>
            <div>
              <LabelCard
                text={'Mais popular'}
                bsClass={'py-2 px-3 mb-3'}
                stylesCss={{ width: 'fit-content', color: '#87FAD1' }}
              />
            </div>
            <h3 className="fw-bold">Adventurer</h3>
            <p>
              <span>R$ 150</span>/mensal
            </p>
            <div className={styles.textHidden}>
              <p>Para quem quer encontrar viagens dentro do seu orçamento</p>
            </div>
            <div className="mt-4">
              <ul className="list-unstyled">
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Acesso total ao site</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Segurança nas aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Suporte 24/7</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Vaga com prioridade em aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoção em aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoção em hospedagens</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoção em passagens aereas</span>
                </li>
                <li className={styles.disabled}>
                  <BsCheckLg />
                  <span>Sem Promoções exclusivas</span>
                </li>
                <li className={styles.disabled}>
                  <BsCheckLg />
                  <span>Sem Vagas exclusivas em aventuras</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ButtonCustom dark={true}>Escolher plano</ButtonCustom>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0">
          <div className={`${styles.card} ${styles.dark}`}>
            <h3 className={styles.hPlus}>Adventurer Plus</h3>
            <p>
              <span>R$ 280</span>/mensal
            </p>
            <div className={styles.textHidden}>
              <p>Para quem quer encontrar viagens dentro do seu orçamento</p>
            </div>
            <div className="mt-4">
              <ul className="list-unstyled">
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Acesso total ao site</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Segurança nas aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Suporte 24/7</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Vaga com prioridade em aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoção em aventuras</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoção em hospedagens</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoção em passagens aereas</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Promoções exclusivas</span>
                </li>
                <li className={styles.light}>
                  <BsCheckLg />
                  <span>Vagas exclusivas em aventuras</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ButtonCustom>Escolher plano</ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <>
        <div
          className={`${styles.divMain} d-none d-lg-flex row justify-content-center justify-content-lg-between align-items-start position-absolute position-absolute start-50 translate-middle w-100`}
        >
          <div className="col-4">
            <div className={styles.card}>
              <h3>Gratis</h3>
              <p>
                <span>R$ 0</span>/mensal
              </p>
              <div className={styles.textHidden}>
                <p>Para quem quer aventuras com esportes radicais</p>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Acesso total ao site</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Segurança nas aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Suporte em horarios comerciais</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem vagas exclusivas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoções unicas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoção em aventuras</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoção em hospedagens</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoção em passagens aereas</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ButtonCustom>Escolher plano</ButtonCustom>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={`${styles.card} ${styles.cardLight}`}>
              <div>
                <LabelCard
                  text={'Mais popular'}
                  bsClass={'py-2 px-3 mb-3'}
                  stylesCss={{ width: 'fit-content', color: '#87FAD1' }}
                />
              </div>
              <h3>Adventurer</h3>
              <p>
                <span>R$ 120</span>/mensal
              </p>
              <div className={styles.textHidden}>
                <p>Para quem quer encontrar viagens dentro do seu orçamento</p>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Acesso total ao site</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Segurança nas aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Suporte 24/7</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Vaga com prioridade em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em hospedagens</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em passagens aereas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsCheckLg />
                    <span>Sem Promoções exclusivas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsCheckLg />
                    <span>Sem Vagas exclusivas em aventuras</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ButtonCustom dark={true}>Escolher plano</ButtonCustom>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.card}>
              <h3 className={styles.hPlus}>Adventurer Plus</h3>
              <p>
                <span>R$ 280</span>/mensal
              </p>
              <div className={styles.textHidden}>
                <p>Para quem quer encontrar viagens dentro do seu orçamento</p>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Acesso total ao site</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Segurança nas aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Suporte 24/7</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Vaga com prioridade em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em hospedagens</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em passagens aereas</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoções exclusivas</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Vagas exclusivas em aventuras</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ButtonCustom>Escolher plano</ButtonCustom>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.divMain} d-flex d-lg-none row flex-column justify-content-center justify-content-lg-between align-items-start w-100 mx-0`}
        >
          <div className="col-12 col-md-6 col-lg-4">
            <div className={styles.card}>
              <h3>Gratis</h3>
              <p>
                <span>R$ 0</span>/mensal
              </p>
              <div className={styles.textHidden}>
                <p>Para quem quer aventuras com esportes radicais</p>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Acesso total ao site</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Segurança nas aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Suporte em horarios comerciais</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem vagas exclusivas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoções unicas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoção em aventuras</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoção em hospedagens</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsX />
                    <span>Sem promoção em passagens aereas</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ButtonCustom>Escolher plano</ButtonCustom>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-3">
            <div className={`${styles.card} ${styles.cardLight}`}>
              <div>
                <LabelCard
                  text={'Mais popular'}
                  bsClass={'py-2 px-3 mb-3'}
                  stylesCss={{ width: 'fit-content', color: '#87FAD1' }}
                />
              </div>
              <h3>Adventurer</h3>
              <p>
                <span>R$ 0</span>/mensal
              </p>
              <div className={styles.textHidden}>
                <p>Para quem quer encontrar viagens dentro do seu orçamento</p>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Acesso total ao site</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Segurança nas aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Suporte 24/7</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Vaga com prioridade em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em hospedagens</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em passagens aereas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsCheckLg />
                    <span>Sem Promoções exclusivas</span>
                  </li>
                  <li className={styles.disabled}>
                    <BsCheckLg />
                    <span>Sem Vagas exclusivas em aventuras</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ButtonCustom dark={true}>Escolher plano</ButtonCustom>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-3">
            <div className={styles.card}>
              <h3 className={styles.hPlus}>Adventurer Plus</h3>
              <p>
                <span>R$ 0</span>/mensal
              </p>
              <div className={styles.textHidden}>
                <p>Para quem quer encontrar viagens dentro do seu orçamento</p>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Acesso total ao site</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Segurança nas aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Suporte 24/7</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Vaga com prioridade em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em aventuras</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em hospedagens</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoção em passagens aereas</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Promoções exclusivas</span>
                  </li>
                  <li className={styles.light}>
                    <BsCheckLg />
                    <span>Vagas exclusivas em aventuras</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ButtonCustom>Escolher plano</ButtonCustom>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default CardsPlans;

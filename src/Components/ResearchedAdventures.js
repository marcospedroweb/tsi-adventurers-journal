import React from 'react';
import styles from './ResearchedAdventures.module.css';
import DesktopFilterAdventure from './DesktopFilterAdventure';
import AdventureCard from './AdventureCard';
import MobileFilterAdventure from './MobileFilterAdventure';
import { GlobalContext } from '../Context/GlobalStorage';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';

const ResearchedAdventures = ({ adventurers, getAdventurers }) => {
  const navigate = useNavigate();

  return (
    <section className="row justify-content-between align-items-start">
      <div className="d-none d-lg-block col-12 col-lg-3">
        <DesktopFilterAdventure getAdventurers={getAdventurers} />
      </div>
      <div className="d-block d-lg-none col-12 col-lg-3">
        <MobileFilterAdventure getAdventurers={getAdventurers} />
      </div>
      <div className="col-12 col-lg-9 text-center">
        <div
          className="d-flex justify-content-between align-items-center text-white mb-4 p-3 rounded"
          style={{ backgroundColor: '#1C2331' }}
        >
          <p className="mb-3 mb-lg-0">
            Foi encontrado{' '}
            <span className="fw-bold">{adventurers.length} resultados</span>
          </p>
          <p
            className="text-center mb-0 fw-semibold"
            style={{ color: '#00A3FF', cursor: 'pointer' }}
            onClick={() => {
              navigate('/aventurar-se');
            }}
          >
            Realizar nova busca
          </p>
        </div>

        {adventurers.length ? (
          adventurers.map((adventure) => {
            return <AdventureCard data={adventure} />;
          })
        ) : (
          <>
            <h3 className="text-white fw-bold">
              Não foi encontrado aventuras com suas preferências.
              <span className="d-block mt-2 fs-5 fw-normal">
                Experimente fazer outra busca
              </span>
            </h3>
            <ButtonCustom
              bsClass={'text-uppercase mt-3'}
              onClick={() => {
                navigate('/aventurar-se');
              }}
            >
              Realizar outra pesquisa
            </ButtonCustom>
          </>
        )}
      </div>
    </section>
  );
};

export default ResearchedAdventures;

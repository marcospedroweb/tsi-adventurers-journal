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
        {!adventurers.length && (
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
        {adventurers.length &&
          adventurers.map((adventure) => {
            return <AdventureCard data={adventure} />;
          })}
      </div>
    </section>
  );
};

export default ResearchedAdventures;

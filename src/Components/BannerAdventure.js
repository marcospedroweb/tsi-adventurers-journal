import React from 'react';
import styles from './BannerAdventure.module.css';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { Dropdown, FloatingLabel, Form } from 'react-bootstrap';
import InputWithSuggestions from './InputWithSuggestions';
import InputFloatingDate from './InputFloatingDate';
import DropdownPassengers from './DropdownPassengers';
import ButtonCustom from './ButtonCustom';
import useFetch from '../Hooks/useFetch';
import { BsSearch } from 'react-icons/bs';
import DropdownModalitys from './DropdownModalitys';

const BannerAdventure = () => {
  const origin = GetSimpleInputObj('name');
  const startDate = React.useRef();
  const endDate = React.useRef();
  const { loading, request } = useFetch();

  async function handleSubmit() {}

  return (
    <section className={`${styles.banner} position-relative`}>
      <div
        className={`${styles.divMain} position-absolute top-50 start-50 translate-middle`}
      >
        <div className="text-center">
          <h2>Aventure-se</h2>
        </div>
        <form
          className={`${styles.divForm} d-flex flex-column flex-sm-row justify-content-start align-items-center gap-4 flex-wrap`}
        >
          <div>
            <h3>Para onde você vai?</h3>
            <InputWithSuggestions formObj={origin} type="cities" />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h3>Data de chegada</h3>
              <InputFloatingDate refComponent={startDate} />
            </div>
            <div
              className={`${styles.dateSeparator} d-none d-lg-inline-block`}
            ></div>
            <div>
              <h3>Data de partida</h3>
              <InputFloatingDate refComponent={endDate} />
            </div>
          </div>
          <div>
            <h3>Passageiros</h3>
            <DropdownPassengers />
          </div>
          <div>
            <h3>Modalidades</h3>
            <DropdownModalitys />
          </div>
          <div className="align-self-end">
            <ButtonCustom
              bsClass={
                'fw-bold d-flex justify-content-between align-items-center'
              }
              style={{
                height: '58px',
                fontSize: '1.25rem',
              }}
            >
              <BsSearch className="fw-bold me-2" />
              Buscar aventuras
            </ButtonCustom>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BannerAdventure;

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
          className={`${styles.divForm} d-flex flex-column flex-sm-row justify-content-center justify-content-lg-between align-items-center align-items-lg-end gap-4 flex-wrap flex-xxl-nowrap`}
        >
          <div className="w-100">
            <h3>Para onde você vai?</h3>
            <InputWithSuggestions formObj={origin} type="cities" />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100">
            <div className="mb-3 mb-lg-0 w-100">
              <h3>Data de ida</h3>
              <InputFloatingDate refComponent={startDate} />
            </div>
            <div
              className={`${styles.dateSeparator} d-none d-lg-inline-block`}
            ></div>
            <div className="w-100">
              <h3>Data de volta</h3>
              <InputFloatingDate refComponent={endDate} />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end w-100 gap-3">
            <div>
              <h3>Passageiros</h3>
              <DropdownPassengers />
            </div>
            <div>
              <h3>Modalidades</h3>
              <DropdownModalitys />
            </div>
          </div>
          <div>
            <ButtonCustom
              type="submit"
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

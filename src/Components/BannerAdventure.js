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
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';

const BannerAdventure = () => {
  const { setSearchAdventure } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [formError, setFormError] = React.useState('');
  //Destination
  const origin = GetSimpleInputObj('name');
  const [loadingLocation, setLoadingLocation] = React.useState(false);

  //Date
  const startDate = React.useRef();

  //Passengers
  const [passengers, setPassengers] = React.useState(1);

  //Modalitys
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [modalitysIds, setModalitysIds] = React.useState([]);
  const [loadingModalitys, setLoadingModalitys] = React.useState(false);

  //Fetch
  const { loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    setSearchAdventure({
      location: origin.ref.current.value,
      date: startDate.current.value,
      passengers,
      modalitysIds,
    });
    navigate('/procurar-aventuras');
  }

  return (
    <section className={`${styles.banner} position-relative`}>
      <div
        className={`${styles.divMain} position-absolute top-50 start-50 translate-middle`}
      >
        <div className="text-center">
          <h2>Aventure-se</h2>
        </div>
        <form
          method="POST"
          action="#"
          onSubmit={handleSubmit}
          className={`${styles.divForm} d-flex flex-column flex-sm-row justify-content-center justify-content-lg-between align-items-center align-items-lg-start gap-4 flex-wrap flex-xxl-nowrap`}
        >
          <div className="w-100">
            <h3>Para onde você vai?</h3>
            <InputWithSuggestions
              formObj={origin}
              type="cities"
              loadingState={loadingLocation}
              setLoadingState={setLoadingLocation}
            />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100">
            <div className="mb-3 mb-lg-0 w-100">
              <h3>Data</h3>
              <InputFloatingDate refComponent={startDate} name={'dateInit'} />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-start w-100 gap-3">
            <div>
              <h3>Passageiros</h3>
              <DropdownPassengers
                passengers={passengers}
                setPassengers={setPassengers}
              />
            </div>
            <div>
              <h3>Modalidades</h3>
              <DropdownModalitys
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                modalitysIds={modalitysIds}
                setModalitysIds={setModalitysIds}
                loadingState={loadingModalitys}
                setLoadingState={setLoadingModalitys}
              />
            </div>
          </div>
          <div className="align-self-end text-center">
            {loadingLocation || loadingModalitys ? (
              <ButtonCustom
                type="button"
                bsClass={
                  'fw-bold d-flex justify-content-between align-items-center'
                }
                style={{
                  height: '58px',
                  fontSize: '1.25rem',
                }}
                loading={true}
              >
                <BsSearch className="fw-bold me-2" />
                Carregando...
              </ButtonCustom>
            ) : (
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
            )}

            {formError && (
              <span className="error-mensage mt-1 d-inline-block">
                {formError}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default BannerAdventure;

import React from 'react';
import styles from './DesktopFilterAdventure.module.css';
import ButtonCustom from './ButtonCustom';

import { Form } from 'react-bootstrap';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';
import { GlobalContext } from '../Context/GlobalStorage';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const DesktopFilterAdventure = ({ mobile, getAdventurers }) => {
  const { searchAdventure, setSearchAdventure } =
    React.useContext(GlobalContext);

  //Price
  const minPriceRef = React.useRef();
  const [minPrice, setMinPrice] = React.useState('');
  const maxPriceRef = React.useRef();
  const [maxPrice, setMaxPrice] = React.useState('');

  //time
  const timeRef = React.useRef();
  const [time, setTime] = React.useState('');

  //day
  const dayRef = React.useRef();
  const [day, setDay] = React.useState('');

  //Modalitys
  const [modalitys, setModalitys] = React.useState([]);
  const [modalitysIds, setModalitysIds] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  //Min Age
  const minAgeRef = React.useRef();
  const [minAge, setMinAge] = React.useState(0);

  //Fetch
  const { loading, request } = useFetch();

  function handleOptionSelect(name, id) {
    if (selectedOptions.includes(name)) {
      setSelectedOptions(selectedOptions.filter((value) => value !== name));
      setModalitysIds(modalitysIds.filter((value) => value !== id));
    } else {
      setSelectedOptions([...selectedOptions, name]);
      setModalitysIds([...modalitysIds, id]);
    }
  }

  React.useEffect(() => {
    async function getModalitys() {
      const { json } = await request(
        `${apiRoute}${getModalitysRoute}`,
        optionsFetch({ method: 'GET' }),
      );
      setModalitys(json.data);
    }
    setModalitysIds(searchAdventure.modalitysIds);
    getModalitys();
    if (searchAdventure.minPrice) setMinPrice(searchAdventure.minPrice);
    if (searchAdventure.maxPrice) setMaxPrice(searchAdventure.maxPrice);
    if (searchAdventure.time) setTime(searchAdventure.time);
    if (searchAdventure.modalitysIds)
      setModalitysIds(searchAdventure.modalitysIds);
    if (searchAdventure.minAge) setMinAge(searchAdventure.minAge);
  }, []);

  React.useEffect(() => {
    setSelectedOptions(
      modalitys
        .filter((modality) => modalitysIds.includes(modality.identify))
        .map((modality) => modality.nome),
    );
  }, [modalitys, modalitysIds]);

  function handleSubmit(event) {
    event.preventDefault();
    if (minPriceRef.current.value)
      searchAdventure.minPrice = minPriceRef.current.value;
    if (maxPriceRef.current.value)
      searchAdventure.maxPrice = maxPriceRef.current.value;
    if (timeRef.current.value) searchAdventure.time = timeRef.current.value;
    searchAdventure.modalitysIds = modalitysIds;
    if (minAgeRef.current.value)
      searchAdventure.minAge = minAgeRef.current.value;
    console.log(searchAdventure);
    setSearchAdventure(searchAdventure);

    getAdventurers();
  }

  if (loading) return <Loading />;
  else
    return (
      <form
        onSubmit={handleSubmit}
        className={`${styles.divMain} ${
          mobile ? styles.divMainMobile : ''
        } d-flex flex-column justify-content-center align-items-start`}
      >
        {!mobile && (
          <div
            className={`${styles.divBorder} d-flex justify-content-between align-items-center w-100`}
          >
            <h3>Filtro</h3>
            <div>
              <ButtonCustom type="submit" bsClass={'ms-2'}>
                Filtrar
              </ButtonCustom>
            </div>
          </div>
        )}

        <div
          className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-start w-100`}
        >
          <div className="text-start w-100 mb-3">
            <h4>Preço por passageiro</h4>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group controlId="priceMin">
              <Form.Label className="visually-hidden">Preço minimo</Form.Label>
              <div
                className={`${styles.divInput} d-flex justify-content-start align-items-center me-2`}
              >
                <span
                  className={`position-absolute ${mobile ? 'text-white' : ''}`}
                >
                  R$
                </span>
                <Form.Control
                  type="number"
                  placeholder="Min."
                  className="position-relative"
                  ref={minPriceRef}
                  value={minPrice}
                  onChange={({ target }) => setMinPrice(target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="priceMax">
              <Form.Label className="visually-hidden">Preço minimo</Form.Label>
              <div
                className={`${styles.divInput} d-flex justify-content-start align-items-center`}
              >
                <span
                  className={`position-absolute ${mobile ? 'text-white' : ''}`}
                >
                  R$
                </span>
                <Form.Control
                  type="number"
                  placeholder="Max."
                  className="position-relative"
                  ref={maxPriceRef}
                  value={maxPrice}
                  onChange={({ target }) => setMaxPrice(target.value)}
                />
              </div>
            </Form.Group>
          </div>
        </div>
        <div
          className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-start w-100`}
        >
          <div className="text-start w-100 mb-3">
            <h4>Horário</h4>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group controlId="hourStart" className="me-2">
              <Form.Label className="visually-hidden">Horario</Form.Label>
              <Form.Control
                type="time"
                placeholder="Max."
                style={{ width: '120px' }}
                ref={timeRef}
                value={time}
                onChange={({ target }) => setTime(target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div
          className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-start w-100`}
        >
          <div className="text-start w-100 mb-3">
            <h4>Data</h4>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group controlId="hourStart" className="me-2">
              <Form.Label className="visually-hidden">Horario</Form.Label>
              <Form.Control
                type="date"
                placeholder="Max."
                style={{ width: '150px' }}
                ref={dayRef}
                value={day}
                min={new Date().toISOString().split('T')[0]}
                onChange={({ target }) => setDay(target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div
          className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-start w-100`}
        >
          <div className="text-start w-100 mb-3 d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Modalidades</h4>
            {mobile && modalitysIds.length ? (
              <ButtonCustom
                onClick={() => {
                  setSelectedOptions([]);
                  setModalitysIds([]);
                }}
              >
                Limpar
              </ButtonCustom>
            ) : (
              <span
                style={{
                  cursor: 'pointer',
                  color: '#87FAD1',
                  fontSize: '.9rem',
                }}
                onClick={() => {
                  setSelectedOptions([]);
                  setModalitysIds([]);
                }}
              >
                Limpar
              </span>
            )}
          </div>
          <div
            className={`${styles.divCheckboxs} d-flex flex-column justify-content-center align-items-start`}
          >
            {modalitys &&
              showMore &&
              modalitys.map(({ identify, nome }) => {
                if (selectedOptions && selectedOptions.includes(nome))
                  return (
                    <div className="mt-2" key={identify + nome}>
                      <Form.Check
                        type="checkbox"
                        id={nome}
                        label={nome}
                        checked={true}
                        onChange={() => handleOptionSelect(nome, identify)}
                        name={nome}
                      />
                    </div>
                  );
              })}
            {modalitys &&
              showMore &&
              modalitys.map(({ identify, nome }) => {
                if (selectedOptions && !selectedOptions.includes(nome))
                  return (
                    <div className="mt-2" key={identify + nome}>
                      <Form.Check
                        type="checkbox"
                        id={nome}
                        label={nome}
                        checked={false}
                        onChange={() => handleOptionSelect(nome, identify)}
                        name={nome}
                      />
                    </div>
                  );
              })}
            {modalitys &&
              !showMore &&
              modalitys.map(({ identify, nome }) => {
                if (selectedOptions && selectedOptions.includes(nome))
                  return (
                    <div className="mt-2" key={identify + nome}>
                      <Form.Check
                        type="checkbox"
                        id={nome}
                        label={nome}
                        checked={true}
                        onChange={() => handleOptionSelect(nome, identify)}
                        name={nome}
                      />
                    </div>
                  );
              })}
            {modalitys &&
              !showMore &&
              modalitys.slice(0, 6).map(({ identify, nome }) => {
                if (selectedOptions && !selectedOptions.includes(nome))
                  return (
                    <div className="mt-2" key={identify + nome}>
                      <Form.Check
                        type="checkbox"
                        id={nome}
                        label={nome}
                        checked={false}
                        onChange={() => handleOptionSelect(nome, identify)}
                        name={nome}
                      />
                    </div>
                  );
              })}
            {showMore ? (
              mobile ? (
                <span
                  className="d-flex justify-cotent-center align-items-center gap-2 mt-3 py-2 px-3 rounded"
                  style={{
                    backgroundColor: '#1C2331',
                    fontSize: '.9rem',
                    cursor: 'pointer',
                    color: '#87FAD1',
                  }}
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  Mostrar menos <BsChevronUp />
                </span>
              ) : (
                <span
                  className="d-flex justify-cotent-center align-items-center gap-2 mt-3"
                  style={{
                    fontSize: '.9rem',
                    cursor: 'pointer',
                    color: '#87FAD1',
                  }}
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  Mostrar menos <BsChevronUp />
                </span>
              )
            ) : mobile ? (
              <span
                className="d-flex justify-cotent-center align-items-center gap-2 mt-3 py-2 px-3 rounded"
                style={{
                  backgroundColor: '#1C2331',
                  fontSize: '.9rem',
                  cursor: 'pointer',
                  color: '#87FAD1',
                }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                Mostrar mais <BsChevronDown />
              </span>
            ) : (
              <span
                className="d-flex justify-cotent-center align-items-center gap-2 mt-3"
                style={{
                  fontSize: '.9rem',
                  cursor: 'pointer',
                  color: '#87FAD1',
                }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                Mostrar mais <BsChevronDown />
              </span>
            )}
          </div>
        </div>
        <div
          className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-start w-100`}
        >
          <div className="text-start w-100 mb-3">
            <h4>Idade mínima</h4>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group controlId="hourStart" className="me-2">
              <Form.Label className="visually-hidden">Idade mínima</Form.Label>
              <Form.Control
                type="timeRef"
                placeholder="Anos."
                style={{ width: '92px' }}
                ref={minAgeRef}
                value={minAge}
                onChange={({ target }) => setMinAge(target.value)}
              />
            </Form.Group>
          </div>
        </div>
      </form>
    );
};

export default DesktopFilterAdventure;

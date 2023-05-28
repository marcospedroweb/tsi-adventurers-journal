import React from 'react';
import styles from './DesktopFilterAdventure.module.css';
import ButtonCustom from './ButtonCustom';

import { Form } from 'react-bootstrap';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';
import { GlobalContext } from '../Context/GlobalStorage';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const DesktopFilterAdventure = ({ mobile }) => {
  const { searchAdventure, setSearchAdventure } =
    React.useContext(GlobalContext);

  //Price
  const [price, setPrice] = React.useState('');

  //Time
  const [returnTime, setReturnTime] = React.useState('');

  //Modalitys
  const [modalitys, setModalitys] = React.useState([]);
  const [modalitysIds, setModalitysIds] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

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
    getModalitys();

    // console.log(
    //   modalitys
    //     .filter((modality) => [5, 10, 2].includes(modality.identify))
    //     .map((modality) => modality.nome),
    // );
  }, []);

  React.useEffect(() => {
    setSearchAdventure({
      origin: 'São Paulo',
      startDate: 'a',
      endDate: 'b',
      passengers: 3,
      modalitysIds: [5, 10, 2],
    });
    setModalitysIds([5, 10, 2]);
    // setModalitysIds(searchAdventure.modalitysIds);
    setSelectedOptions(
      modalitys
        .filter((modality) => [5, 10, 2].includes(modality.identify))
        .map((modality) => modality.nome),
    );
  }, [modalitys]);

  if (loading) return <Loading />;
  else
    return (
      <div
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
              <ButtonCustom bsClass={'ms-2'}>Filtrar</ButtonCustom>
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
              <Form.Label className="visually-hidden">Preço minimo</Form.Label>
              <Form.Control
                type="time"
                placeholder="Max."
                style={{ width: '92px' }}
              />
            </Form.Group>
            <Form.Group controlId="hourEnd">
              <Form.Label className="visually-hidden">Preço minimo</Form.Label>
              <Form.Control
                type="time"
                placeholder="Max."
                style={{ width: '92px' }}
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
      </div>
    );
};

export default DesktopFilterAdventure;

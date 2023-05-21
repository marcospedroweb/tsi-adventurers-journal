import React, { useState, useEffect } from 'react';
import { Dropdown, FloatingLabel, Form, FormControl } from 'react-bootstrap';
import ShadowInput from './ShadowInput';
import useFetch from '../Hooks/useFetch';
import { apiRoute, getCitiesRoute, optionsFetch } from '../DB/data';
import diacriticless from 'diacriticless';
import styles from './InputWithSuggestions.module.css';

const InputWithSuggestions = ({ formObj, type }) => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const refInput = React.useRef();
  const [inputValue, setInputValue] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [cities, setCities] = useState([]);
  const { loading, request } = useFetch();

  useEffect(() => {
    async function getData(type) {
      if (type === 'cities') {
        const { json } = await request(
          `${apiRoute}${getCitiesRoute}`,
          optionsFetch({ method: 'GET' }),
        );
        if (json.status === 200) {
          setCities(json.cidades);
        }
      }
    }

    getData(type);
  }, []);

  function filterValues(value) {
    const filtered = cities.filter(({ nome }) =>
      diacriticless(nome.toLowerCase()).includes(
        diacriticless(value.toLowerCase()),
      ),
    );

    setFilteredCities(filtered);
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    filterValues(value);
  };

  const handleCitySelect = (city) => {
    setInputValue(city);
    // setFilteredCities([]);
    setIsInputSelected(false);
  };

  if (!cities.length) return <ShadowInput />;
  else
    return (
      <>
        <FloatingLabel controlId="origin_input" label="Destino">
          <Form.Control
            type="text"
            placeholder="Destino"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => {
              setIsInputSelected(true);
              filterValues(refInput.current.value);
            }}
            ref={refInput}
          />
        </FloatingLabel>
        <Dropdown>
          {filteredCities.length ? (
            <Dropdown.Menu
              show
              className={
                filteredCities.length > 0 && isInputSelected ? 'show' : ''
              }
            >
              <div
                className={`${styles.dropdown} d-flex flex-column justify-content-start align-items-start`}
              >
                {/* {filteredCities
                  .slice(0, 5)
                  .map(({ id, nome, estado }, index) => (
                    <span key={id} onClick={() => handleCitySelect(nome)}>
                      {nome}
                    </span>
                  ))} */}
                {filteredCities.map(({ id, nome, estado }, index) => (
                  <span key={id} onClick={() => handleCitySelect(nome)}>
                    {nome}
                  </span>
                ))}
              </div>
            </Dropdown.Menu>
          ) : (
            <Dropdown.Menu className={isInputSelected ? 'show' : ''}>
              <div
                className={`${styles.dropdown} d-flex flex-column justify-content-start align-items-start`}
              >
                <span key={'1'} className={styles.disabled}>
                  Sem resultados
                </span>
              </div>
            </Dropdown.Menu>
          )}
        </Dropdown>
      </>
    );
};

export default InputWithSuggestions;

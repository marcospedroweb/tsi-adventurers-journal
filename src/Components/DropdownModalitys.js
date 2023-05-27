import React from 'react';
import styles from './DropdownModalitys.module.css';
import { Dropdown, Form } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import ShadowInput from './ShadowInput';

const DropdownModalitys = ({
  selectedOptions,
  setSelectedOptions,
  modalitysIds,
  setModalitysIds,
}) => {
  const [options, setOptions] = React.useState([]);
  const { loading, request } = useFetch();

  const handleOptionSelect = (optionValue, id) => {
    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== optionValue),
      );
      setModalitysIds(modalitysIds.filter((value) => value !== id));
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
      setModalitysIds([...modalitysIds, id]);
    }
  };

  const handleDropdownToggle = (isOpen) => {
    if (isOpen) {
      setSelectedOptions(selectedOptions);
    }
  };

  React.useEffect(() => {
    async function getModalitys() {
      const { json } = await request(
        `${apiRoute}${getModalitysRoute}`,
        optionsFetch({ method: 'GET' }),
      );
      setOptions(json.data);
    }
    getModalitys();
  }, []);

  if (!options.length) return <ShadowInput label="Modalidades" />;
  else
    return (
      <Dropdown id="dropdownModalitys" onToggle={handleDropdownToggle}>
        <Dropdown.Toggle
          variant="secondary"
          id="multiSelectDropdown"
          className={`${styles.btn} w-100`}
        >
          {selectedOptions.length > 0
            ? `${
                selectedOptions.length > 1
                  ? `${selectedOptions.length} selecionados`
                  : `${selectedOptions.length} selecionado`
              }`
            : '0 selecionado'}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-scrollable">
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            <Dropdown.Item
              onClick={() => {
                setSelectedOptions([]);
              }}
              className="fw-bold"
            >
              Limpar filtro
            </Dropdown.Item>
            {options.map(({ identify, Nome, Descrição }) => (
              <Dropdown.Item
                key={identify + Nome}
                onClick={() => handleOptionSelect(Nome, identify)}
              >
                {selectedOptions && selectedOptions.includes(Nome) && (
                  <Form.Check
                    type="checkbox"
                    id={Nome}
                    label={Nome}
                    checked={true}
                    onChange={() => handleOptionSelect(Nome, identify)}
                    name={Nome}
                  />
                )}
                {selectedOptions && !selectedOptions.includes(Nome) && (
                  <Form.Check
                    type="checkbox"
                    id={Nome}
                    label={Nome}
                    checked={false}
                    onChange={() => handleOptionSelect(Nome, identify)}
                    name={Nome}
                  />
                )}
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default DropdownModalitys;

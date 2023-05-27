import React from 'react';
import styles from './DesktopFilterAdventure.module.css';
import ButtonCustom from './ButtonCustom';

import { Form } from 'react-bootstrap';

const DesktopFilterAdventure = () => {
  const [price, setPrice] = React.useState('');
  const [returnTime, setReturnTime] = React.useState('');

  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-center align-items-center`}
    >
      <div
        className={`${styles.divBorder} d-flex justify-content-between align-items-center w-100`}
      >
        <h3>Filtro</h3>
        <div>
          <ButtonCustom bsClass={'ms-2'}>Filtrar</ButtonCustom>
        </div>
      </div>
      <div
        className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-center w-100`}
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
              <span className="position-absolute">R$</span>
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
              <span className="position-absolute">R$</span>
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
        className={`${styles.divBorder} d-flex flex-column justify-content-center align-items-center w-100`}
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
    </div>
  );
};

export default DesktopFilterAdventure;

import React from 'react';
import styles from './PassengersNum.module.css';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
import { FloatingLabel, Form } from 'react-bootstrap';

const PassengersNum = ({ value, setValue }) => {
  const [input, setInput] = React.useState(false);

  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-center align-items-start px-3`}
    >
      <div className="w-100 d-flex justify-content-between align-items-center">
        <BsFillDashCircleFill
          color={value > 1 ? '#1C2331' : '#aaa'}
          fontSize={'1.5rem'}
          onClick={() => {
            setValue(value > 1 ? value - 1 : value);
          }}
          style={value > 1 ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
        />
        <div
          className="px-3"
          onClick={() => {
            setInput(!input);
          }}
        >
          <Form.Group controlId="inputPassengersForm">
            <Form.Label className="visually-hidden">Passageiros</Form.Label>
            <Form.Control
              type="number"
              minLength={1}
              maxLength={100}
              value={value}
              step={1}
              placeholder="Passageiros"
              onChange={(event) => {
                if (event.target.value < 100)
                  setValue(Number.parseInt(event.target.value));
                if (
                  isNaN(Number.parseInt(event.target.value)) ||
                  !Number.parseInt(event.target.value)
                ) {
                  setValue(1);
                }
              }}
              name="passengers"
              className={styles.inputPassengers}
              required
            />
          </Form.Group>
        </div>
        <BsFillPlusCircleFill
          color={'#1C2331'}
          fontSize={'1.5rem'}
          onClick={() => {
            if (Number.parseInt(value) < 100)
              setValue(Number.parseInt(value) + 1);
            else if (!value) {
              setValue(1);
            }
          }}
        />
      </div>
      {Number.parseInt(value) === 100 && (
        <span className="fw-normal fs-6 text-center d-inline-block mx-auto">
          limite de 100 passageiros atingido
        </span>
      )}
    </div>
  );
};

export default PassengersNum;

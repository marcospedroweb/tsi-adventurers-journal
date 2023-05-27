import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './DropdownPassengers.module.css';
import PassengersNum from './PassengersNum';

const DropdownPassengers = ({ passengers, setPassengers }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdownBannerAdventure"
        className={`${styles.btnDropdown} w-100`}
      >
        {!passengers ? `Insira um valor` : `${passengers} passageiros`}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div
          className={`${styles.divDropdown} d-flex flex-column justify-content-between align-items-center p-3`}
        >
          <h4 className="mb-4">Passageiros</h4>
          <div className="d-flex justify-content-between align-items-center gap-4">
            <PassengersNum
              title={'Adultos'}
              text={'Acima de 13 anos'}
              value={passengers}
              setValue={setPassengers}
            />
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownPassengers;

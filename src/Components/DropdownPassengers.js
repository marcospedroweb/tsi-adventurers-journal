import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './DropdownPassengers.module.css';
import PassengersNum from './PassengersNum';

const DropdownPassengers = () => {
  const [numAdults, setNumAdults] = React.useState(1);
  const [numKids, setNumKids] = React.useState(0);

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdownBannerAdventure"
        className={`${styles.btnDropdown} w-100`}
      >
        {numAdults + numKids > 1
          ? `${numAdults + numKids} Passageiros`
          : `${numAdults + numKids} Passageiro`}
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
              value={numAdults}
              setValue={setNumAdults}
            />
            {/* <PassengersNum
              title={'Crianças'}
              text={'De 5 a 12 anos'}
              value={numKids}
              setValue={setNumKids}
            /> */}
          </div>
          <small>Algumas atividades tem idade minima para participar</small>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownPassengers;

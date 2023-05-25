import React from 'react';
import styles from './PassengersNum.module.css';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';

const PassengersNum = ({ value, setValue }) => {
  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-center align-items-start px-3`}
    >
      <div className="w-100 d-flex justify-content-between align-items-center">
        <BsFillDashCircleFill
          color={value > 0 ? value - 1 : value}
          fontSize={'1.5rem'}
          onClick={() => {
            setValue(value > 0 ? value - 1 : value);
          }}
          style={value > 0 ? { cursor: 'pointer' } : { cursor: 'default' }}
        />
        <div>
          <span>{value}</span>
        </div>
        <BsFillPlusCircleFill
          color={'#1C2331'}
          fontSize={'1.5rem'}
          onClick={() => {
            setValue(value + 1);
          }}
        />
      </div>
    </div>
  );
};

export default PassengersNum;

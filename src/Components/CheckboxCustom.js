import React from 'react';
import styles from './CheckboxCustom.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const CheckboxCustom = ({ text, bsClass, checked }) => {
  const [active, setActive] = React.useState(checked);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      onClick={() => {
        setActive(!active);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className={`${styles.checkbox} ${active ? styles.active : ''}`}>
        {active ? <BsFillCheckCircleFill /> : ''}
      </div>
      <p className={`${bsClass} mb-0 ms-2`}>{text}</p>
    </div>
  );
};

export default CheckboxCustom;

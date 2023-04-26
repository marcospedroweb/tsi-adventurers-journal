import React from 'react';
import styles from './ButtonCustom.module.css';

const ButtonCustom = ({
  type = 'button',
  onClick,
  onChange,
  bsClass,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${bsClass} btn`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;

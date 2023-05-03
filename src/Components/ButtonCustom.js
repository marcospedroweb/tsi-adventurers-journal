import React from 'react';
import styles from './ButtonCustom.module.css';

const ButtonCustom = ({
  type = 'button',
  onClick,
  onChange,
  bsClass,
  loading = false,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${
        loading ? styles.loading : ''
      } ${bsClass} btn`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;

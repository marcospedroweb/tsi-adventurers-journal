import React from 'react';
import styles from './ButtonCustom.module.css';

const ButtonCustom = ({
  type = 'button',
  onClick,
  onChange,
  bsClass,
  loading = false,
  children,
  link,
  style,
  dark,
  ...props
}) => {
  if (type === 'link')
    return (
      <a
        href={link}
        className={`${styles.btn} ${
          loading ? styles.loading : ''
        } ${bsClass} btn`}
        onClick={onClick}
        target="_blanck"
        {...props}
      >
        {children}
      </a>
    );
  else
    return (
      <button
        type={type}
        className={`${styles.btn} ${loading ? styles.loading : ''} ${bsClass} ${
          dark ? styles.dark : ''
        } btn`}
        onClick={onClick}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
};

export default ButtonCustom;

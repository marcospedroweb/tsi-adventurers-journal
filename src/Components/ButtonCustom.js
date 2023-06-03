import React from 'react';
import styles from './ButtonCustom.module.css';
import { Spinner } from 'react-bootstrap';

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
        {loading ? (
          <Spinner
            animation="border"
            className="me-3"
            style={{ width: '24px', height: '24px' }}
          />
        ) : (
          ''
        )}

        {children}
      </button>
    );
};

export default ButtonCustom;

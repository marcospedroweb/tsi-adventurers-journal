import React from 'react';
import styles from './InputCustom.module.css';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputCustom = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  errorBack,
  onBlur,
  placeholder,
  refComponent,
  required,
}) => {
  return (
    <>
      <FloatingLabel controlId={id} label={label} className="mt-3">
        <Form.Control
          type={type}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={label}
          ref={refComponent}
          value={value}
          required={required}
        />
        {error || errorBack ? (
          <p className={styles.error}>{error || errorBack}</p>
        ) : (
          ''
        )}
      </FloatingLabel>
    </>
  );
};

export default InputCustom;

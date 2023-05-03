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
  onBlur,
  placeholder,
  refComponent,
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
        />
      </FloatingLabel>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default InputCustom;

import React from 'react';
import styles from './InputCustom.module.css';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputCustom = ({
  id,
  label,
  value = '',
  type = 'text',
  refComponent,
  onChange,
  error,
  onBlur,
  placeholder,
  ...props
}) => {
  return (
    <>
      <FloatingLabel controlId={id} label={label} className="mt-3">
        <Form.Control
          type={type}
          placeholder={label}
          onChange={onChange}
          onBlur={onBlur}
          ref={refComponent}
          {...props}
        />
      </FloatingLabel>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default InputCustom;

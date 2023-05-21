import React from 'react';
import styles from './ShadowInput.module.css';
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';

const ShadowInput = ({ label = 'Destino' }) => {
  return (
    // <div className={styles.shadow_overlay}>
    //   <Spinner animation="border" role="status" variant="light" />
    // </div>
    <div className={styles.shadow_input_loading}>
      <FloatingLabel controlId="origin_input" label={label}>
        <Form.Control type="text" placeholder={label} disabled />
      </FloatingLabel>
      <div className={styles.shadow_overlay}>
        <Spinner animation="border" role="status" variant="light" />
      </div>
    </div>
  );
};

export default ShadowInput;

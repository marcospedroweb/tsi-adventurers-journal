import React from 'react';
import styles from './GhostInputCustom.module.css';

const GhostInputCustom = ({
  data,
  setValue,
  value,
  type,
  onChange,
  onBlur,
  refComponent,
  required,
  classN,
  error,
  errorBack,
}) => {
  setValue(data);
  console.log(`type: ${type}, ${value}`);
  return (
    <>
      <input
        type={type}
        className={`${classN} ${styles.input}`}
        ref={refComponent}
        value={
          type === 'file' && value !== 'Não adicionado' && value ? value : ''
        }
        accept={type === 'file' ? 'image/png, image/jpeg, image/jpg' : ''}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {error || errorBack ? (
        <p className={styles.error}>{error || errorBack}</p>
      ) : (
        ''
      )}
    </>
  );
};

export default GhostInputCustom;

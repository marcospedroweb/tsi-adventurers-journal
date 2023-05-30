import React from 'react';
import styles from './LabelCard.module.css';

const LabelCard = ({
  text,
  stylesCss = {},

  bsClass,
  title,
  aval,
}) => {
  if (title)
    return (
      <div className={`${styles.label} ${bsClass}`} style={stylesCss}>
        <span className="d-block fw-bold" style={{ fontSize: '.95rem' }}>
          {title}
        </span>
        <span className="mb-0" style={{ whiteSpace: 'nowrap' }}>
          {text}
        </span>
      </div>
    );
  else if (aval) {
    return (
      <div
        className={`${styles.label} ${styles.aval} d-flex justify-content-between align-items-center`}
        style={stylesCss}
      >
        <span
          className="d-block fw-bold p-1 px-2 me-2"
          style={{
            fontSize: '1rem',
            color: '#87FAD1',
            backgroundColor: '#283040',
            borderRadius: '8px',
          }}
        >
          {aval}
        </span>
        <span className="mb-0" style={{ fontSize: '.9rem' }}>
          {text}
        </span>
      </div>
    );
  } else
    return (
      <div
        className={`${styles.label} ${styles.normal} ${bsClass}`}
        style={stylesCss}
      >
        <span className="mb-0">{text}</span>
      </div>
    );
};

export default LabelCard;

import React from 'react';
import styles from './LabelPreferences.module.css';

const LabelPreferences = ({ link, text, icon, index }) => {
  return (
    <div className={`col align-self-stretch mt-3`} key={text + index}>
      <div className={styles.label}>
        {link && (
          <a href={link} target="_blanck">
            <p className="d-flex justify-content-between align-items-center">
              {icon && (
                <span className="me-2 d-flex justify-content-center align-items-center">
                  <img src={`/imgs/${icon}.svg`} alt="" />
                </span>
              )}{' '}
              {text}
            </p>
          </a>
        )}
        {!link && (
          <p className="d-flex justify-content-between align-items-center">
            {icon && (
              <span className="me-2 d-flex justify-content-center align-items-center">
                <img src={`/imgs/${icon}.svg`} alt="" />
              </span>
            )}{' '}
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LabelPreferences;

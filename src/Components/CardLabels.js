import React from 'react';
import styles from './CardLabels.module.css';

const CardLabels = ({ title, labels }) => {
  return (
    <div className="col-12 col-lg-6 align-self-stretch">
      <div
        className={`${styles.divMain} p-3 text-center d-flex flex-column justify-content-start align-items-center h-100`}
      >
        <h3>{title}</h3>
        <div className="d-flex justify-content-between align-items-center w-100 flex-wrap gap-2">
          {labels.map(({ icon, text, link }, index) => {
            return (
              <div className={`col align-self-stretch`} key={text + index}>
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
          })}
        </div>
      </div>
    </div>
  );
};

export default CardLabels;

import React from 'react';
import styles from './ConfigPlan.module.css';
import ButtonCustom from './ButtonCustom';
import UnsavedChanges from './UnsavedChanges';
import { Form } from 'react-bootstrap';
import ModalPlan from './ModalPlan';
import SealPlanCard from './SealPlanCard';

const ConfigPlan = ({ user }) => {
  return (
    <div
      className={`${styles.divMain} row justify-content-between align-items-start`}
    >
      <div className="col-12 col-md-6 text-center text-md-start">
        <div className={styles.divSection}>
          <h3>Meu Plano</h3>
          <p className={styles.hiddenText}>Altere seu plano</p>
          <div className={`${styles.divInputs} mt-4`}>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div>
                <h4>Plano atual</h4>
                <div>
                  <SealPlanCard type={'gratis'} color={'light-blue'} />
                </div>
              </div>
              <div className="mt-3 text-end">
                <ModalPlan />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPlan;

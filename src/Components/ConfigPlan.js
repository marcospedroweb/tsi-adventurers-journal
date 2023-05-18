import React from 'react';
import styles from './ConfigPlan.module.css';
import ButtonCustom from './ButtonCustom';
import UnsavedChanges from './UnsavedChanges';
import { Form } from 'react-bootstrap';
import ModalPlan from './ModalPlan';
import SealPlanCard from './SealPlanCard';

const ConfigPlan = ({ user }) => {
  const planRef = React.useRef();
  async function handleSubmit(event) {
    event.preventDefault();
    alert('form enviado');
  }

  return (
    <div
      className={`${styles.divMain} row justify-content-between align-items-center`}
    >
      <div className="col-12 col-md-12 align-self-stretch">
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className={styles.divSection}
        >
          <h3>Meu Plano</h3>
          <p className={styles.hiddenText}>Altere seu plano</p>
          <div className={`${styles.divInputs} mt-4`}>
            <div className="mb-3">
              <h4>Plano atual</h4>
              <div>
                <SealPlanCard type={'gratis'} color={'light-blue'} />
              </div>

              <div className="mt-3">
                <ModalPlan />
              </div>
              {/* {password.validation.error ? (
                <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                  {password.validation.error}
                </p>
              ) : (
                ''
              )}
              {password.validation.value !== user.user.email && (
                <UnsavedChanges />
              )} */}
            </div>
          </div>
          {/* <div className="text-center mt-4">
            <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ConfigPlan;

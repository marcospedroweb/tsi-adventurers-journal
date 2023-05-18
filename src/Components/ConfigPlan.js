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
    <form
      action="#"
      method="POST"
      className={`${styles.divMain} row justify-content-between align-items-center`}
      onSubmit={handleSubmit}
    >
      <div className="col-12 col-md-12 align-self-stretch">
        <div className={styles.divSection}>
          <h3>Meu Plano</h3>
          <p className={styles.hiddenText}>Altere seu plano</p>
          <div className={`${styles.divInputs} mt-4`}>
            <div className="mb-3">
              <div className="d-flex justify-content-start align-items-center">
                <p className="m-0 me-3">Seu plano atual é:</p>
                <div>
                  <SealPlanCard type={'gratis'} color={'light-blue'} />
                </div>
              </div>
              <ModalPlan />
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
        </div>
      </div>
      <div className="col-12 col-md-12 align-self-stretch mt-5">
        <div className="text-center">
          <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
        </div>
      </div>
    </form>
  );
};

export default ConfigPlan;

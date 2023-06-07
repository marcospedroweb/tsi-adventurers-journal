import React from 'react';
import styles from './ModalPlan.module.css';
import ButtonCustom from './ButtonCustom';
import { Form, Modal } from 'react-bootstrap';
import SealPlanCard from './SealPlanCard';
import CardsPlans from './CardsPlans';

const ModalPlan = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonCustom variant="primary" onClick={handleShow}>
        Alterar plano
      </ButtonCustom>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Escolha o tipo de plano</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#1c2331' }}>
          {/* <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-4 align-self-stretch mb-4 mb-lg-0">
              <div className={`${styles.divPlan} position-relative`}>
                <h2>Plano</h2>
                <SealPlanCard type="gratis" classN="mx-auto mb-3" />
                <h3>
                  R$ 0 <span>/mensal</span>
                </h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 mb-3">
                  <ButtonCustom>Escolher plano</ButtonCustom>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 align-self-stretch mb-4 mb-lg-0">
              <div className={`${styles.divPlan} position-relative`}>
                <h2>Plano</h2>
                <SealPlanCard type="adventurer" classN="mx-auto mb-3" />
                <h3>
                  R$ 150 <span>/mensal</span>
                </h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className={styles.hiddenText}>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 mb-3">
                  <ButtonCustom>Escolher plano</ButtonCustom>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 align-self-stretch">
              <div className={`${styles.divPlan} position-relative`}>
                <h2>Plano</h2>
                <SealPlanCard type="plus" classN="mx-auto mb-3" />
                <h3>
                  R$ 280 <span>/mensal</span>
                </h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 mb-3">
                  <ButtonCustom>Escolher plano</ButtonCustom>
                </div>
              </div>
            </div>
          </div> */}
          <CardsPlans dark={true} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPlan;

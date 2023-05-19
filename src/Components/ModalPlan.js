import React from 'react';
import styles from './ModalPlan.module.css';
import ButtonCustom from './ButtonCustom';
import { Form, Modal } from 'react-bootstrap';

const ModalPlan = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonCustom variant="primary" onClick={handleShow}>
        Alterar plano
      </ButtonCustom>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Escolha o tipo de plano</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form.Check
              disabled
              type={'radio'}
              label={`disabled radio`}
              id={`disabled-default-radio`}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPlan;

import React from 'react';
import styles from './ModalEditUser.module.css';
import { Modal } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';

const ModalEditUser = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className={`${styles.background} position-absolute top-50 start-50 translate-middle`}
        onClick={handleShow}
      >
        <button type="button" className={`${styles.btn} `}>
          <BsPencil color="#87FAD1" size={'20px'} />
        </button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="h4 fw-bold">Entre na sua conta</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer className="text-center d-flex flex-column">
          <span>Ainda não tem uma conta?</span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditUser;

import React from 'react';
import styles from './ModalTrip.module.css';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';

const ModalTrip = ({ data }) => {
  //Modal
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bio = GetSimpleInputObj('bio');

  React.useEffect(() => {
    bio.validation.setValue(data.feedback);
  }, []);

  return (
    <>
      <ButtonCustom variant="primary" onClick={handleShow}>
        Editar aventura
      </ButtonCustom>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className={styles.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Alterando viagem</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className={`${styles.divInfo} row justify-content-between align-items-start w-100`}
            >
              <div className="col-12 col-lg-6">
                <div
                  className={styles.divImg}
                  style={{ backgroundImage: `url(/imgs/${data.image})` }}
                ></div>
              </div>
              <div className="col-12 col-lg-6">
                <div>
                  <h3>Modalidade praticada</h3>
                  <p>{data.modality}</p>
                  <h3>Local</h3>
                  <p>{data.location}</p>
                  <h3>Data</h3>
                  <p>
                    {data.data_chegada} - {data.data_partida}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.divChangeText} row justify-content-between align-items-start w-100`}
            >
              <div className="col-12 col-lg-6">
                <div className={`${styles.divInputs} mt-4`}>
                  <div>
                    <h3>Nome Completo</h3>
                    <FloatingLabel
                      controlId={'feedback'}
                      label={'Nome Completo'}
                      className="mt-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        maxLength={250}
                        style={{ height: '100px' }}
                        ref={bio.ref}
                        value={bio.validation.value}
                        onChange={(event) => {
                          bio.validation.onChange(event);
                        }}
                        onBlur={bio.validation.onBlur}
                        minLength={4}
                        maxLength={25}
                      />
                    </FloatingLabel>
                    {/* {bio.validation.error ? (
                      <p className={styles.error}>{bio.validation.error}</p>
                    ) : (
                      ''
                    )}
                    {bio.validation.value !== user.user.name && (
                      <UnsavedChanges />
                    )} */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6"></div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTrip;

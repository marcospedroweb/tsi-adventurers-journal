import React from 'react';
import styles from './ModalTrip.module.css';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import UnsavedChanges from './UnsavedChanges';

const ModalTrip = ({ data }) => {
  //Modal
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bio = GetSimpleInputObj('bio');
  const avaliation = GetSimpleInputObj('avaliation');

  React.useEffect(() => {
    bio.validation.setValue(data.feedback);
    avaliation.validation.setValue(data.nota);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    alert('Form enviado' + data.modality);
    handleClose();
  }

  return (
    <>
      <ButtonCustom variant="primary" onClick={handleShow}>
        Editar aventura
      </ButtonCustom>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={styles.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Alterando viagem</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            method="POST"
            action="#"
            onSubmit={handleSubmit}
            className="d-flex flex-column justify-content-center align-items-center"
          >
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
              <div className="col-12 col-lg-8">
                <div className={`${styles.divInputs} mt-4`}>
                  <h3>Comentário</h3>
                  <FloatingLabel
                    controlId={'feedback'}
                    label={'Seu comentário sobre a viagem'}
                    className="mt-2"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Seu comentário sobre a viagem"
                      maxLength={250}
                      style={{ height: '170px', resize: 'none' }}
                      ref={bio.ref}
                      value={bio.validation.value}
                      onChange={(event) => {
                        bio.validation.onChange(event);
                      }}
                      onBlur={bio.validation.onBlur}
                    />
                  </FloatingLabel>
                  {bio.validation.error ? (
                    <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                      {bio.validation.error}
                    </p>
                  ) : (
                    ''
                  )}
                  {bio.validation.value && <UnsavedChanges />}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className={`${styles.divInputs} mt-4`}>
                  <h3>Nota</h3>
                  <FloatingLabel
                    controlId="inputNota"
                    label="Nota da viagem"
                    className="mb-1"
                  >
                    <Form.Control
                      type="number"
                      placeholder="name@example.com"
                      ref={avaliation.ref}
                      value={avaliation.validation.value}
                      onChange={(event) => {
                        avaliation.validation.onChange(event);
                      }}
                      onBlur={avaliation.validation.onBlur}
                      min={0}
                      max={10}
                      step={0.1}
                    />
                  </FloatingLabel>
                  {avaliation.validation.error ? (
                    <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                      {avaliation.validation.error}
                    </p>
                  ) : (
                    ''
                  )}
                  {avaliation.validation.value && <UnsavedChanges />}
                </div>
              </div>
              <div className="col-12">
                <div className="text-center mt-4">
                  <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTrip;

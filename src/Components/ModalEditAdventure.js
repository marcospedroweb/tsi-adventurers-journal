import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import DropdownPassengers from './DropdownPassengers';
import PassengersNum from './PassengersNum';
import styles from './ModalEditAdventure.module.css';

const ModalEditAdventure = ({ passengersNum }) => {
  const [show, setShow] = React.useState(false);
  const [passengers, setPassengers] = React.useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    setPassengers(passengersNum);
  }, []);

  return (
    <>
      <ButtonCustom variant="primary" onClick={handleShow}>
        Editar
      </ButtonCustom>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alterando informações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.divEdit}>
            <h4 className="fs-5 fw-bold mb-3">Quantidade de Passageiros</h4>
            <div className="bg-white rounded" style={{ width: 'fit-content' }}>
              <PassengersNum
                title={'Adultos'}
                text={'Acima de 13 anos'}
                value={passengers}
                setValue={setPassengers}
                bsClass={true}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditAdventure;

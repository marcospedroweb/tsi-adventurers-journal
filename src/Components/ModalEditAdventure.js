import React from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import PassengersNum from './PassengersNum';
import styles from './ModalEditAdventure.module.css';
import { apiRoute, optionsFetch, updateCartRoute } from '../DB/data';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';

const ModalEditAdventure = ({ passengersNum, id, getCart }) => {
  const { session } = React.useContext(GlobalContext);
  const [show, setShow] = React.useState(false);
  const [passengers, setPassengers] = React.useState(0);
  const { loading, request } = useFetch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    setPassengers(passengersNum);
  }, []);

  async function updateCart(event) {
    event.preventDefault();
    const { json } = await request(
      `${apiRoute}${updateCartRoute}${id}`,
      optionsFetch({
        method: 'PUT',
        token: session.user.token,
        body: {
          qtdPessoa: passengers,
        },
      }),
    );
    if (json) {
      handleClose();
    }
    getCart();
  }

  return (
    <>
      <ButtonCustom variant="primary" onClick={handleShow}>
        Editar
      </ButtonCustom>

      <Modal show={show} onHide={handleClose}>
        <form method="POST" action="#" onSubmit={updateCart}>
          <Modal.Header closeButton>
            <Modal.Title>Alterando informações</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.divEdit}>
              <h4 className="fs-5 fw-bold mb-3">Quantidade de Passageiros</h4>
              <div
                className="bg-white rounded"
                style={{ width: 'fit-content' }}
              >
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
            <Button
              type="submit"
              loading={loading ? 'true' : ''}
              variant={loading ? 'secondary' : 'primary'}
              className="d-flex justify-content-center align-items-center"
            >
              {loading ? (
                <Spinner
                  className="me-3"
                  style={{ width: '24px', height: '24px' }}
                />
              ) : (
                ''
              )}
              {loading ? 'Salvando...' : 'Salvar alterações'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalEditAdventure;

import React from 'react';
import styles from './ModalTrip.module.css';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import UnsavedChanges from './UnsavedChanges';
import { apiRoute, optionsFetch, updateOrdersRoute } from '../DB/data';
import useFetch from '../Hooks/useFetch';
import { GlobalContext } from '../Context/GlobalStorage';

const ModalTrip = ({ data, getTripList }) => {
  const { session } = React.useContext(GlobalContext);
  const date = new Date(data.idAtividade[0].Data_e_Hora);
  //Modal
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bio = React.useRef();
  const [bioLength, setBioLength] = React.useState(0);
  const avaliation = React.useRef();
  const { loading, request } = useFetch();

  React.useEffect(() => {
    // bio.validation.setValue(data.feedback);
    // avaliation.validation.setValue(data.nota);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const newBio = bio.current.value;
    const newAvaliation = avaliation.current.value.replace(',', '.');
    if (newBio !== data.comentario || newAvaliation !== data.nota) {
      console.log(
        optionsFetch({
          method: 'PUT',
          token: session.user.token,
          body: {
            comentario: newBio,
            nota: parseFloat(newAvaliation),
          },
        }),
      );
      const { json } = await request(
        `${apiRoute}${updateOrdersRoute}${data.id}`,
        optionsFetch({
          method: 'PUT',
          token: session.user.token,
          body: {
            comentario: newBio,
            nota: parseFloat(newAvaliation),
          },
        }),
      );
      if (json.status === 200) {
        getTripList();
        handleClose();
      } else {
        handleClose();
      }
    }

    // alert('Form enviado' + data.modality);
    // setShow(false);
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
                  style={{
                    backgroundImage: `url(${`${apiRoute}/storage/${data.idAtividade[0].modalidade[0].foto}`})`,
                  }}
                ></div>
              </div>
              <div className="col-12 col-lg-6">
                <div>
                  <h3>Modalidade(s) praticada</h3>
                  <p>
                    {[
                      data.idAtividade[0].modalidade.map(
                        ({ nome }) => ` ${nome}`,
                      ),
                    ].join(', ')}
                  </p>
                  <h3>Local</h3>
                  <p>
                    {`${data.idAtividade[0].cidade.nome}, ${data.idAtividade[0].cidade.uf}
                    - ${data.idAtividade[0].cidade.pais}`}
                  </p>
                  <h3>Data</h3>
                  <p>
                    {`${date.toLocaleDateString('pt-BR', {
                      day: '2-digit',
                    })}/${date.toLocaleDateString('pt-BR', {
                      month: '2-digit',
                    })}/${date.getFullYear()} - ${date.getHours()}:${date
                      .getMinutes()
                      .toString()
                      .padStart(2, '0')}`}
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
                      style={{ height: '150px', resize: 'none' }}
                      ref={bio}
                      onChange={(event) => {
                        let formated = event.target.value;

                        // Limitar para no máximo 250 caracteres, incluindo espaços
                        if (formated.length > 250) {
                          formated = formated.slice(0, 250);
                        }

                        // Remover caracteres especiais, permitindo apenas letras, números, "?" e "!"
                        formated = formated.replace(/[^a-zA-Z0-9\s!?]/g, '');

                        setBioLength(formated.length);
                        event.target.value = formated;
                      }}
                    />
                  </FloatingLabel>
                  <div className="text-end">
                    <span>{bioLength ? bioLength : 0}/250</span>
                  </div>
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
                      ref={avaliation}
                      onChange={(event) => {
                        let formated = event.target.value;

                        // formated = formated.replace(/^\d+(,\d+)?$/g, '');
                        // Limitar para no máximo 250 caracteres, incluindo espaços
                        if (Number.parseFloat(formated) > 10) {
                          formated = 10;
                        }
                        // if (formated.split(',')[1].length > 1) {
                        //   formated = parseFloat(formated).toFixed(1);
                        // }
                        // Remover caracteres especiais, permitindo apenas letras, números, "?" e "!"

                        console.log(Number.parseFloat(formated));
                        event.target.value = formated;
                      }}
                      min={0}
                      max={10}
                      step={0.1}
                    />
                  </FloatingLabel>
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

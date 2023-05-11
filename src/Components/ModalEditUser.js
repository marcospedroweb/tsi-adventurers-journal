import React from 'react';
import styles from './ModalEditUser.module.css';
import { Modal } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import EditUserLabel from './EditUserLabel';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';

const ModalEditUser = ({ user }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const name = GetSimpleInputObj('name');
  const email = GetSimpleInputObj('email');
  const password = GetSimpleInputObj('password');
  const tel = GetSimpleInputObj('tel');
  const imagePhoto = GetSimpleInputObj('image');
  const imageBanner = GetSimpleInputObj('image');

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

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="h4 fw-bold">Editar informações pessoais</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <div className="row flex-column flex-sm-row justify-content-between align-items-center">
            <EditUserLabel
              title={'Nome Completo'}
              data={user.name}
              form={name}
            />
            <EditUserLabel title={'Email'} data={user.email} form={email} />
            <EditUserLabel
              title={'Senha'}
              data={'Senha oculta'}
              form={password}
            />
            <EditUserLabel title={'Telefone'} data={user.tel} form={tel} />
            <EditUserLabel title={'Banner'} data={''} form={imageBanner} />
            <EditUserLabel
              title={'Foto de perfil'}
              data={''}
              form={imagePhoto}
            />
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="text-center d-flex flex-column">
          <span>Ainda não tem uma conta?</span>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ModalEditUser;

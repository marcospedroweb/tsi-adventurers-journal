import React from 'react';
import styles from './ModalCustom.module.css';
import ButtonCustom from './ButtonCustom';
import { Button, Modal } from 'react-bootstrap';
import InputCustom from './InputCustom';
import useForm from '../Hooks/userForm';
import useFetch from '../Hooks/useFetch';

const ModalCustom = ({ typeBtn = 'btn', textBtn, children = '' }) => {
  const [show, setShow] = React.useState(false);
  const [showCadastro, setShowCadastro] = React.useState(false);

  const name = {
    validation: useForm('name'),
    error: '',
    ref: React.useRef(),
  };
  const email = {
    validation: useForm('email'),
    error: '',
    ref: React.useRef(),
  };
  const pass = {
    validation: useForm('password'),
    error: '',
    ref: React.useRef(),
  };

  const { data, loading, error, request } = useFetch();
  console.log(data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCadastro = () => setShowCadastro(false);
  const handleShowCadastro = () => setShowCadastro(true);

  function handleSubmit(event) {
    // event.preventDefault();
    // console.log(
    //   name.ref.current.value + email.ref.current.value + pass.ref.current.value,
    // );
    // request('http://localhost:8000/users', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name: name.ref.current.value,
    //     email: email.ref.current.value,
    //     password: pass.ref.current.value,
    //   }),
    // });
    // console.log(data);
  }

  return (
    <>
      <ButtonCustom onClick={handleShow}>Login</ButtonCustom>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Entre na sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>Bem-vindo(a)</span>

          <form action="#" method="POST">
            <InputCustom
              type="email"
              label="Email"
              // refComponent={email.ref}
              error={email.error}
              required
            />
            <InputCustom
              type="password"
              label="Senha"
              // refComponent={pass.ref}
              error={pass.error}
              required
            />
            <ButtonCustom type="submit" bsClass={'mt-3 w-100'}>
              Entrar
            </ButtonCustom>
          </form>
        </Modal.Body>
        <Modal.Footer className="text-center d-flex flex-column">
          <span>Ainda não tem uma conta?</span>
          <ButtonCustom
            onClick={() => {
              handleClose();
              handleShowCadastro();
            }}
          >
            Criar conta
          </ButtonCustom>
        </Modal.Footer>
      </Modal>

      <Modal show={showCadastro} onHide={handleCloseCadastro} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crie sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>Bem-vindo(a)</span>

          <form action="http://localhost:8000/users" method="POST">
            <InputCustom
              type="text"
              label="Nome Completo"
              refComponent={name.ref}
              error={name.error}
              required
            />
            <InputCustom
              type="email"
              label="Email"
              refComponent={email.ref}
              error={email.error}
              required
            />
            <InputCustom
              type="password"
              label="Senha"
              refComponent={pass.ref}
              error={pass.error}
              required
            />
            <ButtonCustom type="submit" bsClass={'mt-3 w-100'}>
              Criar conta
            </ButtonCustom>
          </form>
        </Modal.Body>
        <Modal.Footer className="text-center d-flex flex-column">
          <span>Já tem uma conta?</span>
          <ButtonCustom
            onClick={() => {
              handleCloseCadastro();
              handleShow();
            }}
          >
            Entrar na conta
          </ButtonCustom>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCustom;

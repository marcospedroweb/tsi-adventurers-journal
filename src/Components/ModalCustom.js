import React from 'react';
import styles from './ModalCustom.module.css';
import ButtonCustom from './ButtonCustom';
import { Modal } from 'react-bootstrap';
import InputCustom from './InputCustom';
import useForm from '../Hooks/userForm';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalStorage';

const ModalCustom = ({ typeBtn = 'btn', textBtn, children = '' }) => {
  const [show, setShow] = React.useState(false);
  const [showCadastro, setShowCadastro] = React.useState(false);
  const { session, setSession } = React.useContext(GlobalContext);

  const name = {
    validation: useForm('name'),
    error: '',
    refRegister: React.useRef(),
  };
  const email = {
    validation: useForm('email'),
    error: '',
    refLogin: React.useRef(),
    refRegister: React.useRef(),
  };
  const pass = {
    validation: useForm('password'),
    error: '',
    refLogin: React.useRef(),
    refRegister: React.useRef(),
  };

  const { data, loading, error, request } = useFetch();

  function handleSubmitLogin(event) {
    event.preventDefault();

    const emailData = email.refLogin.current.value;
    const passData = pass.refLogin.current.value;
    const json = request('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailData,
        password: passData,
      }),
    });
  }
  async function handleSubmitRegister(event) {
    event.preventDefault();

    const nameData = name.refRegister.current.value;
    const emailData = email.refRegister.current.value;
    const passData = pass.refRegister.current.value;
    console.log(nameData);
    console.log(emailData);
    console.log(passData);
    const json = await request('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameData,
        email: emailData,
        password: passData,
      }),
    });
    setSession({
      logged: true,
      user: {
        name: data.name,
        email: data.email,
      },
    });
    console.log('json' + json);
    console.log('data' + data);
  }

  const handleCloseLogin = () => setShow(false);
  const handleShowLogin = () => setShow(true);

  const handleCloseCadastro = () => setShowCadastro(false);
  const handleShowCadastro = () => setShowCadastro(true);

  return (
    <>
      <ButtonCustom onClick={handleShowLogin}>{textBtn}</ButtonCustom>

      {/* Login */}
      <Modal show={show} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="h4 fw-bold">Entre na sua conta</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="text-start" style={{ fontWeight: '600' }}>
            Bem-vindo(a) de volta
          </span>

          <form action="#" method="POST" onSubmit={handleSubmitLogin}>
            <InputCustom
              id="emailLogin"
              type="email"
              label="Email"
              name="emailLogin"
              refComponent={email.refLogin}
              error={email.error}
              required
            />
            <InputCustom
              id="passLogin"
              type="password"
              label="Senha"
              name="passLogin"
              refComponent={pass.refLogin}
              error={pass.error}
              required
              minLength="4"
            />
            <ButtonCustom type="submit" bsClass={'mt-3 w-100'}>
              Entrar
            </ButtonCustom>
          </form>
        </Modal.Body>
        <Modal.Footer className="text-center d-flex flex-column">
          <span>
            Ainda não tem uma conta?{' '}
            <span
              className="link-primary fw-bold"
              onClick={() => {
                handleCloseLogin();
                handleShowCadastro();
              }}
            >
              Criar conta agora
            </span>
          </span>
        </Modal.Footer>
      </Modal>

      {/* Cadastro */}
      <Modal show={showCadastro} onHide={handleCloseCadastro} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crie sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="text-start" style={{ fontWeight: '600' }}>
            Bem-vindo(a)
          </span>

          <form action="#" method="POST" onSubmit={handleSubmitRegister}>
            <InputCustom
              id="nameRegister"
              type="text"
              label="Nome Completo"
              name="nameRegister"
              refComponent={name.refRegister}
              error={name.error}
              required
              minLength="4"
              maxLength="25"
            />
            <InputCustom
              id="emailRegister"
              type="email"
              label="Email"
              name="emailRegister"
              refComponent={email.refRegister}
              error={email.error}
              required
            />
            <InputCustom
              id="passRegister"
              type="password"
              label="Senha"
              name="password"
              refComponent={pass.refRegister}
              error={pass.error}
              required
              minLength="4"
            />
            <ButtonCustom type="submit" bsClass={'mt-3 w-100'}>
              Criar conta
            </ButtonCustom>
          </form>
        </Modal.Body>
        <Modal.Footer className="text-center d-flex flex-column">
          <span>
            Já tem uma conta?{' '}
            <span
              className="link-primary fw-bold"
              onClick={() => {
                handleCloseCadastro();
                handleShowLogin();
              }}
            >
              Entrar na conta
            </span>
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCustom;

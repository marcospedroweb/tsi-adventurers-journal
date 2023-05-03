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

  const [name, setName] = React.useState({
    validationRegister: useForm('name'),
    error: '',
    refRegister: React.useRef(),
  });
  const [email, setEmail] = React.useState({
    validationLogin: useForm('email'),
    validationRegister: useForm('email'),
    error: '',
    refLogin: React.useRef(),
    refRegister: React.useRef(),
  });
  const [pass, setPass] = React.useState({
    validationLogin: useForm('password'),
    validationRegister: useForm('password'),
    error: '',
    refLogin: React.useRef(),
    refRegister: React.useRef(),
  });

  const teste = useForm('email');

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

    if (email.validation.validate()) {
      console.log('teste');
    }

    const nameData = name.refRegister.current.value;
    const emailData = email.refRegister.current.value;
    const passData = pass.refRegister.current.value;

    const { json } = await request('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameData,
        email: emailData,
        password: passData,
      }),
    });

    if (json.message) {
      Object.keys(json.errors).forEach((errorName) => {
        if (errorName === 'email') {
          if (
            json.errors[errorName][0] === 'The email has already been taken.'
          ) {
            email.error = 'Este email já esta sendo usado. Tente outro.';
          }
        }
        if (errorName === 'password') {
          if (
            json.errors[errorName][0] ===
            'The password field must be at least 6 characters.'
          ) {
            email.error = 'Sua senha deve ter pelo menos 6 caracteres.';
          }
        }
        // json.errors[errorName];
      });
      console.log('erros');
    }

    // setSession({
    //   logged: true,
    //   user: {
    //     name: data.name,
    //     email: data.email,
    //   },
    // });
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
              required
              {...email.validationLogin}
            />
            <InputCustom
              id="passLogin"
              type="password"
              label="Senha"
              name="passLogin"
              refComponent={pass.refLogin}
              required
              {...pass.validationLogin}
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
              required
              minLength="4"
              maxLength="25"
              {...name.validationRegister}
            />
            <InputCustom
              id="emailRegister"
              type="email"
              label="Email"
              name="emailRegister"
              refComponent={email.refRegister}
              required
              {...email.validationRegister}
            />
            <InputCustom
              id="passRegister"
              type="password"
              label="Senha"
              name="password"
              refComponent={pass.refRegister}
              required
              minLength="6"
              {...pass.validationRegister}
            />
            {loading && (
              <ButtonCustom type="submit" bsClass={'mt-3 w-100'} loading={true}>
                Carregando...
              </ButtonCustom>
            )}
            {!loading && (
              <ButtonCustom type="submit" bsClass={'mt-3 w-100'}>
                Criar conta
              </ButtonCustom>
            )}
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

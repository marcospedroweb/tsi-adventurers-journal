import React from 'react';
import styles from './ModalCustom.module.css';
import ButtonCustom from './ButtonCustom';
import { Modal } from 'react-bootstrap';
import InputCustom from './InputCustom';
import useFetch from '../Hooks/useFetch';
import { GlobalContext } from '../Context/GlobalStorage';
import { noUserImageBase64 } from '../Helpers/NoUserBase64';
import { noUserBannerBase64 } from '../Helpers/NoUserBanner64';
import GetInputObj from '../Helpers/GetInputObj';
import useForm from '../Hooks/userForm';

const ModalCustom = ({ typeBtn = 'btn', textBtn, children = '' }) => {
  const [show, setShow] = React.useState(false);
  const [showCadastro, setShowCadastro] = React.useState(false);
  const { session, setSession } = React.useContext(GlobalContext);

  // Variavel com informações de Ref,Validadtion de dados e erros
  const name = GetInputObj('name');
  const email = GetInputObj('email');
  const pass = GetInputObj('password');

  //Fetch personalizado
  const { data, loading, error, request } = useFetch();

  //Login Submit
  async function handleSubmitLogin(event) {
    event.preventDefault();

    const emailData = email.refLogin.current.value;
    const passData = pass.refLogin.current.value;
    const json = await request('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailData,
        password: passData,
      }),
    });
  }

  //Register submit
  async function handleSubmitRegister(event) {
    event.preventDefault();

    const nameData = name.refRegister.current.value;
    const emailData = email.refRegister.current.value;
    const passData = pass.refRegister.current.value;

    // Verifica se todos os campos estão preenchidos de maneira correta
    if (
      !name.validationRegister.validate() &&
      email.validationRegister.validate() &&
      pass.validationRegister.validate()
    )
      return;

    //Faz o fetch para realizar o cadastro de novo usuario
    const { json } = await request('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameData,
        email: emailData,
        password: passData,
        profile_photo_path: noUserImageBase64,
        profile_banner_path: noUserBannerBase64,
      }),
    });

    if (json.message === 'Erro de validação') {
      Object.keys(json.errors).forEach((errorName) => {
        if (errorName === 'email') {
          if (
            json.errors[errorName][0] === 'The email has already been taken.'
          ) {
            email.validationRegister.setError(
              'Este email já esta sendo usado. Tente outro.',
            );
          }
        }
        if (errorName === 'password') {
          if (
            json.errors[errorName][0] ===
            'The password field must be at least 6 characters.'
          ) {
            pass.validationRegister.setError(
              'Este email já esta sendo usado. Tente outro.',
            );
          }
        }
      });
      return;
    }

    setSession({
      logged: true,
      user: {
        name: json.data.name,
        email: json.data.email,
      },
    });
  }

  //Modal Login
  const handleCloseLogin = () => setShow(false);
  const handleShowLogin = () => setShow(true);
  //Modal Register
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
              refComponent={email.refLogin}
              required={true}
              errorBack={email.errorLogin}
              {...email.validationLogin}
            />
            <InputCustom
              id="passLogin"
              type="password"
              label="Senha"
              refComponent={pass.refLogin}
              required={true}
              errorBack={pass.errorLogin}
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
              refComponent={name.refRegister}
              required={true}
              errorBack={name.errorRegister}
              minLength="4"
              maxLength="25"
              {...name.validationRegister}
            />
            <InputCustom
              id="emailRegister"
              type="email"
              label="Email"
              refComponent={email.refRegister}
              required={true}
              errorBack={name.errorLogin}
              {...email.validationRegister}
            />
            <InputCustom
              id="passRegister"
              type="password"
              label="Senha"
              refComponent={pass.refRegister}
              required={true}
              errorBack={name.errorRegister}
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

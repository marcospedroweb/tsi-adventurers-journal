import React from 'react';
import styles from './LoginSection.module.css';
import { FloatingLabel, Form } from 'react-bootstrap';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import ButtonCustom from './ButtonCustom';
import useFetch from '../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalStorage';
import {
  addInCartRoute,
  apiRoute,
  loginRoute,
  optionsFetch,
  showUserRoute,
} from '../DB/data';

const LoginSection = () => {
  const { session, setSession, searchAdventure } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const email = GetSimpleInputObj('email');
  const password = GetSimpleInputObj('password');
  const [backError, setBackError] = React.useState(false);
  const { loading, request } = useFetch();

  async function handleSubmitLogin(event) {
    event.preventDefault();

    const emailData = email.ref.current.value;
    const passData = password.ref.current.value;

    const loginResult = await request(
      `${apiRoute}${loginRoute}`,
      optionsFetch({
        method: 'POST',
        body: {
          email: emailData,
          password: passData,
        },
      }),
    );

    if (loginResult.response.status === 401) {
      email.validation.setError('Email e/ou senha incorretos');
      password.validation.setError('Email e/ou senha incorretos');
    } else if (loginResult.json === null) {
      setBackError(true);
      return;
    } else {
      email.validation.setError('');
      password.validation.setError('');
    }

    const showUser = await request(
      `${apiRoute}${showUserRoute}`,
      optionsFetch({ method: 'GET', token: loginResult.json.token }),
    );

    const user = {
      name: showUser.json.data.name,
      email: showUser.json.data.email,
      token: loginResult.json.token,
    };

    window.sessionStorage.setItem('user', JSON.stringify(user));

    setSession({
      logged: true,
      user: user,
    });

    if (session.cartId) {
      console.log(session.cartId);
      const { json } = await request(
        `${apiRoute}${addInCartRoute}`,
        optionsFetch({
          method: 'POST',
          token: loginResult.json.token,
          body: {
            idAtividade: session.cartId,
            qtdPessoa: searchAdventure.passengers,
          },
        }),
      );
      if (json.carrinho) navigate('/carrinho');
      else navigate('/aventurar-se');
      return;
    }
  }

  React.useEffect(() => {
    if (window.sessionStorage.getItem('user')) {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
      setSession({
        logged: true,
        user: user,
      });
      navigate('/');
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-lg-6">
          <div className={styles.banner}></div>
        </div>
        <div className={`${styles.divForm} col-10 col-lg-5 mx-auto`}>
          <Form className={`${styles.form}`} onSubmit={handleSubmitLogin}>
            <h2 className="text-white text-center fw-bold mb-4">
              Entre na conta
            </h2>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="email@email.com"
                ref={email.ref}
                value={email.validation.value}
                onChange={email.validation.onChange}
                onBlur={email.validation.onBlur}
                required
              />
              {email.validation.error && (
                <span className="d-block text-danger mt-1">
                  {email.validation.error}
                </span>
              )}
            </FloatingLabel>

            <FloatingLabel controlId="password" label="Senha" className="mb-3">
              <Form.Control
                type="password"
                placeholder="senha"
                ref={password.ref}
                value={password.validation.value}
                onChange={password.validation.onChange}
                onBlur={password.validation.onBlur}
                required
              />
              {password.validation.error && (
                <span className="d-block text-danger mt-1">
                  {password.validation.error}
                </span>
              )}
            </FloatingLabel>
            <div className="text-center">
              {loading && (
                <ButtonCustom
                  type="button"
                  bsClass={
                    'mt-3 w-100 d-flex justify-content-center align-items-center fw-bold'
                  }
                  loading={true}
                >
                  Carregando...
                </ButtonCustom>
              )}
              {!loading && (
                <ButtonCustom type="submit" bsClass={'mt-3 w-100 fw-bold'}>
                  Entrar na conta
                </ButtonCustom>
              )}
              {backError && (
                <span className="d-block text-danger mt-3">
                  Houve algum erro. Tente novamente dentro de alguns minutos.
                </span>
              )}
            </div>
            <div className={`${styles.separator}`}>
              <span>
                <span className={`${styles.spanText} mx-2 text-uppercase`}>
                  Ou
                </span>
              </span>
            </div>
            <div className={styles.divRegister}>
              <p>
                Ainda não tem uma conta?{' '}
                <span
                  onClick={() => {
                    navigate('/criar-conta');
                  }}
                >
                  Criar conta
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;

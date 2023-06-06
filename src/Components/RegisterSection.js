import React from 'react';
import styles from './RegisterSection.module.css';
import { FloatingLabel, Form } from 'react-bootstrap';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import ButtonCustom from './ButtonCustom';
import useFetch from '../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalStorage';
import {
  addInCartRoute,
  apiRoute,
  optionsFetch,
  registerRoute,
} from '../DB/data';

const RegisterSection = () => {
  const { session, setSession, searchAdventure } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [isGuia, setIsGuia] = React.useState(false);
  const name = GetSimpleInputObj('name');
  const email = GetSimpleInputObj('email');
  const password = GetSimpleInputObj('password');
  const [backError, setBackError] = React.useState(false);
  const { error, loading, request } = useFetch();

  async function handleSubmitRegister(event) {
    event.preventDefault();

    const nameData = name.ref.current.value;
    const emailData = email.ref.current.value;
    const passData = password.ref.current.value;

    // Verifica se todos os campos estão preenchidos de maneira correta
    if (
      !name.validation.validate() &&
      email.validation.validate() &&
      password.validation.validate()
    )
      return;

    // Faz o fetch para realizar o cadastro de novo usuario
    const { json } = await request(
      `${apiRoute}${registerRoute}`,
      optionsFetch({
        method: 'POST',
        body: {
          name: nameData,
          email: emailData,
          password: passData,
          isGuia: isGuia,
        },
      }),
    );

    if (json === null) {
      setBackError(true);
      return;
    }

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
            password.validationRegister.setError(
              'Este email já esta sendo usado. Tente outro.',
            );
          }
        }
      });
      return;
    }

    const user = {
      name: json.user.name,
      email: json.user.email,
      token: json.token,
    };

    window.sessionStorage.setItem('user', JSON.stringify(user));

    setSession({
      logged: true,
      user: user,
    });

    if (session.cartId) {
      const { json } = await request(
        `${apiRoute}${addInCartRoute}`,
        optionsFetch({
          method: 'POST',
          token: user.token,
          body: {
            idAtividade: session.cartId,
            qtdPessoa: searchAdventure.passengers,
          },
        }),
      );
      if (json.carrinho) navigate('/carrinho');
      else navigate('/aventurar-se');
    } else {
      navigate('/aventurar-se');
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guia = params.get('guia');
    if (guia) setIsGuia(true);

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
          <Form className={`${styles.form}`} onSubmit={handleSubmitRegister}>
            <h2 className="text-white text-center fw-bold mb-4">
              Criando conta
              {isGuia ? <span className="d-block">(Guia turistico)</span> : ''}
            </h2>
            <FloatingLabel
              controlId="name"
              label="Nome completo"
              className="mb-3"
              required
            >
              <Form.Control
                type="text"
                placeholder="Insira seu nome completo"
                minLength="4"
                maxLength="25"
                ref={name.ref}
                value={name.validation.value}
                onChange={name.validation.onChange}
                onBlur={name.validation.onBlur}
                required
              />
              {name.validation.error && (
                <span className="d-block text-danger mt-1">
                  {name.validation.error}
                </span>
              )}
            </FloatingLabel>
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
              {email.error[0] && (
                <span className="d-block text-danger mt-1">
                  {email.error[0]}
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
              {password.error[0] && (
                <span className="d-block text-danger mt-1">
                  {password.error[0]}
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
                  Criar conta
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
                Já tem uma conta?{' '}
                <span
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Entrar na conta
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;

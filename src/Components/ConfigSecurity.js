import React from 'react';
import styles from './ConfigSecurity.module.css';
import ButtonCustom from './ButtonCustom';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { FloatingLabel, Form } from 'react-bootstrap';
import UnsavedChanges from './UnsavedChanges';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';

const ConfigSecurity = ({ user }) => {
  const { session, alertEditing, editing, setEditing } =
    React.useContext(GlobalContext);
  const email = GetSimpleInputObj('email');
  const password = GetSimpleInputObj('password');
  const { loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    alert('form enviado');
  }

  React.useEffect(() => {
    email.validation.setValue(user.user.email);
    password.validation.setValue('senha');
  }, []);

  return (
    <form
      action="#"
      method="POST"
      className={`${styles.divMain} row justify-content-between align-items-center`}
      onSubmit={handleSubmit}
    >
      <div className="col-12 col-md-12 align-self-stretch">
        <div className={styles.divSection}>
          <h3>Dados de login</h3>
          <p className={styles.hiddenText}>
            Altera o seu email e senha de login
          </p>
          <div className={`${styles.divInputs} mt-4`}>
            <div className="mb-3">
              <h4>Email</h4>
              <FloatingLabel
                controlId={'email'}
                label={'Email'}
                className="mt-3"
              >
                <Form.Control
                  type="email"
                  label="Email"
                  ref={email.ref}
                  value={email.validation.value}
                  onChange={(event) => {
                    email.validation.onChange(event);
                    if (editing === false) setEditing(true);
                  }}
                  onBlur={email.validation.onBlur}
                />
              </FloatingLabel>
              {email.validation.error ? (
                <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                  {email.validation.error}
                </p>
              ) : (
                ''
              )}
              {email.validation.value !== user.user.email && <UnsavedChanges />}
            </div>
            <div className="mb-3">
              <h4>Senha</h4>
              <FloatingLabel
                controlId={'password'}
                label={'Senha'}
                className="mt-3"
              >
                <Form.Control
                  type="password"
                  label="Senha"
                  ref={password.ref}
                  value={password.validation.value}
                  onChange={(event) => {
                    password.validation.onChange(event);
                    if (editing === false) setEditing(true);
                  }}
                  onBlur={password.validation.onBlur}
                  required
                />
              </FloatingLabel>
              {password.validation.error ? (
                <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                  {password.validation.error}
                </p>
              ) : (
                ''
              )}
              {password.validation.value !== user.user.email && (
                <UnsavedChanges />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 align-self-stretch mt-5">
        <div className="text-center">
          <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
        </div>
      </div>
    </form>
  );
};

export default ConfigSecurity;

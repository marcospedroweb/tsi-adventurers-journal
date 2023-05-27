import React from 'react';
import styles from './FormAnyQuestions.module.css';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { FloatingLabel, Form } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import MoreContact from './MoreContact';

const FormAnyQuestions = () => {
  const name = GetSimpleInputObj('name');
  const email = GetSimpleInputObj('email');
  const bio = GetSimpleInputObj('bio');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={styles.section}>
      <div className="container-xl">
        <div className="mb-5 text-center">
          <h2>Ficou alguma duvida?</h2>
          <p>
            Entre em contato conosco a qualquer hora do dia ou da noite! Estamos
            sempre prontos para ajudar e fornecer o suporte necessário para
            garantir que sua aventura seja inesquecível.
          </p>
        </div>
        <div className="row flex-column flex-lg-row justify-content-between align-items-center">
          <div className="col-12 col-lg-6 align-self-stretch mb-4 mb-lg-0">
            <form
              action="#"
              method="POST"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <h3 className="mb-3">Como podemos ajudá-lo(a)?</h3>
              <FloatingLabel
                controlId="nameQuestions"
                label="Nome completo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Nome completo"
                  minLength={3}
                  required
                  value={name.validation.value}
                  onChange={name.validation.onChange}
                  onBlur={name.validation.onBlur}
                />
              </FloatingLabel>
              {name.validation.error && (
                <span className="error-mensage">{name.validation.error}</span>
              )}
              <FloatingLabel
                controlId="emailQuestions"
                label="Email"
                className="mt-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={email.validation.value}
                  onChange={email.validation.onChange}
                  onBlur={email.validation.onBlur}
                />
              </FloatingLabel>
              {email.validation.error && (
                <span className="error-mensage">{email.validation.error}</span>
              )}
              <FloatingLabel
                controlId="question"
                label="Como podemos ajudá-lo(a)"
                className="mt-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Como podemos ajudá-lo(a)"
                  required
                  minLength={4}
                  maxLength={300}
                  value={bio.validation.value}
                  onChange={bio.validation.onChange}
                  onBlur={bio.validation.onBlur}
                />
              </FloatingLabel>
              {bio.validation.error && (
                <span className="error-mensage">{bio.validation.error}</span>
              )}
              <div>
                <ButtonCustom
                  bsClass={'mt-3 w-100 text-uppercase fw-bold py-2'}
                  type="submit"
                >
                  Enviar
                </ButtonCustom>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <MoreContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormAnyQuestions;

import React from 'react';
import styles from './ModalityUser.module.css';
import ButtonCustom from './ButtonCustom';
import { FloatingLabel, Form } from 'react-bootstrap';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';

const ModalityUser = ({ img, modality, location, friends, change }) => {
  const [showInput, setShowInput] = React.useState(false);
  const bio = GetSimpleInputObj('bio');
  React.useEffect(() => {
    bio.validation
      .setValue(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    labore officia reprehenderit aut magni at praesentium totam quas,
    harum blanditiis velit? Corporis fuga earum obcaecati atque illo.
    Mollitia distinctio enim, beatae error, neque, ad sit atque
    dignissimos qui quibusdam impedit architecto perspiciatis id
    repudiandae! Consequatur possimus maiores praesentium soluta nisi`);
  }, []);

  return (
    <div className={styles.divMain}>
      <div className="row justify-content-between align-items-center w-100 mt-4">
        <div className="col-3">
          <img src="/imgs/no_user_img.png" alt="" />
        </div>
        <div className="col-9">
          <div className={styles.divText}>
            <div>
              <h2>Surf</h2>
              <p>Rio de Janeiro - 2 amigos</p>
            </div>
            <div>
              <p className={`${showInput ? 'd-none' : ''}`}>
                {bio.validation.value}
                <div className="mt-3">
                  <ButtonCustom
                    onClick={() => {
                      setShowInput(true);
                    }}
                  >
                    Editar
                  </ButtonCustom>
                </div>
              </p>
              <div className={`${showInput ? '' : 'd-none'}`}>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Edite seu comentario"
                  className={`${styles.divInput} mb-3`}
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Deixe o comentario aqui"
                    maxLength={250}
                    onChange={(event) => {
                      bio.validation.onChange(event);
                      change();
                    }}
                    onBlur={bio.validation.onBlur}
                    value={bio.validation.value}
                    style={{ height: '170px' }}
                    ref={bio.ref}
                  />
                </FloatingLabel>
                <ButtonCustom
                  onClick={() => {
                    setShowInput(false);
                  }}
                >
                  Atualizar
                </ButtonCustom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalityUser;

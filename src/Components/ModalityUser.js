import React from 'react';
import styles from './ModalityUser.module.css';
import ButtonCustom from './ButtonCustom';
import { FloatingLabel, Form } from 'react-bootstrap';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';

const ModalityUser = ({ data, change, ref }) => {
  const [showInput, setShowInput] = React.useState(false);
  const bio = GetSimpleInputObj('bio');
  React.useEffect(() => {
    bio.validation.setValue(data.feedback);
  }, []);

  return (
    <div className={styles.divMain} key={`${data.modality}`}>
      <div className="row flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center align-items-lg-start w-100 mt-4">
        <div className="col-12 col-lg-3">
          <div
            className={styles.divImg}
            style={{ backgroundImage: `url(/imgs/${data.image})` }}
          ></div>
          {/* <img src="/imgs/no_user_img.png" alt="" /> */}
        </div>
        <div className="col-12 col-lg-9 mt-4 mt-lg-0 text-center text-lg-start">
          <div className={styles.divText}>
            <div>
              <h2>{data.modality}</h2>
              <p>{data.location}</p>
            </div>
            <div>
              <div className={showInput ? 'd-none' : ''}>
                <h3 className="mt-4 mt-lg-0">Comentário</h3>
                <p className={`position-relative px-4`}>
                  <img
                    src="/imgs/Mark_Left_White.svg"
                    className="position-absolute top-0 start-0"
                    alt="aspas"
                  />
                  {bio.validation.value}
                  <img
                    src="/imgs/Mark_Right_White.svg"
                    className="position-absolute bottom-0 end-0"
                    alt="aspas"
                  />
                </p>
                <div className="mt-4 text-center text-lg-end">
                  <ButtonCustom
                    onClick={() => {
                      setShowInput(true);
                    }}
                  >
                    Editar comentário
                  </ButtonCustom>
                </div>
              </div>

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
                      change(event);
                    }}
                    onBlur={bio.validation.onBlur}
                    value={bio.validation.value}
                    style={{ height: '170px' }}
                    ref={ref}
                  />
                </FloatingLabel>
                <div className="text-center text-lg-end">
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
    </div>
  );
};

export default ModalityUser;

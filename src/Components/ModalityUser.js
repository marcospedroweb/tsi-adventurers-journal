import React from 'react';
import styles from './ModalityUser.module.css';
import ModalTrip from './ModalTrip';

const ModalityUser = ({ data, change }) => {
  return (
    <div className={styles.divMain} key={`${data.modality}`}>
      <div className="row flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center align-items-lg-start w-100 mt-4">
        <div className="col-12 col-lg-3">
          <div
            className={styles.divImg}
            style={{ backgroundImage: `url(/imgs/${data.image})` }}
          ></div>
        </div>
        <div className="col-12 col-lg-9 mt-4 mt-lg-0 text-center text-lg-start">
          <div className={styles.divText}>
            <div>
              <h2>{data.modality}</h2>
              <p>{data.location}</p>
            </div>
            <div>
              <h3 className="mt-4 mt-lg-0">Comentário</h3>
              <p className={`position-relative px-4`}>
                <img
                  src="/imgs/Mark_Left_White.svg"
                  className="position-absolute top-0 start-0"
                  alt="aspas"
                />
                {data.feedback}
                <img
                  src="/imgs/Mark_Right_White.svg"
                  className="position-absolute bottom-0 end-0"
                  alt="aspas"
                />
              </p>
              <div className="mt-4 text-center text-lg-end">
                <ModalTrip data={data} />
              </div>

              {/* <div className={`${showInput ? '' : 'd-none'}`}>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalityUser;

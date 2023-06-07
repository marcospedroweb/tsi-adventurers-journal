import React from 'react';
import styles from './ModalityUser.module.css';
import ModalTrip from './ModalTrip';
import { apiRoute } from '../DB/data';

const ModalityUser = ({ data, change, getTripList }) => {
  return (
    <div className={styles.divMain}>
      <div className="row flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center align-items-lg-start w-100 mt-4 mx-auto mx-lg-0">
        <div className="col-12 col-lg-3">
          <div
            className={styles.divImg}
            style={{
              backgroundImage: `url(${
                data.idAtividade[0].foto_url
                  ? data.idAtividade[0].foto_url
                  : `${apiRoute}/storage/${data.idAtividade[0].modalidade[0].foto}`
              })`,
            }}
          ></div>
        </div>
        <div className="col-12 col-lg-9 mt-4 mt-lg-0 text-center text-lg-start">
          <div className={styles.divText}>
            <div>
              <h2>{data.idAtividade[0].Titulo}</h2>
              <p>
                {data.idAtividade[0].cidade.nome},{' '}
                {data.idAtividade[0].cidade.uf} -{' '}
                {data.idAtividade[0].cidade.pais}
              </p>
            </div>
            <div>
              <h3 className="mt-4 mt-lg-0">Nota</h3>
              <p style={{ fontStyle: 'normal' }}>
                {data.nota ? data.nota : 'Nenhuma nota atribuida'}
              </p>
            </div>
            <div>
              <h3 className="mt-4 mt-lg-0">Comentário</h3>
              <p className={`position-relative px-4`}>
                <img
                  src="/imgs/Mark_Left_White.svg"
                  className="position-absolute top-0 start-0"
                  alt="aspas"
                />
                {data.comentario ? data.comentario : 'Nenhum comentário feito'}
                <img
                  src="/imgs/Mark_Right_White.svg"
                  className="position-absolute bottom-0 end-0"
                  alt="aspas"
                />
              </p>
              <div className="mt-4 text-center text-lg-end">
                <ModalTrip data={data} getTripList={getTripList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalityUser;

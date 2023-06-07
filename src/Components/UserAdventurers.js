import React from 'react';
import styles from './UserAdventurers.module.css';
import ModalityCard from './ModalityCard';
import { apiRoute } from '../DB/data';

const UserAdventurers = ({ user, modalitys }) => {
  React.useEffect(() => {
    console.log(modalitys);
  }, []);
  return (
    <div className="">
      <h3 className={styles.divTitle}>Algumas das minhas aventuras</h3>
      <div className="row justify-content-center align-items-center">
        {modalitys.length > 0 && !user.Guia ? (
          modalitys.map((modality) => {
            const date = new Date(modality.idAtividade[0].Data_e_Hora);
            return (
              <ModalityCard
                key={modality.id}
                modalityName={`${modality.idAtividade[0].modalidade[0].nome}, ${
                  modality.idAtividade[0].modalidade.length > 1
                    ? `+${modality.idAtividade[0].modalidade.length - 1}`
                    : ''
                }`}
                img={
                  modality.idAtividade[0].foto_url
                    ? modality.idAtividade[0].foto_url
                    : `${apiRoute}/storage/${modality.idAtividade[0].modalidade[0].foto}`
                }
                desc={modality.comentario}
                location={`${modality.idAtividade[0].cidade.nome}, ${modality.idAtividade[0].cidade.uf} - ${modality.idAtividade[0].cidade.pais}`}
                date={`${date.toLocaleDateString('pt-BR', {
                  day: '2-digit',
                })}/${date.toLocaleDateString('pt-BR', {
                  month: '2-digit',
                })}/${date.getFullYear()}`}
                col="4"
                showIn="Profile"
              />
            );
          })
        ) : modalitys.length > 0 && user.Guia ? (
          modalitys.map((modality) => {
            const date = new Date(modality.Data_e_Hora);
            return (
              <ModalityCard
                key={modality.id}
                modalityName={`${modality.modalidade[0].nome}, ${
                  modality.modalidade.length > 1
                    ? `+${modality.modalidade.length - 1}`
                    : ''
                }`}
                img={
                  modality.foto_url
                    ? modality.foto_url
                    : `${apiRoute}/storage/${modality.modalidade[0].foto}`
                }
                desc={modality.comentario}
                location={`${modality.cidade.nome}, ${modality.cidade.uf} - ${modality.cidade.pais}`}
                date={`${date.toLocaleDateString('pt-BR', {
                  day: '2-digit',
                })}/${date.toLocaleDateString('pt-BR', {
                  month: '2-digit',
                })}/${date.getFullYear()}`}
                col="4"
                showIn="Profile"
              />
            );
          })
        ) : (
          <div className="col-12">
            <div>
              <h4>Ainda não tive nenhuma aventura</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAdventurers;

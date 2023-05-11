import React from 'react';
import styles from './ConfigUser.module.css';
import ConfigProfile from './ConfigProfile';
import { GlobalContext } from '../Context/GlobalStorage';
import Loading from './Loading';

const ConfigUser = ({ user }) => {
  const { session, setSession } = React.useContext(GlobalContext);
  const [component, setComponent] = React.useState('perfil');
  const [nexComponent, setNextComponent] = React.useState('');
  const [editing, setEditing] = React.useState(false);
  const [alertEditing, setAlertEditing] = React.useState(false);

  function handleAbort() {
    setEditing(false);
    setAlertEditing(false);
    setComponent(nexComponent);
  }

  if (!user) return <Loading />;
  else
    return (
      <div className={styles.divMain}>
        <div className="container-xl">
          <h2>Configurações</h2>
          <div className={styles.divBtns}>
            <ul>
              <li
                className={`${component === 'perfil' ? styles.active : ''}`}
                onClick={() => {
                  if (editing) {
                    setNextComponent('perfil');
                    setAlertEditing(true);
                  } else setComponent('perfil');
                }}
              >
                Perfil
              </li>
              <li
                className={`${component === 'segurança' ? styles.active : ''}`}
                onClick={() => {
                  if (editing) {
                    setNextComponent('segurança');
                    setAlertEditing(true);
                  } else setComponent('segurança');
                }}
              >
                Segurança
              </li>
              <li
                className={`${component === 'planos' ? styles.active : ''}`}
                onClick={() => {
                  if (editing) {
                    setNextComponent('planos');
                    setAlertEditing(true);
                  } else setComponent('planos');
                }}
              >
                Plano
              </li>
            </ul>
          </div>
          {alertEditing && (
            <div className="d-flex justify-content-start align-items-center my-4">
              <p className={styles.pDelete}>
                Há alterações não salvas! <span>Desfazer alterações?</span>
              </p>
              <button
                className={`${styles.btnDelete} btn ms-2`}
                onClick={handleAbort}
              >
                Desfazer
              </button>
            </div>
          )}
          {component === 'perfil' && (
            <ConfigProfile
              user={user}
              edit={{ editing, setEditing, alertEditing }}
            />
          )}
          {component === 'segurança' && ''}
          {component === 'planos' && ''}
        </div>
      </div>
    );
};

export default ConfigUser;

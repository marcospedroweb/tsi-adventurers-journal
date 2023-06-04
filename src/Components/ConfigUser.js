import React from 'react';
import styles from './ConfigUser.module.css';
import ConfigProfile from './ConfigProfile';
import { GlobalContext } from '../Context/GlobalStorage';
import Loading from './Loading';
import UndoChangeMsg from './UndoChangeMsg';
import ConfigPreferences from './ConfigPreferences';
import ConfigSecurity from './ConfigSecurity';
import ConfigPlan from './ConfigPlan';

const ConfigUser = ({ user }) => {
  const { setAlertEditing, editing } = React.useContext(GlobalContext);
  const [component, setComponent] = React.useState('perfil');
  const [nextComponent, setNextComponent] = React.useState('');

  if (!user.user) return <Loading />;
  else
    return (
      <div className={styles.divMain}>
        <div className="container-xl">
          <h2>Configurações</h2>
          <div className={styles.divBtns}>
            <ul className="d-flex flex-column flex-sm-row mb-4 mb-sm-">
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
                className={`${
                  component === 'preferencias' ? styles.active : ''
                }`}
                onClick={() => {
                  if (editing) {
                    setNextComponent('preferencias');
                    setAlertEditing(true);
                  } else setComponent('preferencias');
                }}
              >
                Preferências
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
          <UndoChangeMsg component={{ nextComponent, setComponent }} />
          {component === 'perfil' && <ConfigProfile user={user} />}
          {component === 'preferencias' && <ConfigPreferences user={user} />}
          {component === 'segurança' && <ConfigSecurity user={user} />}
          {component === 'planos' && <ConfigPlan user={user} />}
        </div>
      </div>
    );
};

export default ConfigUser;

import React from 'react';
import styles from './UndoChangeMsg.module.css';
import { GlobalContext } from '../Context/GlobalStorage';

const UndoChangeMsg = ({ component }) => {
  const { alertEditing, setAlertEditing, setEditing } =
    React.useContext(GlobalContext);

  function handleAbort() {
    setEditing(false);
    setAlertEditing(false);
    component.setComponent(component.nextComponent);
  }

  return (
    <div
      className={`${
        alertEditing ? '' : 'd-none'
      } d-flex justify-content-start align-items-center my-4`}
    >
      <p className={styles.pDelete}>
        Há alterações não salvas!
        <span className="d-block mt-3">
          Desfazer alterações?
          <button
            className={`${styles.btnDelete} btn ms-2`}
            onClick={handleAbort}
          >
            Desfazer
          </button>
        </span>
      </p>
    </div>
  );
};

export default UndoChangeMsg;

import React from 'react';
import styles from './DivCheckboxsCustom.module.css';
import ModalityCardPreferences from './ModalityCardPreferences';
import { GlobalContext } from '../Context/GlobalStorage';
import { Form } from 'react-bootstrap';
import UnsavedChanges from './UnsavedChanges';
import ButtonCustom from './ButtonCustom';

const DivCheckboxsCustom = ({ data, set, ids, setIds }) => {
  const { editing, setEditing, alertEditing } = React.useContext(GlobalContext);
  const [show, setShow] = React.useState(false);

  return (
    <div className={styles.insideDiv}>
      <h4 className="m-0 text-center">Modalidades preferidos</h4>
      <p className={`${styles.hiddenText} text-center mt-2 mb-0`}>
        O limite de preferências é 5.
      </p>
      <ModalityCardPreferences labels={data} ids={ids} setIds={setIds} />
      <div
        className={`${styles.divCheckboxs} ${
          show ? '' : 'd-none'
        } d-flex flex-column justify-content-start align-items-start  mt-3`}
      >
        {data.map((element, index) => {
          return (
            <div
              key={`${element.identify ? element.identify : element.id}${
                element.nome
              }`}
            >
              <Form.Check
                type={'checkbox'}
                id={`default-${
                  element.identify ? element.identify : element.id
                }${element.nome}`}
                label={element.nome}
                checked={
                  ids.includes(element.identify ? element.identify : element.id)
                    ? true
                    : false
                }
                onChange={({ target }) => {
                  if (target.checked && ids.length < 5) {
                    setIds([
                      ...ids,
                      element.identify ? element.identify : element.id,
                    ]);
                  } else {
                    setIds(
                      ids.filter((id) =>
                        id !== element.identify ? element.identify : element.id,
                      ),
                    );
                  }
                  setEditing(true);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="my-3 text-center">
        {editing && alertEditing && <UnsavedChanges />}
      </div>
      <div className="text-center mt-3">
        <ButtonCustom
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? 'Atualizar dados' : 'Editar'}
        </ButtonCustom>
      </div>
    </div>
  );
};

export default DivCheckboxsCustom;

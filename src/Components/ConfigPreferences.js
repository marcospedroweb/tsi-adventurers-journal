import React from 'react';
import styles from './ConfigPreferences.module.css';
import ModalityUser from './ModalityUser';
import ButtonCustom from './ButtonCustom';
import CardLabels from './CardLabels';
import ModalityCardPreferences from './ModalityCardPreferences';
import { Form } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalStorage';
import UnsavedChanges from './UnsavedChanges';

const ConfigPreferences = () => {
  const { session, setSession, alertEditing, editing, setEditing } =
    React.useContext(GlobalContext);

  async function handleSubmit(event) {
    event.preventDefault();
    alert('form enviado');
  }

  const modalidades = [
    {
      active: React.useState(true),
      link: '',
      icon: '',
      text: 'Paraquedismo',
    },
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Escalada',
    },
    {
      active: React.useState(true),
      link: '',
      icon: '',
      text: 'Trekking',
    },
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Base jump',
    },
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Surf',
    },
  ];
  const locations = [
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Paraquedismo',
    },
    {
      active: React.useState(true),
      link: '',
      icon: '',
      text: 'Escalada',
    },
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Trekking',
    },
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Base jump',
    },
    {
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Surf',
    },
  ];

  //Alert
  const [editedComments, setEditedComments] = React.useState(false);
  const [editedModalitys, setEditedModalitys] = React.useState(false);
  const [editedLocations, setEditedLocations] = React.useState(false);

  //Checkboxs function
  const [editModalitys, setEditModalitys] = React.useState(false);
  const [editLocations, setEditLocations] = React.useState(false);

  return (
    <form
      className={`${styles.divMain} row justify-content-between align-items-center`}
    >
      <div className="col-12 col-md-12 align-self-stretch">
        <div className={styles.divSection}>
          <h3>Minhas aventuras</h3>
          <p className={styles.hiddenText}>
            Altera o seu comentario em suas aventuras
          </p>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <ModalityUser
              change={() => {
                setEditing(true);
                setEditedComments(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 align-self-stretch mt-5">
        <div className={styles.divSection}>
          <h3>Minhas preferências</h3>
          <p className={styles.hiddenText}>
            Altera suas modalidades e locais preferidos
          </p>
          <div className="row justify-content-center align-items-start">
            <div className="col-12 col-lg-6">
              <div className={styles.insideDiv}>
                <h4 className="m-0 text-center">Modalidades preferidos</h4>
                <ModalityCardPreferences labels={modalidades} />
                <div
                  className={`${styles.divCheckboxs} ${
                    editModalitys ? '' : 'd-none'
                  } d-flex flex-column justify-content-start align-items-start  mt-3`}
                >
                  {modalidades.map(({ text, active }) => {
                    return (
                      <div>
                        <Form.Check
                          type={'checkbox'}
                          id={`default-${text}`}
                          label={`${text}`}
                          checked={active[0]}
                          onChange={() => {
                            active[1](!active[0]);
                            setEditing(true);
                            setEditedModalitys(true);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="my-3 text-center">
                  {editedModalitys && alertEditing && <UnsavedChanges />}
                </div>
                <div className="text-center mt-3">
                  <ButtonCustom
                    onClick={() => {
                      setEditModalitys(!editModalitys);
                    }}
                  >
                    {editModalitys ? 'Atualizar dados' : 'Editar'}
                  </ButtonCustom>
                </div>
              </div>
            </div>{' '}
            <div className="col-12 col-lg-6">
              <div className={styles.insideDiv}>
                <h4 className="m-0 text-center">Locais preferidos</h4>
                <ModalityCardPreferences labels={locations} />
                <div
                  className={`${styles.divCheckboxs} ${
                    editLocations ? '' : 'd-none'
                  } mt-3`}
                >
                  {locations.map(({ text, active }) => {
                    return (
                      <Form.Check
                        type={'checkbox'}
                        id={`default-${text}-locations`}
                        label={`${text}`}
                        checked={active[0]}
                        onChange={() => {
                          active[1](!active[0]);
                          setEditing(true);
                          setEditedLocations(true);
                        }}
                        key={text}
                      />
                    );
                  })}
                </div>
                <div className="my-3 text-center">
                  {editedLocations && alertEditing && <UnsavedChanges />}
                </div>
                <div className="text-center mt-3">
                  <ButtonCustom
                    onClick={() => {
                      setEditLocations(!editLocations);
                    }}
                  >
                    {editLocations ? 'Atualizar dados' : 'Editar'}
                  </ButtonCustom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 align-self-stretch mt-5">
        <div className="text-center">
          <ButtonCustom>Salvar alterações</ButtonCustom>
        </div>
      </div>
    </form>
  );
};

export default ConfigPreferences;

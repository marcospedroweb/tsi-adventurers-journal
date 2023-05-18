import React from 'react';
import styles from './ConfigPreferences.module.css';
import ModalityUser from './ModalityUser';
import ButtonCustom from './ButtonCustom';
import CardLabels from './CardLabels';
import ModalityCardPreferences from './ModalityCardPreferences';
import { FloatingLabel, Form } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalStorage';
import UnsavedChanges from './UnsavedChanges';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import useFetch from '../Hooks/useFetch';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';

const ConfigPreferences = ({ user }) => {
  const { alertEditing, editing, setEditing } = React.useContext(GlobalContext);
  const { loading, request } = useFetch();
  const [alertLimit, setAlertLimit] = React.useState('');
  const tripList = [
    {
      id: 1,
      image: 'paraquedas.jpeg',
      modality: 'Surf',
      location: 'Itacoatiara - Rio de Janeiro, Brasil',
      nota: 9.6,
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum amet illum voluptas deserunt sed voluptates consectetur maxime quam, provident suscipit facilis commodi labore necessitatibus? Quisquam, vel recusandae! Iusto neque usto nequeaa',
      data_chegada: '20/20/2020',
      data_partida: '20/20/2020',
    },
    {
      id: 2,
      image: 'paraquedas.jpeg',
      modality: 'Paraquedismo',
      location: 'Itacoatiara - Rio de Janeiro, Brasil',
      nota: 8.5,
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum amet illum voluptas deserunt sed voluptates consectetur maxime quam, provident suscipit facilis commodi labore necessitatibus? Quisquam, vel recusandae! Iusto neque usto nequeaa',
      data_chegada: '20/20/2020',
      data_partida: '20/20/2020',
    },
  ];
  const modalitys = [
    {
      id: 1,
      active: React.useState(true),
      link: '',
      icon: '',
      text: 'Paraquedismo',
    },
    {
      id: 2,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Escalada',
    },
    {
      id: 3,
      active: React.useState(true),
      link: '',
      icon: '',
      text: 'Trekking',
    },
    {
      id: 4,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Base jump',
    },
    { id: 5, active: React.useState(false), link: '', icon: '', text: 'Surf' },
    {
      id: 11,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Asa-delta',
    },
    {
      id: 12,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Kitesurf',
    },
    {
      id: 13,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Snowboarding',
    },
    {
      id: 14,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Escalada em gelo',
    },
    {
      id: 15,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Esqui freestyle',
    },
    {
      id: 16,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Parapente',
    },
    {
      id: 17,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Skateboarding',
    },
    {
      id: 18,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Mergulho livre',
    },
  ];
  const locations = [
    {
      id: 6,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Paraquedismo',
    },
    {
      id: 7,
      active: React.useState(true),
      link: '',
      icon: '',
      text: 'Escalada',
    },
    {
      id: 8,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Trekking',
    },
    {
      id: 9,
      active: React.useState(false),
      link: '',
      icon: '',
      text: 'Base jump',
    },
    { id: 10, active: React.useState(false), link: '', icon: '', text: 'Surf' },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    alert('form enviado');
  }

  //Alert
  const [editedComments, setEditedComments] = React.useState(false);
  const [editedModalitys, setEditedModalitys] = React.useState(false);
  const [editedLocations, setEditedLocations] = React.useState(false);

  //Checkboxs function
  const [editModalitys, setEditModalitys] = React.useState(false);
  const [editLocations, setEditLocations] = React.useState(false);

  function limitPreferences(type) {
    let i = 0;
    if (type === 'modality')
      modalitys.forEach((modality) => {
        if (modality.active[0] && i < 5) i = i + 1;
      });
    else
      locations.forEach((location) => {
        if (location.active[0] && i < 5) i = i + 1;
      });

    if (i < 5) return true;
    else {
      setAlertLimit('O limite de preferências é 5.');
      return false;
    }
  }

  async function handleSubmitCheckBoxs(event) {
    event.preventDefault();
    let modalitys_id = [];
    let locations_id = [];
    modalitys.forEach((modality) => {
      if (modality.active[0]) modalitys_id.push(modality.id);
    });
    locations.forEach((location) => {
      if (location.active[0]) locations_id.push(location.id);
    });
    console.log(modalitys_id);
    console.log(locations_id);
    alert('Form enviado');
  }

  return (
    <form
      action="#"
      method="POST"
      className={`${styles.divMain} row justify-content-between align-items-center`}
      onSubmit={handleSubmit}
    >
      <form
        method="POST"
        action="#"
        className="col-12 col-md-12 align-self-stretch"
      >
        <div className={styles.divSection}>
          <h3>Minhas aventuras</h3>
          <p className={styles.hiddenText}>
            Altera o seu comentario em suas aventuras
          </p>
          {editedComments && alertEditing && <UnsavedChanges />}
          <div className="d-flex flex-column justify-content-center align-items-center">
            {tripList.map((trip, index) => {
              return (
                <div key={trip.id}>
                  <ModalityUser
                    data={trip}
                    change={(event) => {
                      setEditing(true);
                      setEditedComments(true);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
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
            <div className="col-12 col-lg-6 align-self-stretch">
              <div className={styles.insideDiv}>
                <h4 className="m-0 text-center">Modalidades preferidos</h4>
                <p className={`${styles.hiddenText} text-center mt-2 mb-0`}>
                  {alertLimit}
                </p>
                <ModalityCardPreferences labels={modalitys} />
                <div
                  className={`${styles.divCheckboxs} ${
                    editModalitys ? '' : 'd-none'
                  } d-flex flex-column justify-content-start align-items-start  mt-3`}
                >
                  {modalitys.map(({ id, text, active }) => {
                    return (
                      <div key={id}>
                        <Form.Check
                          type={'checkbox'}
                          id={`default-${text}`}
                          label={`${text}`}
                          checked={active[0]}
                          onChange={() => {
                            if (limitPreferences('modality')) {
                              active[1](!active[0]);
                              setEditing(true);
                              setEditedModalitys(true);
                            } else active[1](false);
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
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0 align-self-stretch">
              <div className={`${styles.insideDiv}`}>
                <h4 className="m-0 text-center">Locais preferidos</h4>
                <p className={`${styles.hiddenText} text-center mt-2 mb-0`}>
                  {alertLimit}
                </p>
                <ModalityCardPreferences labels={locations} />
                <div
                  className={`${styles.divCheckboxs} ${
                    editLocations ? '' : 'd-none'
                  } mt-3`}
                >
                  {locations.map(({ id, text, active }) => {
                    return (
                      <div key={id}>
                        <Form.Check
                          type={'checkbox'}
                          id={`default-${text}-locations`}
                          label={`${text}`}
                          checked={active[0]}
                          onChange={() => {
                            if (limitPreferences('location')) {
                              active[1](!active[0]);
                              setEditing(true);
                              setEditedLocations(true);
                            } else active[1](false);
                          }}
                        />
                      </div>
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
      <div className="col-12 mt-5">
        <div className={styles.divSection}>
          <h3>Contato</h3>
          <p className={styles.hiddenText}>Altere seu meios de contato</p>
          <div className={`${styles.divInputs} mt-4`}>
            <div className="row justify-content-between align-items-start">
              <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                <div>
                  <h4>Número de telefone (Ex: (11) 91111-1111)</h4>
                  <FloatingLabel
                    controlId={'tel'}
                    label={'Número de telefone'}
                    className="mt-3"
                  >
                    <Form.Control
                      type="tel"
                      label="Número de telefone"
                      ref={tel.ref}
                      value={tel.validation.value}
                      onChange={(event) => {
                        tel.validation.onChange(event);
                        if (editing === false) setEditing(true);
                      }}
                      onBlur={tel.validation.onBlur}
                      minLength={11}
                    />
                  </FloatingLabel>
                  {tel.validation.error &&
                  tel.validation.error !== 'Preencha um valor' ? (
                    <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                      {tel.validation.error}
                    </p>
                  ) : (
                    ''
                  )}
                  {tel.validation.value !== user.user.telefone &&
                    user.user.telefone !== null &&
                    !tel.validation.value && <UnsavedChanges />}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div>
                  <h4>Email (Ex: email@exemplo.com)</h4>
                  <FloatingLabel
                    controlId={'email'}
                    label={'Email de contato'}
                    className="mt-3"
                  >
                    <Form.Control
                      type="tel"
                      label="Email de contato"
                      ref={email.ref}
                      value={email.validation.value}
                      onChange={(event) => {
                        email.validation.onChange(event);
                        if (editing === false) setEditing(true);
                      }}
                      onBlur={email.validation.onBlur}
                      minLength={11}
                    />
                  </FloatingLabel>
                  {email.validation.error &&
                  email.validation.error !== 'Preencha um valor' ? (
                    <p style={{ color: '#FF7979', fontSize: '.9rem' }}>
                      {email.validation.error}
                    </p>
                  ) : (
                    ''
                  )}
                  {email.validation.value !== user.user.email && (
                    <UnsavedChanges />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        <div className={styles.divSection}>
          <h3>Redes sociais</h3>
          <p className={styles.hiddenText}>Altere seu nome das redes sociais</p>
          <div className={`${styles.divInputs} mt-4`}>
            <div className="row justify-content-between align-items-start">
              <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                <div>
                  <h4>Instagram</h4>
                  <FloatingLabel
                    controlId={'insta'}
                    label={'Instagram'}
                    className="mt-3"
                  >
                    <Form.Control
                      type="text"
                      label="Instagram"
                      ref={insta}
                      onChange={(event) => {
                        if (editing === false) setEditing(true);
                      }}
                      maxLength={50}
                    />
                  </FloatingLabel>
                  {insta.current.value !== user.user.insta &&
                    user.user.insta !== null && <UnsavedChanges />}
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                <div>
                  <h4>Facebook</h4>
                  <FloatingLabel
                    controlId={'face'}
                    label={'Facebook'}
                    className="mt-3"
                  >
                    <Form.Control
                      type="text"
                      label="Facebook"
                      ref={face}
                      onChange={(event) => {
                        if (editing === false) setEditing(true);
                      }}
                      maxLength={50}
                    />
                  </FloatingLabel>
                  {face.current.value !== user.user.face &&
                    user.user.facebook !== null && <UnsavedChanges />}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div>
                  <h4>Twitter</h4>
                  <FloatingLabel
                    controlId={'twitter'}
                    label={'Twitter'}
                    className="mt-3"
                  >
                    <Form.Control
                      type="text"
                      label="Twitter"
                      ref={face}
                      onChange={(event) => {
                        if (editing === false) setEditing(true);
                      }}
                      maxLength={50}
                    />
                  </FloatingLabel>
                  {twitter.current.value !== user.user.twitter &&
                    user.user.twitter !== null && <UnsavedChanges />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 align-self-stretch mt-5">
        <div className="text-center">
          <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
        </div>
      </div>
    </form>
  );
};

export default ConfigPreferences;

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
  const { session, setSession, alertEditing, editing, setEditing } =
    React.useContext(GlobalContext);
  const { loading, request } = useFetch();
  // const refsTrips = React.useRef([]);
  // const refsModalitys = React.useRef([]);
  // const refsLocations = React.useRef([]);
  const [trips, setTrips] = React.useState([]);
  const [modalitys, setModalitys] = React.useState([]);
  const [location, setLocations] = React.useState([]);
  const tripList = [
    {
      image: 'paraquedas.jpeg',
      modality: 'Surf',
      location: 'Itacoatiara - Rio de Janeiro, Brasil',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum amet illum voluptas deserunt sed voluptates consectetur maxime quam, provident suscipit facilis commodi labore necessitatibus? Quisquam, vel recusandae! Iusto neque usto nequeaa',
    },
    {
      image: 'paraquedas.jpeg',
      modality: 'Paraquedismo',
      location: 'Itacoatiara - Rio de Janeiro, Brasil',
      feedback:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum amet illum voluptas deserunt sed voluptates consectetur maxime quam, provident suscipit facilis commodi labore necessitatibus? Quisquam, vel recusandae! Iusto neque usto nequeaa',
    },
  ];
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
  const tel = GetSimpleInputObj('tel');
  const email = GetSimpleInputObj('email');
  const insta = React.useRef('');
  const face = React.useRef('');
  const twitter = React.useRef('');

  // function handleChangeTrips(event, index) {
  //   const { name, value } = event.target;
  //   refsTrips.current[index] = { ...refsTrips.current[index], value };
  // }

  React.useEffect(() => {
    setTrips(tripList);
    setModalitys(modalidades);
    setLocations(locations);
  }, []);

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

  return (
    <div
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
            {trips &&
              trips.map((trip, index) => {
                return (
                  <ModalityUser
                    data={trip}
                    change={(event) => {
                      // handleChangeTrips(event, index);
                      setEditing(true);
                      setEditedComments(true);
                    }}
                    // ref={(element) => (refsTrips.current[index] = element)}
                  />
                );
              })}
          </div>
          <div className="text-center">
            <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
          </div>
        </div>
      </form>
      <form
        action="#"
        method="POST"
        className="col-12 col-md-12 align-self-stretch mt-5"
      >
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
                      <div key={text}>
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
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
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
                      <div key={text + 1}>
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
          <div className="text-center mt-4">
            <ButtonCustom type="submit">Salvar preferências</ButtonCustom>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConfigPreferences;

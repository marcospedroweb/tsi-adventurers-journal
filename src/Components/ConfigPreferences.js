import React from 'react';
import styles from './ConfigPreferences.module.css';
import ModalityUser from './ModalityUser';
import ButtonCustom from './ButtonCustom';
import { GlobalContext } from '../Context/GlobalStorage';
import UnsavedChanges from './UnsavedChanges';
import useFetch from '../Hooks/useFetch';
import {
  apiRoute,
  getCitiesRoute,
  getModalitysRoute,
  optionsFetch,
} from '../DB/data';
import Loading from './Loading';
import DivCheckboxsCustom from './DivCheckboxsCustom';

const ConfigPreferences = ({ user }) => {
  const { alertEditing, setEditing } = React.useContext(GlobalContext);
  const [modalitys, setModalitys] = React.useState('');
  const [modalitysIds, setModalitysIds] = React.useState([]);
  const [locations, setLocations] = React.useState('');
  const [locationsIds, setLocationsIds] = React.useState([]);
  const { loading, request } = useFetch();
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
    {
      id: 3,
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

  React.useEffect(() => {
    async function getModalitys() {
      const { json } = await request(
        `${apiRoute}${getModalitysRoute}`,
        optionsFetch({ method: 'GET' }),
      );

      setModalitys(json.data);
    }
    async function getLocations() {
      const { json } = await request(
        `${apiRoute}${getCitiesRoute}`,
        optionsFetch({ method: 'GET' }),
      );

      setLocations(json.cidades);
    }

    getLocations();
    getModalitys();
  }, []);

  //   {
  // id: 1,
  // active: React.useState(true),
  // link: '',
  // icon: '',
  // text: 'Paraquedismo',
  //   },
  //   {
  //     id: 2,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Escalada',
  //   },
  //   {
  //     id: 3,
  //     active: React.useState(true),
  //     link: '',
  //     icon: '',
  //     text: 'Trekking',
  //   },
  //   {
  //     id: 4,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Base jump',
  //   },
  //   { id: 5, active: React.useState(false), link: '', icon: '', text: 'Surf' },
  //   {
  //     id: 11,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Asa-delta',
  //   },
  //   {
  //     id: 12,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Kitesurf',
  //   },
  //   {
  //     id: 13,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Snowboarding',
  //   },
  //   {
  //     id: 14,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Escalada em gelo',
  //   },
  //   {
  //     id: 15,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Esqui freestyle',
  //   },
  //   {
  //     id: 16,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Parapente',
  //   },
  //   {
  //     id: 17,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Skateboarding',
  //   },
  //   {
  //     id: 18,
  //     active: React.useState(false),
  //     link: '',
  //     icon: '',
  //     text: 'Mergulho livre',
  //   },
  // ];

  //Alert
  const [editedComments, setEditedComments] = React.useState(false);

  if (!modalitys || !locations) return <Loading />;
  else
    return (
      <div
        className={`${styles.divMain} row justify-content-between align-items-center text-center text-lg-start`}
      >
        <div
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
            <div
              className={`${styles.divTrip} d-flex flex-column justify-content-start align-items-center px-2`}
            >
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
          <form
            method="POST"
            action="#"
            // onSubmit={handleSubmitCheckBoxs}
            className={styles.divSection}
          >
            <h3>Minhas preferências</h3>
            <p className={styles.hiddenText}>
              Altera suas modalidades e locais preferidos
            </p>
            <div className="row justify-content-center align-items-start">
              <div className="col-12 col-lg-6 align-self-stretch">
                <DivCheckboxsCustom
                  data={modalitys}
                  set={setModalitys}
                  ids={modalitysIds}
                  setIds={setModalitysIds}
                />
              </div>
              <div className="col-12 col-lg-6 mt-4 mt-lg-0 align-self-stretch">
                <DivCheckboxsCustom
                  data={locations}
                  set={setLocations}
                  ids={locationsIds}
                  setIds={setLocationsIds}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <ButtonCustom type="submit">Salvar alterações</ButtonCustom>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ConfigPreferences;

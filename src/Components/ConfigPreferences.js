import React from 'react';
import styles from './ConfigPreferences.module.css';
import ModalityUser from './ModalityUser';

import { GlobalContext } from '../Context/GlobalStorage';
import UnsavedChanges from './UnsavedChanges';
import useFetch from '../Hooks/useFetch';
import { apiRoute, getOrdersRoute, optionsFetch } from '../DB/data';
import Loading from './Loading';

const ConfigPreferences = ({ user }) => {
  const { session, alertEditing, setEditing } = React.useContext(GlobalContext);
  const { loading, request } = useFetch();
  const [tripList, setTripList] = React.useState([]);

  async function getTripList() {
    const { json } = await request(
      `${apiRoute}${getOrdersRoute}`,
      optionsFetch({ method: 'GET', token: session.user.token }),
    );

    if (json && json.status) {
      setTripList(json.itens_do_pedido);
    } else {
      setTripList([]);
    }
  }

  React.useEffect(() => {
    getTripList();
  }, []);

  //Alert
  const [editedComments, setEditedComments] = React.useState(false);

  if (loading && !tripList.length) return <Loading />;
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
              {tripList.length > 0 ? (
                tripList.map((trip, index) => {
                  return (
                    <div className="w-100" key={trip.id}>
                      <ModalityUser
                        data={trip}
                        change={(event) => {
                          setEditing(true);
                          setEditedComments(true);
                        }}
                        getTripList={getTripList}
                      />
                    </div>
                  );
                })
              ) : (
                <div>
                  <h4 className="fs-6 fw-bold mt-4">
                    Você ainda não teve aventuras.
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-md-12 align-self-stretch mt-5">
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
        </div> */}
      </div>
    );
};

export default ConfigPreferences;

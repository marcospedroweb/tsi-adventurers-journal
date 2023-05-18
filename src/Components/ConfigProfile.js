import React from 'react';
import styles from './ConfigProfile.module.css';
import { convertImageToBase64Promise } from '../Helpers/convertImageToBase64';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { GlobalContext } from '../Context/GlobalStorage';
import { FloatingLabel, Form } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import useFetch from '../Hooks/useFetch';
import UnsavedChanges from './UnsavedChanges';
import { apiRoute, optionsFetch, updateUserRoute } from '../DB/data';

const ConfigProfile = ({ user }) => {
  const { alertEditing, setAlertEditing, editing, setEditing } =
    React.useContext(GlobalContext);
  const [photo, setPhoto] = React.useState('');
  const [photoMsg, setPhotoMsg] = React.useState('');
  const [banner, setBanner] = React.useState('');
  const [bannerMsg, setBannerMsg] = React.useState('');
  const refPhoto = React.useRef();
  const refBanner = React.useRef();
  const name = GetSimpleInputObj('name');
  const bio = GetSimpleInputObj('bio');
  const { loading, request } = useFetch();

  React.useEffect(() => {
    name.validation.setValue(name.validation.value || user.user.name);
    bio.validation.setValue(bio.validation.value || user.user.bio || '');
  }, []);

  async function handleChangeImage() {
    if (refPhoto.current.value) {
      setPhoto(await convertImageToBase64Promise(refPhoto.current.files[0]));
      setPhotoMsg(true);
      setTimeout(() => {
        setPhotoMsg(false);
      }, 3000);
      // const { json } = await request(
      //   `${apiRoute}${updateUserRoute}`,
      //   optionsFetch({
      //     method: 'PACTH',
      //     headers: { 'Content-Type': 'multipart/form-data' },
      //     body: refPhoto.current.files[0],
      //     token: session.user.token,
      //   }),
      // );
    }
    if (refBanner.current.value) {
      setBanner(await convertImageToBase64Promise(refBanner.current.files[0]));
      setBannerMsg(true);
      setTimeout(() => {
        setBannerMsg(false);
      }, 3000);
    }
  }

  async function handleSubmitProfile(event) {
    event.preventDefault();
    const newName = name.validation.value;
    const newBio = bio.validation.value;

    if (newName === user.user.name) return;
    if (newBio === user.user.bio && user.user.bio !== null) return;
    console.log(newName);
    console.log(newBio);

    /*
    UPDATE USUARIO
    */

    setEditing(false);
    setAlertEditing(false);
    alert('form enviado');
  }

  return (
    <div
      className={`${styles.divMain} row justify-content-between align-items-center`}
    >
      <div className="col-12 col-md-6 align-self-stretch mb-5 mb-md-0">
        <div className={styles.divSection}>
          <h3>Imagem de perfil</h3>
          <p className={styles.hiddenText}>Altera a sua imagem de perfil</p>
          <div
            className={`${styles.divEdit} row justify-content-start align-items-center`}
          >
            <div className="col-12 col-md-3">
              <div className="text-center">
                {!photo && (
                  <img
                    src={`data:image/png;base64, ${user.user.foto_URL}`}
                    className="rounded-circle"
                    style={{ maxHeight: '90px', maxWidth: '90px' }}
                    alt=""
                  />
                )}
                {photo && (
                  <img
                    src={photo}
                    className="rounded-circle"
                    style={{ maxHeight: '90px', maxWidth: '90px' }}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className={`${styles.divInputFile} mx-auto mx-md-0 mt-3 mt-md-0`}
              >
                <div>
                  <input
                    type="file"
                    id="inputPhoto"
                    accept="image/png, image/jpeg"
                    onChange={handleChangeImage}
                    ref={refPhoto}
                  />
                  <label htmlFor="inputPhoto">Atualizar</label>
                </div>
              </div>
              {photoMsg && photo && (
                <p
                  className="fw-bold mt-2"
                  style={{ color: '#87FAD1', fontSize: '.9rem' }}
                >
                  Imagem alterada com sucesso
                </p>
              )}
              <p className={`${styles.hiddenText} mb-0 mt-2`}>
                A imagem deve estar no formato JPEG ou PNG.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 align-self-stretch mb-5 mb-md-0">
        <div className={styles.divSection}>
          <h3>Banner de perfil</h3>
          <p className={styles.hiddenText}>Altera seu banner de perfil</p>
          <div
            className={`${styles.divEdit} row justify-content-start align-items-center`}
          >
            <div className="col-12 col-md-6">
              {!banner && (
                <img
                  src={`data:image/png;base64, ${user.user.banner_URL}`}
                  alt=""
                />
              )}
              {banner && <img src={banner} alt="" />}
            </div>
            <div className="col-12 col-md-6">
              <div
                className={`${styles.divInputFile} mx-auto mx-md-0 mt-3 mt-md-0`}
              >
                <input
                  type="file"
                  id="inputBanner"
                  accept="image/png, image/jpeg"
                  onChange={handleChangeImage}
                  ref={refBanner}
                />
                <label htmlFor="inputBanner">Atualizar</label>
              </div>
              {bannerMsg && banner && (
                <p
                  className="fw-bold mt-2"
                  style={{ color: '#87FAD1', fontSize: '.9rem' }}
                >
                  Imagem alterada com sucesso
                </p>
              )}
              <p className={`${styles.hiddenText} mb-0 mt-2`}>
                A imagem deve estar no formato JPEG ou PNG.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form
        method="POST"
        action="#"
        onSubmit={handleSubmitProfile}
        className="col-12 mt-3"
      >
        <div className={styles.divSection}>
          <h3>Configurações de perfil</h3>
          <p className={styles.hiddenText}>Altere seu nome e sua biografia</p>
          <div className={`${styles.divInputs} mt-4`}>
            <div>
              <h4>Nome Completo</h4>
              <FloatingLabel
                controlId={'name'}
                label={'Nome Completo'}
                className="mt-3"
              >
                <Form.Control
                  type="text"
                  label="Nome Completo"
                  ref={name.ref}
                  value={name.validation.value}
                  onChange={(event) => {
                    name.validation.onChange(event);
                    if (editing === false) setEditing(true);
                  }}
                  onBlur={name.validation.onBlur}
                  minLength={4}
                  maxLength={25}
                />
              </FloatingLabel>
              {name.validation.error ? (
                <p className={styles.error}>{name.validation.error}</p>
              ) : (
                ''
              )}
              {name.validation.value !== user.user.name && <UnsavedChanges />}
            </div>
            <div className="mt-3">
              <h4>Sobre mim</h4>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  maxLength={250}
                  style={{ height: '100px' }}
                  ref={bio.ref}
                  onChange={(event) => {
                    bio.validation.onChange(event);
                    if (editing === false) setEditing(true);
                  }}
                  onBlur={bio.validation.onBlur}
                />
              </FloatingLabel>
              {bio.validation.error ? (
                <p className={`${styles.error} mb-1`}>
                  {bio.validation.error || 'Alterações não salvas'}
                </p>
              ) : (
                ''
              )}
              {(user.user.bio === null
                ? bio.validation.value.length > 0 && alertEditing
                  ? true
                  : false
                : bio.validation.value !== user.user.bio && alertEditing
                ? true
                : false) && <UnsavedChanges />}

              <p style={{ fontSize: '.9rem' }}>
                <span className="me-2">{bio.validation.value.length}/250</span>
                <span className="fw-semibold">
                  {bio.validation.value.length === 250
                    ? 'Limite de carateres atingido'
                    : ''}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <ButtonCustom type="submit">Salvar Alterações</ButtonCustom>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConfigProfile;

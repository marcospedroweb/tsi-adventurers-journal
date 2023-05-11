import React from 'react';
import styles from './ConfigProfile.module.css';
import { convertImageToBase64Promise } from '../Helpers/convertImageToBase64';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { GlobalContext } from '../Context/GlobalStorage';
import { FloatingLabel, Form } from 'react-bootstrap';
import useForm from '../Hooks/userForm';
import FloatingInputCustom from './FloatingInputCustom';
import ButtonCustom from './ButtonCustom';
import useFetch from '../Hooks/useFetch';

const ConfigProfile = ({ user, edit }) => {
  const { session, setSession } = React.useContext(GlobalContext);
  const [photo, setPhoto] = React.useState('');
  const [banner, setBanner] = React.useState('');
  const refPhoto = React.useRef();
  const refBanner = React.useRef();
  const name = GetSimpleInputObj('name');
  const bio = GetSimpleInputObj('bio');
  const { loading, request } = useFetch();

  React.useEffect(() => {
    name.validation.setValue(name.validation.value || user.name);
    bio.validation.setValue(bio.validation.value || user.bio || '');
  }, []);

  async function handleChangeImage() {
    edit.setEditing(true);
    if (refPhoto.current.value)
      setPhoto(await convertImageToBase64Promise(refPhoto.current.files[0]));
    if (refBanner.current.value)
      setBanner(await convertImageToBase64Promise(refBanner.current.files[0]));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    alert('form enviado');
  }

  return (
    <form
      className={`${styles.divMain} row justify-content-between align-items-center`}
      onSubmit={handleSubmit}
    >
      <div className="col-12 col-md-6 align-self-stretch">
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
                    src={`data:image/png;base64, ${user.foto_URL}`}
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
              <div className={styles.divInputFile}>
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
              <p className={`${styles.hiddenText} mb-0 mt-2`}>
                A imagem deve estar no formato JPEG ou PNG.
              </p>
              {photo && edit.alertEditing ? (
                <p className={styles.error}>Alterações não salvas</p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 align-self-stretch">
        <div className={styles.divSection}>
          <h3>Banner de perfil</h3>
          <p className={styles.hiddenText}>Altera seu banner de perfil</p>
          <div
            className={`${styles.divEdit} row justify-content-start align-items-center`}
          >
            <div className="col-12 col-md-6">
              {!banner && (
                <img src={`data:image/png;base64, ${user.banner_URL}`} alt="" />
              )}
              {banner && <img src={banner} alt="" />}
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.divInputFile}>
                <div>
                  <input
                    type="file"
                    id="inputBanner"
                    accept="image/png, image/jpeg"
                    onChange={handleChangeImage}
                    ref={refBanner}
                  />
                  <label htmlFor="inputBanner">Atualizar</label>
                </div>
              </div>
              <p className={`${styles.hiddenText} mb-0 mt-2`}>
                A imagem deve estar no formato JPEG ou PNG.
              </p>
              {banner && edit.alertEditing ? (
                <p className={styles.error}>Alterações não salvas</p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3">
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
                    if (edit.editing === false) edit.setEditing(true);
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
              {name.validation.value !== user.name && edit.alertEditing ? (
                <p className={styles.error}>{'Alterações não salvas'}</p>
              ) : (
                ''
              )}
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
                    if (edit.editing === false) edit.setEditing(true);
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
              {console.log(
                user.bio === null
                  ? bio.validation.value.length > 0 && edit.alertEditing
                    ? true
                    : false
                  : bio.validation.value !== user.bio && edit.alertEditing
                  ? true
                  : false,
              )}
              {(
                user.bio === null
                  ? bio.validation.value.length > 0 && edit.alertEditing
                    ? true
                    : false
                  : bio.validation.value !== user.bio && edit.alertEditing
                  ? true
                  : false
              ) ? (
                <p className={`${styles.error} mb-1`}>Alterações não salvas</p>
              ) : (
                ''
              )}
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
        </div>
      </div>
      <div className="text-center mt-3">
        <ButtonCustom type="submit">Salvar Alterações</ButtonCustom>
      </div>
    </form>
  );
};

export default ConfigProfile;

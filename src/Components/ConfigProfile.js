import React from 'react';
import styles from './ConfigProfile.module.css';
import { convertImageToBase64Promise } from '../Helpers/convertImageToBase64';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { GlobalContext } from '../Context/GlobalStorage';
import { FloatingLabel, Form } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import useFetch from '../Hooks/useFetch';
import UnsavedChanges from './UnsavedChanges';
import {
  apiRoute,
  optionsFetch,
  showUserRoute,
  updateUserRoute,
} from '../DB/data';
import { noUserImageBase64 } from '../Helpers/NoUserBase64';
import { noUserBannerBase64 } from '../Helpers/NoUserBanner64';
import GetMsgObj from '../Helpers/GetMsgObj';
import SuccessMsg from './SuccessMsg';

const ConfigProfile = ({ user }) => {
  const { session, alertEditing, setAlertEditing, editing, setEditing } =
    React.useContext(GlobalContext);
  const photo = GetMsgObj();
  const banner = GetMsgObj();
  const { loading, request } = useFetch();
  const formNameBio = GetMsgObj();
  const name = GetSimpleInputObj('name');
  const bio = GetSimpleInputObj('bio');

  React.useEffect(() => {
    name.validation.setValue(name.validation.value || user.user.name);
    bio.validation.setValue(
      user.user.bio && user.user.bio !== null ? user.user.bio : '',
    );
  }, []);

  async function handleChangeImage() {
    if (photo.ref.current.value) {
      const formData = new FormData();
      const file = photo.ref.current.files[0];
      formData.append('profile_photo_path', file);

      const { json } = await photo.request(
        `${apiRoute}${updateUserRoute}`,
        optionsFetch({
          method: 'POST',
          body: formData,
          token: session.user.token,
          file: true,
        }),
      );

      if (!json.data) photo.setErroBack(true);

      const updateUser = await photo.request(
        `${apiRoute}${showUserRoute}`,
        optionsFetch({
          method: 'GET',
          token: session.user.token,
        }),
      );
      if (!updateUser.json) photo.setErroBack(true);

      user.setUser(updateUser.json.data);

      photo.setData(await convertImageToBase64Promise(file));
      photo.setSuccess(true);
      setTimeout(() => {
        photo.setSuccess(false);
      }, 3000);
    } else {
      photo.setErroBack(true);
    }
    if (banner.ref.current.value) {
      const formData = new FormData();
      const file = banner.ref.current.files[0];

      formData.append('profile_banner_path', file);

      const { json } = await banner.request(
        `${apiRoute}${updateUserRoute}`,
        optionsFetch({
          method: 'POST',
          body: formData,
          file: true,
          token: session.user.token,
        }),
      );

      if (json.data) {
        banner.setData(await convertImageToBase64Promise(file));
        banner.setSuccess(true);
        setTimeout(() => {
          banner.setSuccess(false);
        }, 3000);
      } else {
        banner.setErroBack(true);
      }
    } else {
      banner.setErroBack(true);
    }
  }

  async function handleSubmitProfile(event) {
    event.preventDefault();
    const newName = name.validation.value;
    const newBio = bio.validation.value;

    if (
      newName === user.user.name &&
      newBio === user.user.bio &&
      user.user.bio !== null
    )
      return;

    /*
    UPDATE USUARIO
    */

    const { json } = await request(
      `${apiRoute}${updateUserRoute}`,
      optionsFetch({
        method: 'POST',
        body: {
          name: newName,
          bio: newBio,
        },
        token: session.user.token,
      }),
    );

    if (!json.data) formNameBio.setErroBack(true);

    formNameBio.setSuccess(true);
    setTimeout(() => {
      formNameBio.setSuccess(false);
    }, 3000);
    setAlertEditing(false);
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
                {!photo.data && (
                  <img
                    src={
                      user.user.foto_URL
                        ? user.user.foto_URL
                        : noUserImageBase64
                    }
                    className="rounded-circle"
                    style={{ maxHeight: '90px', maxWidth: '90px' }}
                    alt=""
                  />
                )}
                {photo.data && (
                  <img
                    src={photo.data}
                    className="rounded-circle"
                    style={{ maxHeight: '90px', maxWidth: '90px' }}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className={`${styles.divInputFile} ${
                  photo.loading ? 'btn-loading' : ''
                } mx-auto mx-md-0 mt-3 mt-md-0`}
              >
                <div>
                  <input
                    type="file"
                    id="inputPhoto"
                    accept="image/png, image/jpeg"
                    onChange={handleChangeImage}
                    ref={photo.ref}
                  />
                  <label htmlFor="inputPhoto">
                    {photo.loading ? 'Carregando...' : 'Atualizar'}
                  </label>
                </div>
              </div>
              {photo.errorBack && (
                <UnsavedChanges msg="Houve algum erro. Tente novamente dentro de alguns minutos" />
              )}
              {photo.success && photo && (
                <p
                  className="fw-bold mt-2"
                  style={{ color: '#87FAD1', fontSize: '.9rem' }}
                >
                  Imagem alterada com sucesso
                </p>
              )}
              <p className={`${styles.hiddenText} mb-0 mt-2`}>
                A imagem deve estar no formato JPEG ou PNG. Resolução
                recomendada: 250x250
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
              {!banner.data && (
                <img
                  src={
                    user.user.banner_URL
                      ? user.user.banner_URL
                      : noUserBannerBase64
                  }
                  alt=""
                />
              )}
              {banner.data && <img src={banner.data} alt="" />}
            </div>
            <div className="col-12 col-md-6">
              <div
                className={`${styles.divInputFile} ${
                  banner.loading ? 'btn-loading' : ''
                } mx-auto mx-md-0 mt-3 mt-md-0`}
              >
                <input
                  type="file"
                  id="inputBanner"
                  accept="image/png, image/jpeg"
                  onChange={handleChangeImage}
                  ref={banner.ref}
                />
                <label htmlFor="inputBanner">
                  {banner.loading ? 'Carregando...' : 'Atualizar'}
                </label>
              </div>
              {banner.errorBack && (
                <UnsavedChanges msg="Houve algum erro. Tente novamente dentro de alguns minutos" />
              )}
              {banner.success && banner && (
                <p
                  className="fw-bold mt-2"
                  style={{ color: '#87FAD1', fontSize: '.9rem' }}
                >
                  Imagem alterada com sucesso
                </p>
              )}
              <p className={`${styles.hiddenText} mb-0 mt-2`}>
                A imagem deve estar no formato JPEG ou PNG. Resolução
                recomendada: 1600x450
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
          <div>
            {formNameBio.errorBack && (
              <UnsavedChanges msg="Houve algum erro. Tente novamente dentro de alguns minutos" />
            )}
            {formNameBio.success && <SuccessMsg btn={true} />}
          </div>
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
                label="Sobre mim"
                className="mb-1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Sobre mim"
                  maxLength={300}
                  style={{ height: '100px' }}
                  ref={bio.ref}
                  value={bio.validation.value}
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
                <span className="me-2">{bio.validation.value.length}/300</span>
                <span className="fw-semibold">
                  {bio.validation.value.length === 300
                    ? 'Limite de carateres atingido'
                    : ''}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <ButtonCustom type="submit" loading={formNameBio.loading}>
              {formNameBio.loading ? 'Carregando...' : 'Salvar Alterações'}
            </ButtonCustom>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConfigProfile;

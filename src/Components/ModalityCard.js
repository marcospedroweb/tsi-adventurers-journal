import React from 'react';
import styles from './ModalityCard.module.css';

const ModalityCard = ({
  modalityName,
  img,
  desc,
  showIn = 'home',
  location = '',
  countFriends = '',
  date = '',
  col = 'col-3',
  loading = false,
}) => {
  const [showData, setShowData] = React.useState(false);
  const [windowMobile, setWindowMobile] = React.useState(false);
  React.useEffect(() => {
    setWindowMobile(window.innerWidth < 992);
  }, []);

  function handleShowData() {
    setShowData(!showData);
  }

  if (loading)
    return (
      <div className={`col-12 col-sm-6 col-lg-${col} mt-3`}>
        <div className={styles.skeleton}>
          <div
            className={`${styles.divSkeletonImg} ${
              showData ? styles.show : ''
            }`}
          ></div>
        </div>
      </div>
    );
  else if (showIn === 'home')
    return (
      <div
        className={`col-12 col-sm-6 col-lg-${col} ${styles.showHome} mt-3`}
        onClick={windowMobile ? handleShowData : () => {}}
        onMouseEnter={handleShowData}
        onMouseLeave={handleShowData}
      >
        <div
          className={`${styles.divImg} ${showData ? styles.show : ''}`}
          style={{
            backgroundImage: `url(${img.replace(
              'http://18.222.111.91',
              'https://tsi-adventurers-journal.vercel.app',
            )})`,
          }}
        >
          <div className={`${styles.filter} position-absolute`}></div>
          <div
            className={`${styles.divData} position-absolute d-flex flex-column justify-content-center align-items-center`}
          >
            <h2 className={showIn === 'adventure' ? 'm-0' : ''}>
              {modalityName}
            </h2>
            <p>{desc ? desc : `Nenhum comentario feito`}</p>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={`col-12 col-md-6 mt-3 ${styles.showProfile}`}
        onClick={handleShowData}
      >
        <div
          className={`${styles.divImg} ${showData ? styles.show : ''}`}
          style={{
            backgroundImage: `url(${img.replace(
              'http://18.222.111.91',
              'https://tsi-adventurers-journal.vercel.app',
            )})`,
          }}
        >
          <div
            className={`${styles.filter} position-absolute top-50 start-50 translate-middle`}
          ></div>
          <div
            className={`${styles.divData} position-absolute d-flex flex-column justify-content-center align-items-center`}
          >
            <h2>{modalityName}</h2>
            <div className={`${styles.divAdventureText} text-start`}>
              <p>
                Local: <span className="fw-bold">{location}</span>
              </p>
              {/* <p>
                Pratiquei com <span className="fw-bold">2 Amigos</span>
              </p> */}
            </div>
            <p style={{ fontSize: '.9rem' }}>
              {/* Maximo: 250 caracteres */}
              {desc ? `"${desc}"` : `"Nenhum comentário feito"`}
            </p>
            <p className="mt-3">
              Praticado em <span className="fw-bold">{date}</span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default ModalityCard;

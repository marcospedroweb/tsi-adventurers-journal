import React from 'react';
import styles from './AllModalitys.module.css';
import useFetch from '../Hooks/useFetch';
import ModalityCard from './ModalityCard';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import ButtonCustom from './ButtonCustom';
import { useLocation, useParams } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';

const AllModalitys = () => {
  const modalitysRef = React.useRef();
  const [modalitys, setModalitys] = React.useState([{ loading: true }]);
  const { request } = useFetch();

  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollToValue = params.get('scrollTo');
    if (scrollToValue)
      scroller.scrollTo(scrollToValue, {
        smooth: true,
        duration: 500,
      });

    async function getModalitys() {
      const { json } = await request(
        `${apiRoute}${getModalitysRoute}`,
        optionsFetch({ method: 'GET' }),
      );
      setModalitys(json.data);
    }
    getModalitys();

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adicionar event listener para atualizar o tamanho da janela quando a janela for redimensionada
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showNum, setShowNum] = React.useState(windowSize.width < 768 ? 4 : 8);

  return (
    <section className={styles.section} id="modalitys" ref={modalitysRef}>
      <div className="container-xl">
        <h2 className="text-center fw-bold mb-4">
          Conheça todas as modalidades
        </h2>
        {modalitys && modalitys[0].loading && (
          <div className="row justify-content-between aling-items-center">
            {windowSize.width > 768 ? (
              <>
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
              </>
            ) : (
              <>
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
                <ModalityCard
                  modalityName={'Paraquedismo'}
                  img={'/imgs/paraquedas.jpeg'}
                  desc={''}
                  col="3"
                  showIn="home"
                  loading={true}
                />
              </>
            )}
          </div>
        )}
        {modalitys && modalitys.length === 16 && [4, 8].includes(showNum) && (
          <div className="row justify-content-between aling-items-center">
            {modalitys
              .slice(0, showNum)
              .map(({ identify, descricao, foto, nome }, index) => {
                return (
                  <ModalityCard
                    key={identify}
                    modalityName={nome}
                    img={foto}
                    desc={descricao}
                    col="3"
                    showIn="home"
                  />
                );
              })}
          </div>
        )}
        {modalitys && modalitys.length === 16 && ![4, 8].includes(showNum) && (
          <div className="row justify-content-between aling-items-center">
            {modalitys.map(({ identify, descricao, foto, nome }, index) => {
              return (
                <ModalityCard
                  key={identify}
                  modalityName={nome}
                  img={foto}
                  desc={descricao}
                  col="3"
                  showIn="home"
                />
              );
            })}
          </div>
        )}
        <div className="text-center mt-4">
          <ButtonCustom
            bsClass="py-2 px-3 fw-bold fs-5"
            onClick={() => {
              if (!showNum) setShowNum(windowSize.width < 768 ? 4 : 8);
              else setShowNum(0);
            }}
          >
            {!showNum ? 'Ver menos modalidades' : 'Ver mais modalidades'}
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default AllModalitys;

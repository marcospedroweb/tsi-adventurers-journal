import React from 'react';
import styles from './AllModalitys.module.css';
import useFetch from '../Hooks/useFetch';
import ModalityCard from './ModalityCard';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import ButtonCustom from './ButtonCustom';

const AllModalitys = () => {
  const [modalitys, setModalitys] = React.useState([{ loading: true }]);
  const { request } = useFetch();

  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
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
    <section className={styles.section} id="modalitys">
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
              .map(({ identify, Descrição, Foto, Nome }, index) => {
                return (
                  <ModalityCard
                    key={identify}
                    modalityName={Nome}
                    img={Foto}
                    desc={Descrição}
                    col="3"
                    showIn="home"
                  />
                );
              })}
          </div>
        )}
        {modalitys && modalitys.length === 16 && ![4, 8].includes(showNum) && (
          <div className="row justify-content-between aling-items-center">
            {modalitys.map(({ identify, Descrição, Foto, Nome }, index) => {
              return (
                <ModalityCard
                  key={identify}
                  modalityName={Nome}
                  img={Foto}
                  desc={Descrição}
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

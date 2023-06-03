import React from 'react';
import styles from './SectionModalityPlan.module.css';
import ModalityCard from './ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';
import CardsPlans from './CardsPlans';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const SectionModalityPlan = () => {
  const [modalitys, setModalitys] = React.useState([{ loading: true }]);
  const navigate = useNavigate();
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
    <section id={styles.body}>
      <div className="container-xl position-relative">
        <div className="row justify-content-between align-items-start text-center">
          <div className={styles.divText}>
            <h2>Conheça algumas das modalidades</h2>
          </div>

          {modalitys && modalitys[0].loading && (
            <div className="row justify-content-between aling-items-center mx-auto mx-lg-0">
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
            <div className="row justify-content-between aling-items-center mx-auto mx-lg-0">
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
          {modalitys &&
            modalitys.length === 16 &&
            ![4, 8].includes(showNum) && (
              <div className="row justify-content-between aling-items-center mx-auto mx-lg-0">
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
          <div className="text-center">
            <ButtonCustom
              bsClass="m-3 text-uppercase fw-bold"
              onClick={() => {
                navigate('/aventurar-se?scrollTo=modalitys');
              }}
            >
              Ver mais modalidades
            </ButtonCustom>
          </div>
        </div>
        <div>
          <div className={styles.divTextPlans}>
            <h2>Personalize sua experiência</h2>
            <p>
              Clientes <span className="text-green">adventurer</span> ganham
              descontos em viagens.
            </p>
          </div>
          <CardsPlans />
        </div>
      </div>
    </section>
  );
};

export default SectionModalityPlan;

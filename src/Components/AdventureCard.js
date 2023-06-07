import React from 'react';
import styles from './AdventureCard.module.css';
import LabelCard from './LabelCard';
import AdventurePrice from './AdventurePrice';
import { Accordion } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import CardPrice from './CardPrice';
import { GlobalContext } from '../Context/GlobalStorage';
import FormatPrice from '../Helpers/FormatPrice';
import { noUserImageBase64 } from '../Helpers/NoUserBase64';
import { Link } from 'react-router-dom';
import { apiRoute } from '../DB/data';

const AdventureCard = ({ data, best, hotel }) => {
  const { searchAdventure, completedOrder } = React.useContext(GlobalContext);
  const [showMore, setShowMore] = React.useState(false);
  const [section, setSection] = React.useState('informações');
  const date = new Date(hotel ? '' : data.Data_e_Hora);

  if (hotel)
    return (
      <div className={`${styles.divMain} ${styles.hotel} mb-4`}>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
          <div
            className={`${styles.divImg} align-self-stretch ${
              showMore ? styles.divImgWithRounded : ''
            }`}
          ></div>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-center align-items-center align-items-lg-center pt-3 px-3 w-100">
            <div className="d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start px-3 w-100">
              <h3>{data.name}</h3>
              <p>{data.state}</p>
              <p>{data.address}</p>
              <div
                className={`${styles.divMore} d-flex justify-content-between align-items-center my-4 my-lg-3 mb-2 w-100`}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <span className="me-2 fw-semibold">Ver mais informações</span>
                {showMore ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>
            <AdventurePrice data={data} isHotel={true} best={best} />
          </div>
        </div>
        <Accordion
          className={`${
            showMore ? 'd-flex' : 'd-none'
          } justify-content-between align-items-start border-0`}
          activeKey={showMore ? '0' : ''}
        >
          <Accordion.Item eventKey="0" className="border-0 w-100 mt-2">
            <Accordion.Header className="visually-hidden">
              Mais informações da aventura
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column justify-content-start align-items-center border-0">
              <div className={`${styles.moreSections} `}>
                <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 ">
                  <li
                    className={section === 'informações' ? styles.active : ''}
                    onClick={() => {
                      setSection('informações');
                    }}
                  >
                    Informações
                  </li>
                  <li
                    className={section === 'localização' ? styles.active : ''}
                    onClick={() => {
                      setSection('localização');
                    }}
                  >
                    Localização
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.section} ${
                  section === 'informações' ? 'd-flex' : 'd-none'
                } flex-column justify-content-start align-items-start text-center text-sm-start w-100`}
              >
                <div className="mb-4">
                  <h4>Sobre a hospedagem</h4>
                  <p className="mb-0 text-center text-lg-start">{data.about}</p>
                </div>
                <div className="mb-4">
                  <h4>Principais comodidades do hotel</h4>
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                    {data.hotelAmenities.map((text) => {
                      return (
                        <div className="mt-1 me-1" key={text}>
                          <LabelCard text={text} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4>Preço</h4>
                  <div className="row justify-content-between align-items-center ">
                    <CardPrice
                      price={FormatPrice(data.price)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text: '1 pessoa',
                          price: FormatPrice(data.price),
                        },
                      ]}
                      total={FormatPrice(data.price)}
                      totalDescount={FormatPrice(
                        data.price - data.price * 0.15,
                      )}
                      method={'No boleto ou Pix'}
                      bsClass={'col-12 col-md-6 col-lg-4 align-self-stretch'}
                      size={'small'}
                      seal={'plus'}
                    />
                    <CardPrice
                      price={FormatPrice(data.price)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text: '1 pessoa',
                          price: FormatPrice(data.price),
                        },
                      ]}
                      total={FormatPrice(data.price)}
                      totalDescount={FormatPrice(data.price - data.price * 0.1)}
                      method={'No boleto ou Pix'}
                      bsClass={'col-12 col-md-6 col-lg-4 mt-3 mt-md-0'}
                      size={'small'}
                      seal={'adventurer'}
                    />
                    <CardPrice
                      price={FormatPrice(data.price)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text: '1 pessoa',
                          price: FormatPrice(data.price),
                        },
                      ]}
                      total={FormatPrice(data.price)}
                      totalDescount={FormatPrice(
                        data.price - data.price * 0.05,
                      )}
                      method={'No boleto ou Pix'}
                      bsClass={'col-12 col-md-6 col-lg-4 mt-3 mt-lg-0'}
                      size={'small'}
                      seal={'gratis'}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.section} ${
                  section === 'localização' ? 'd-flex' : 'd-none'
                } flex-column justify-content-center align-items-center w-100`}
              >
                <div className="row justify-content-center justify-content-lg-start align-items-start text-start text-lg-start w-100">
                  <div className="col-12">
                    <div>
                      <div className="mb-3">
                        <h4>Localização</h4>
                        <p style={{ width: 'fit-content' }}>{data.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  else
    return (
      <div className={`${styles.divMain} mb-4`}>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
          <div
            className={`${styles.divImg} align-self-stretch ${
              showMore ? styles.divImgWithRounded : ''
            }`}
            style={{
              backgroundImage: `url(${`${apiRoute}/storage/${data.modalidade[0].foto}`})`,
            }}
          ></div>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-3 px-3 w-100">
            <div className="d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-3 px-3 w-100">
              <h3>{data.Titulo}</h3>
              <p>
                {data.cidade.nome}, {data.cidade.uf} - {data.cidade.pais}
              </p>
              <LabelCard
                text={`Idade minima: ${data['Idade minima']} anos`}
                bsClass="mb-2"
                stylesCss={{ color: '#87FAD1', fontSize: '.85rem' }}
              />
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-2 mb-2">
                <LabelCard
                  text={`${date.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                  })}/${date.toLocaleDateString('pt-BR', {
                    month: '2-digit',
                  })}/${date.getFullYear()} - ${date.getHours()}:${date
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`}
                  bsClass={'me-2'}
                />
              </div>
              <div className="d-none d-lg-flex justify-content-between align-items-center flex-wrap mt-3 mt-lg-2">
                {data.modalidade.slice(0, 3).map(({ id, nome, descricao }) => {
                  return (
                    <LabelCard
                      key={id + nome + data.id + 1}
                      text={nome}
                      tip={true}
                      tipText={descricao}
                    />
                  );
                })}
                {data.modalidade.length > 3 ? (
                  <LabelCard
                    text={`+${data.modalidade.length - 3}`}
                    bsClass={'ms-1'}
                  />
                ) : (
                  ''
                )}
              </div>
              <div className="d-flex d-lg-none justify-content-between align-items-center flex-wrap mt-3 mt-lg-2">
                {data.modalidade.slice(0, 2).map(({ id, nome, descricao }) => {
                  return (
                    <LabelCard
                      key={id + nome + data.id + 2}
                      text={nome}
                      tip={true}
                      tipText={descricao}
                    />
                  );
                })}
                {data.modalidade.length > 3 ? (
                  <LabelCard
                    text={`+${data.modalidade.length - 3}`}
                    bsClass={'ms-1'}
                  />
                ) : (
                  ''
                )}
              </div>
              <div
                className={`${styles.divMore} d-flex justify-content-between align-items-center my-4 my-lg-3 mb-2 w-100`}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <span className="me-2 fw-semibold">Ver mais informações</span>
                {showMore ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>
            <AdventurePrice data={data} />
          </div>
        </div>
        <Accordion
          className={`${
            showMore ? 'd-flex' : 'd-none'
          } justify-content-between align-items-start border-0`}
          activeKey={showMore ? '0' : ''}
        >
          <Accordion.Item eventKey="0" className="border-0 w-100 mt-2">
            <Accordion.Header className="visually-hidden">
              Mais informações da aventura
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column justify-content-start align-items-center border-0">
              <div className={`${styles.moreSections} `}>
                <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 ">
                  <li
                    className={section === 'informações' ? styles.active : ''}
                    onClick={() => {
                      setSection('informações');
                    }}
                  >
                    Informações
                  </li>
                  <li
                    className={
                      section === 'guia turistico' ? styles.active : ''
                    }
                    onClick={() => {
                      setSection('guia turistico');
                    }}
                  >
                    Guia turístico
                  </li>
                  <li
                    className={section === 'localização' ? styles.active : ''}
                    onClick={() => {
                      setSection('localização');
                    }}
                  >
                    Localização
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.section} ${
                  section === 'informações' ? 'd-flex' : 'd-none'
                } flex-column justify-content-start align-items-start text-center text-sm-start w-100`}
              >
                <div className="mb-4">
                  <h4>Sobre a aventura</h4>
                  <p className="mb-0">{data['Descrição']}</p>
                </div>
                <div className="mb-4 mx-auto mx-sm-0">
                  <h4>Periodo</h4>
                  <div className="d-flex justify-content-center align-items-center">
                    <LabelCard
                      title="Data e Horário"
                      text={`${date.toLocaleDateString('pt-BR', {
                        day: '2-digit',
                      })}/${date.toLocaleDateString('pt-BR', {
                        month: '2-digit',
                      })}/${date.getFullYear()} - ${date.getHours()}:${date
                        .getMinutes()
                        .toString()
                        .padStart(2, '0')}`}
                      bsClass={'me-3 me-sm-0'}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h4>Modalidades da aventura</h4>
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                    {data.modalidade.map(({ id, nome, descricao }) => {
                      return (
                        <LabelCard
                          key={id + nome + data.id + 3}
                          text={nome}
                          tip={true}
                          tipText={descricao}
                          bsClass={'mt-1 me-1 me-sm-0'}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4>Preço</h4>
                  <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                    <CardPrice
                      price={FormatPrice(data.preco)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text:
                            searchAdventure.passengers > 1
                              ? `${searchAdventure.passengers} pessoas`
                              : `${searchAdventure.passengers} pessoa`,
                          price:
                            searchAdventure.passengers > 1
                              ? FormatPrice(
                                  Number.parseFloat(data.preco) *
                                    searchAdventure.passengers,
                                )
                              : FormatPrice(data.preco),
                        },
                        // { text: 'Taxa de serviço:', price: '275' },
                        // { text: 'Taxa de equipamentos:', price: '120' },
                      ]}
                      total={
                        searchAdventure.passengers > 1
                          ? FormatPrice(
                              Number.parseFloat(data.preco) *
                                searchAdventure.passengers,
                            )
                          : FormatPrice(data.preco)
                      }
                      totalDescount={FormatPrice(
                        (searchAdventure.passengers > 1
                          ? Number.parseFloat(data.preco) *
                            searchAdventure.passengers
                          : data.preco) -
                          (searchAdventure.passengers > 1
                            ? Number.parseFloat(data.preco) *
                              searchAdventure.passengers
                            : data.preco) *
                            0.1,
                      )}
                      method={'No boleto ou Pix'}
                      bsClass={'mb-3 mb-sm-0 me-0 me-sm-3'}
                    />
                    <CardPrice
                      price={FormatPrice(data.preco)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text:
                            searchAdventure.passengers > 1
                              ? `${searchAdventure.passengers} pessoas`
                              : `${searchAdventure.passengers} pessoa`,
                          price:
                            searchAdventure.passengers > 1
                              ? FormatPrice(
                                  Number.parseFloat(data.preco) *
                                    searchAdventure.passengers,
                                )
                              : FormatPrice(data.preco),
                        },
                        // { text: 'Taxa de serviço:', price: '275' },
                        // { text: 'Taxa de equipamentos:', price: '120' },
                      ]}
                      totalDescount={
                        searchAdventure.passengers > 1
                          ? FormatPrice(
                              Number.parseFloat(data.preco) *
                                searchAdventure.passengers,
                            )
                          : FormatPrice(data.preco)
                      }
                      method={'No cartão de credito'}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.section} ${
                  section === 'guia turistico' ? 'd-flex' : 'd-none'
                } flex-column flex-lg-row justify-content-center justify-content-lg-start align-items-center align-items-lg-start text-center text-lg-start w-100`}
              >
                <div className="mb-4 text-center me-lg-5">
                  {data.guia.foto && (
                    <div
                      className={styles.divGuideImg}
                      style={{
                        backgroundImage: `url(${apiRoute}/storage/${data.guia.foto})`,
                      }}
                    ></div>
                  )}
                  {!data.guia.foto && (
                    <div
                      className={styles.divGuideImg}
                      style={{ backgroundImage: `url(${noUserImageBase64})` }}
                    ></div>
                  )}

                  <h4>Guia turístico</h4>
                  <p className="mb-2">{data.guia.nome}</p>
                  <div>
                    <Link
                      to={`/perfil/${data.guia.id}`}
                      className="text-center mb-0 fw-semibold"
                      style={{
                        color: '#00A3FF',
                        cursor: 'pointer',
                        textDecoration: 'none',
                      }}
                      target="_blanck"
                    >
                      Ver perfil
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h4>Sobre mim</h4>
                    <p className="mb-0">
                      {data.guia.bio ? data.guia.bio : 'Texto não inserido'}
                    </p>
                  </div>
                  {/* <div className="mb-4">
                    <h4>Avaliações em minhas aventuras</h4>
                    <div className="d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap">
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                      <LabelCard aval={'9.8'} text={'Paraquedismo'} />
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className={`${styles.section} ${
                  section === 'localização' ? 'd-flex' : 'd-none'
                } flex-column justify-content-center align-items-center w-100`}
              >
                <div className="d-flex justify-content-start align-items-center w-100 text-start">
                  <div>
                    <div className="mb-3">
                      <h4>Localização</h4>
                      <p>
                        {data.cidade.nome}, {data.cidade.uf} -{' '}
                        {data.cidade.pais}
                      </p>
                    </div>
                    <div className="mb-3">
                      <h4>Mapa</h4>
                      <p>
                        <a
                          href={`https://www.google.com/maps/place/${`${data.cidade.nome}, ${data.cidade.uf} - ${data.cidade.pais}`}`}
                          className="text-center mb-0 fw-semibold"
                          style={{
                            color: '#00A3FF',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          target="_blanck"
                        >
                          Ver no mapa
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default AdventureCard;

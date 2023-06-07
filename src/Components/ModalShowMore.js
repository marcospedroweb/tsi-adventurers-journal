import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './ModalShowMore.module.css';
import { BsChevronRight } from 'react-icons/bs';
import LabelCard from './LabelCard';
import CardPrice from './CardPrice';
import FormatPrice from '../Helpers/FormatPrice';
import { Link } from 'react-router-dom';
import { noUserImageBase64 } from '../Helpers/NoUserBase64';
import { apiRoute } from '../DB/data';

const ModalShowMore = ({ data, orders }) => {
  const [show, setShow] = React.useState(false);
  const [section, setSection] = React.useState('informações');
  const date = new Date(
    orders ? data.idAtividade[0].Data_e_Hora : data.idAtividade.Data_e_Hora,
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (orders)
    return (
      <>
        <span onClick={handleShow} className={styles.divBtn}>
          Ver mais informações {orders ? 'da atividade ' : ''}
          <span>
            <BsChevronRight />
          </span>
        </span>

        <Modal
          size="lg"
          show={show}
          onHide={handleClose}
          className={styles.divModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Mais informações</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className={`${styles.divMoreMain} d-flex flex-column justify-content-center align-items-center`}
            >
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
                } flex-column justify-content-start align-items-start text-center text-sm-start w-100 px-4`}
              >
                <div className="mb-4">
                  <h3>Sobre a aventura</h3>
                  <p className="mb-0">{data.idAtividade[0]['Descrição']}</p>
                </div>
                <div className="mb-4">
                  <h3>Passageiros</h3>
                  <LabelCard
                    text={`${
                      data.qtdPessoa > 1
                        ? `${data.qtdPessoa} Pessoas`
                        : `${data.qtdPessoa} Pessoa`
                    }`}
                  />
                </div>
                <div className="mb-4 mx-auto mx-sm-0">
                  <h3>Periodo</h3>
                  <div className="d-flex justify-content-center align-items-center">
                    <LabelCard
                      title="Data da atividade"
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
                  <h3>Modalidades da aventura</h3>
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                    {data.idAtividade[0].modalidade.map(
                      ({ id, nome, descricao }) => {
                        return (
                          <LabelCard
                            key={id + nome}
                            text={nome}
                            tip={true}
                            tipText={descricao}
                            bsClass={'mt-1 me-1 me-sm-0'}
                          />
                        );
                      },
                    )}
                  </div>
                </div>
                <div>
                  <h3>Preço</h3>
                  <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                    <CardPrice
                      price={FormatPrice(data.idAtividade[0].preco)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text:
                            data.qtdPessoa > 1
                              ? `${data.qtdPessoa} pessoas`
                              : `${data.qtdPessoa} pessoa`,
                          price:
                            data.qtdPessoa > 1
                              ? FormatPrice(
                                  Number.parseFloat(data.idAtividade[0].preco) *
                                    data.qtdPessoa,
                                )
                              : FormatPrice(data.idAtividade[0].preco),
                        },
                      ]}
                      total={
                        data.qtdPessoa > 1
                          ? FormatPrice(
                              Number.parseFloat(data.idAtividade[0].preco) *
                                data.qtdPessoa,
                            )
                          : FormatPrice(data.idAtividade[0].preco)
                      }
                      totalDescount={FormatPrice(
                        (data.qtdPessoa > 1
                          ? Number.parseFloat(data.idAtividade[0].preco) *
                            data.qtdPessoa
                          : data.idAtividade[0].preco) -
                          (data.qtdPessoa > 1
                            ? Number.parseFloat(data.idAtividade[0].preco) *
                              data.qtdPessoa
                            : data.idAtividade[0].preco) *
                            0.1,
                      )}
                      method={'No boleto ou Pix'}
                      bsClass={'mb-3 mb-sm-0 me-0 me-sm-3'}
                      order={true}
                    />
                    <CardPrice
                      price={FormatPrice(data.idAtividade[0].preco)}
                      per={'por pessoa'}
                      texts={[
                        {
                          text:
                            data.qtdPessoa > 1
                              ? `${data.qtdPessoa} pessoas`
                              : `${data.qtdPessoa} pessoa`,
                          price:
                            data.qtdPessoa > 1
                              ? FormatPrice(
                                  Number.parseFloat(data.idAtividade[0].preco) *
                                    data.qtdPessoa,
                                )
                              : FormatPrice(data.idAtividade[0].preco),
                        },
                      ]}
                      totalDescount={
                        data.qtdPessoa > 1
                          ? FormatPrice(
                              Number.parseFloat(data.idAtividade[0].preco) *
                                data.qtdPessoa,
                            )
                          : FormatPrice(data.idAtividade[0].preco)
                      }
                      method={'No cartão de credito'}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.section} ${
                  section === 'guia turistico' ? 'd-flex' : 'd-none'
                } flex-column flex-lg-row justify-content-center justify-content-lg-start align-items-center align-items-lg-start text-center text-lg-start w-100 px-4`}
              >
                <div className="mb-4 text-center me-lg-5">
                  {data.idAtividade[0].guia.foto && (
                    <div
                      className={styles.divGuideImg}
                      style={{
                        backgroundImage: `url(${apiRoute}/storage/${data.idAtividade[0].guia.foto})`,
                      }}
                    ></div>
                  )}
                  {!data.idAtividade[0].guia.foto && (
                    <div
                      className={styles.divGuideImg}
                      style={{ backgroundImage: `url(${noUserImageBase64})` }}
                    ></div>
                  )}

                  <h4>Guia turístico</h4>
                  <p className="mb-2">{data.idAtividade[0].guia.nome}</p>
                  <div>
                    <Link
                      to={`/perfil/${data.idAtividade[0].guia.id}`}
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
                    <h3>Sobre mim</h3>
                    <p className="mb-0">
                      {data.idAtividade[0].guia.bio
                        ? data.idAtividade[0].guia.bio
                        : 'Texto não inserido'}
                    </p>
                  </div>
                  {/* <div className="mb-4">
                  <h3>Avaliações em minhas aventuras</h3>
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
                } flex-column justify-content-center align-items-center w-100 px-4`}
              >
                <div className="d-flex justify-content-start align-items-center w-100 text-start">
                  <div>
                    <div className="mb-3">
                      <h3>Localização</h3>
                      <p>
                        {`${data.idAtividade[0].cidade.nome}, ${data.idAtividade[0].cidade.uf} - ${data.idAtividade[0].cidade.pais}`}
                      </p>
                    </div>
                    <div className="mb-3">
                      <h3>Mapa</h3>
                      <p>
                        <a
                          href={`https://www.google.com/maps/place/${`${data.idAtividade[0].cidade.nome}, ${data.idAtividade[0].cidade.uf} - ${data.idAtividade[0].cidade.pais}`}`}
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
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  return (
    <>
      <span onClick={handleShow} className={styles.divBtn}>
        Ver mais informações{' '}
        <span>
          <BsChevronRight />
        </span>
      </span>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className={styles.divModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mais informações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className={`${styles.divMoreMain} d-flex flex-column justify-content-center align-items-center`}
          >
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
                  className={section === 'guia turistico' ? styles.active : ''}
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
              } flex-column justify-content-start align-items-start text-center text-sm-start w-100 px-4`}
            >
              <div className="mb-4">
                <h3>Sobre a aventura</h3>
                <p className="mb-0">{data.idAtividade['Descrição']}</p>
              </div>
              <div className="mb-4">
                <h3>Passageiros</h3>
                <LabelCard
                  text={`${
                    data.qtdPessoa > 1
                      ? `${data.qtdPessoa} Pessoas`
                      : `${data.qtdPessoa} Pessoa`
                  }`}
                />
              </div>
              <div className="mb-4 mx-auto mx-sm-0">
                <h3>Periodo</h3>
                <div className="d-flex justify-content-center align-items-center">
                  <LabelCard
                    title="Data da atividade"
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
                <h3>Modalidades da aventura</h3>
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                  {data.idAtividade.modalidade.map(
                    ({ id, nome, descricao }) => {
                      return (
                        <LabelCard
                          key={id + nome}
                          text={nome}
                          tip={true}
                          tipText={descricao}
                          bsClass={'mt-1 me-1 me-sm-0'}
                        />
                      );
                    },
                  )}
                </div>
              </div>
              <div>
                <h3>Preço</h3>
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                  <CardPrice
                    price={FormatPrice(data.idAtividade.preco)}
                    per={'por pessoa'}
                    texts={[
                      {
                        text:
                          data.qtdPessoa > 1
                            ? `${data.qtdPessoa} pessoas`
                            : `${data.qtdPessoa} pessoa`,
                        price:
                          data.qtdPessoa > 1
                            ? FormatPrice(
                                Number.parseFloat(data.idAtividade.preco) *
                                  data.qtdPessoa,
                              )
                            : FormatPrice(data.idAtividade.preco),
                      },
                    ]}
                    total={
                      data.qtdPessoa > 1
                        ? FormatPrice(
                            Number.parseFloat(data.idAtividade.preco) *
                              data.qtdPessoa,
                          )
                        : FormatPrice(data.idAtividade.preco)
                    }
                    totalDescount={FormatPrice(
                      (data.qtdPessoa > 1
                        ? Number.parseFloat(data.idAtividade.preco) *
                          data.qtdPessoa
                        : data.idAtividade.preco) -
                        (data.qtdPessoa > 1
                          ? Number.parseFloat(data.idAtividade.preco) *
                            data.qtdPessoa
                          : data.idAtividade.preco) *
                          0.1,
                    )}
                    method={'No boleto ou Pix'}
                    bsClass={'mb-3 mb-sm-0 me-0 me-sm-3'}
                  />
                  <CardPrice
                    price={FormatPrice(data.idAtividade.preco)}
                    per={'por pessoa'}
                    texts={[
                      {
                        text:
                          data.qtdPessoa > 1
                            ? `${data.qtdPessoa} pessoas`
                            : `${data.qtdPessoa} pessoa`,
                        price:
                          data.qtdPessoa > 1
                            ? FormatPrice(
                                Number.parseFloat(data.idAtividade.preco) *
                                  data.qtdPessoa,
                              )
                            : FormatPrice(data.idAtividade.preco),
                      },
                    ]}
                    totalDescount={
                      data.qtdPessoa > 1
                        ? FormatPrice(
                            Number.parseFloat(data.idAtividade.preco) *
                              data.qtdPessoa,
                          )
                        : FormatPrice(data.idAtividade.preco)
                    }
                    method={'No cartão de credito'}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${styles.section} ${
                section === 'guia turistico' ? 'd-flex' : 'd-none'
              } flex-column flex-lg-row justify-content-center justify-content-lg-start align-items-center align-items-lg-start text-center text-lg-start w-100 px-4`}
            >
              <div className="mb-4 text-center me-lg-5">
                {data.idAtividade.guia.foto && (
                  <div
                    className={styles.divGuideImg}
                    style={{
                      backgroundImage: `url(/imgs/${data.idAtividade.guia.foto})`,
                    }}
                  ></div>
                )}
                {!data.idAtividade.guia.foto && (
                  <div
                    className={styles.divGuideImg}
                    style={{ backgroundImage: `url(${noUserImageBase64})` }}
                  ></div>
                )}

                <h4>Guia turístico</h4>
                <p className="mb-2">{data.idAtividade.guia.nome}</p>
                <div>
                  <Link
                    to={`/perfil/${data.idAtividade.guia.id}`}
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
                  <h3>Sobre mim</h3>
                  <p className="mb-0">
                    {data.idAtividade.guia.bio
                      ? data.idAtividade.guia.bio
                      : 'Texto não inserido'}
                  </p>
                </div>
                {/* <div className="mb-4">
                  <h3>Avaliações em minhas aventuras</h3>
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
              } flex-column justify-content-center align-items-center w-100 px-4`}
            >
              <div className="d-flex justify-content-start align-items-center w-100 text-start">
                <div>
                  <div className="mb-3">
                    <h3>Localização</h3>
                    <p>
                      {`${data.idAtividade.cidade.nome}, ${data.idAtividade.cidade.uf} - ${data.idAtividade.cidade.pais}`}
                    </p>
                  </div>
                  <div className="mb-3">
                    <h3>Mapa</h3>
                    <p>
                      <a
                        href={`https://www.google.com/maps/place/${`${data.idAtividade.cidade.nome}, ${data.idAtividade.cidade.uf} - ${data.idAtividade.cidade.pais}`}`}
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
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalShowMore;

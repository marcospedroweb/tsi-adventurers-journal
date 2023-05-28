import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './ModalShowMore.module.css';
import { BsChevronRight } from 'react-icons/bs';
import LabelCard from './LabelCard';
import CardPrice from './CardPrice';

const ModalShowMore = ({ data }) => {
  const [show, setShow] = React.useState(false);
  const [section, setSection] = React.useState('informações');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              } flex-column justify-content-start align-items-start text-center text-sm-start`}
            >
              <div className="mb-4">
                <h3>Sobre a aventura</h3>
                <p className="mb-0">
                  Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di
                  mim que vai caçá sua turmis!Suco de cevadiss deixa as pessoas
                  mais interessantis.Cevadis im ampola pa arma uma
                  pindureta.Praesent malesuada urna nisi, quis volutpat erat
                  hendrerit non. Nam vulputate dapibus.
                </p>
              </div>
              <div className="mb-4">
                <h3>Passageiros</h3>
                <LabelCard text={'3 pessoas'} />
              </div>
              <div className="mb-4 mx-auto mx-sm-0">
                <h3>Periodo</h3>
                <div className="d-flex justify-content-center align-items-center">
                  <LabelCard
                    title="Data de ida"
                    text={'20/20/2020 - 09:30'}
                    bsClass={'me-3 me-sm-0'}
                  />
                  <div
                    className={`${styles.separator} d-none d-sm-block`}
                  ></div>
                  <LabelCard
                    title="Data de volta"
                    text={'21/20/2020 - 14:30'}
                  />
                </div>
              </div>
              <div className="mb-4">
                <h3>Modalidades da aventura</h3>
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                  <LabelCard
                    text="Paraquedismo"
                    bsClass={'mt-1 me-1 me-sm-0'}
                  />
                  <LabelCard text="Bungue Jump" bsClass={'mt-1 me-1 me-sm-0'} />
                  <LabelCard text="Surf" bsClass={'mt-1 me-1 me-sm-0'} />
                  <LabelCard text="Rafting" bsClass={'mt-1 me-1 me-sm-0'} />
                  <LabelCard text="SnowBoard" bsClass={'mt-1 me-1 me-sm-0'} />
                  <LabelCard text="Skating" bsClass={'mt-1 me-1 me-sm-0'} />
                </div>
              </div>
              <div>
                <h3>Preço</h3>
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                  <CardPrice
                    price={'350'}
                    per={'por pessoa'}
                    texts={[
                      { text: '3 adultos:', price: '1050' },
                      { text: 'Taxa de serviço:', price: '275' },
                      { text: 'Taxa de equipamentos:', price: '120' },
                    ]}
                    total={'1445'}
                    totalDescount={'1300,5'}
                    method={'No boleto ou Pix'}
                    bsClass={'mb-3 mb-sm-0 me-0 me-sm-3'}
                  />
                  <CardPrice
                    price={'350'}
                    per={'por pessoa'}
                    texts={[
                      { text: '3 adultos:', price: '1050' },
                      { text: 'Taxa de serviço:', price: '275' },
                      { text: 'Taxa de equipamentos:', price: '120' },
                    ]}
                    total={'1445'}
                    totalDescount={'1445'}
                    method={'No cartão de credito'}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${styles.section} ${
                section === 'guia turistico' ? 'd-flex' : 'd-none'
              } flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center align-items-lg-start text-center text-lg-start`}
            >
              <div className="mb-4 text-center me-lg-5">
                <div
                  className={styles.divGuideImg}
                  style={{ backgroundImage: `url(/imgs/${'aboutimg2.png'})` }}
                ></div>
                <h3>Guia turístico</h3>
                <p>José ramos</p>
                <div></div>
              </div>
              <div>
                <div className="mb-4">
                  <h3>Sobre mim</h3>
                  <p className="mb-0">
                    Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di
                    mim que vai caçá sua turmis!Suco de cevadiss deixa as
                    pessoas mais interessantis.Cevadis im ampola pa arma uma
                    pindureta.Praesent malesuada urna nisi, quis volutpat erat
                    hendrerit non. Nam vulputate dapibus.
                  </p>
                </div>
                <div className="mb-4">
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
                </div>
              </div>
            </div>
            <div
              className={`${styles.section} ${
                section === 'localização' ? 'd-flex' : 'd-none'
              } flex-column justify-content-center align-items-center w-100`}
            >
              <div className="row justify-content-center justify-content-lg-between align-items-start text-center text-lg-start">
                <div className="col-12 col-lg-8">
                  <div className="w-100">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.160208892237!2d-46.70170893501999!3d-23.670228034628934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5036539648d5%3A0x78501a72680ea23a!2sCentro%20Universit%C3%A1rio%20Senac%20-%20Santo%20Amaro!5e0!3m2!1spt-BR!2sbr!4v1685295644547!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="225"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div>
                    <div className="mb-3">
                      <h3>Localização</h3>
                      <p>Rua lá no rio, 250 - Rio de Janeiro - 00000-000</p>
                    </div>
                    <div className="mb-3">
                      <h3>Estado</h3>
                      <p>Rua lá no rio,</p>
                    </div>
                    <div className="mb-3">
                      <h3>Pais</h3>
                      <p>Rua lá no rio</p>
                    </div>
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

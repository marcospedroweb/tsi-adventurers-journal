import React from 'react';
import styles from './AdventureCard.module.css';
import LabelCard from './LabelCard';
import AdventurePrice from './AdventurePrice';
import { Accordion } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import CardPrice from './CardPrice';

const AdventureCard = ({ data, best, hotel }) => {
  const [showMore, setShowMore] = React.useState(false);
  const [section, setSection] = React.useState('informações');

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
              <h3>Aventura nas alturas</h3>
              <p>Rio de Janeiro</p>
              <p>Av. Em algum lugar - Rio</p>
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
                } flex-column justify-content-start align-items-start text-center text-sm-start`}
              >
                <div className="mb-4">
                  <h4>Sobre a hospedagem</h4>
                  <p className="mb-0 text-center text-lg-start">
                    Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di
                    mim que vai caçá sua turmis!Suco de cevadiss deixa as
                    pessoas mais interessantis.Cevadis im ampola pa arma uma
                    pindureta.Praesent malesuada urna nisi, quis volutpat erat
                    hendrerit non. Nam vulputate dapibus.
                  </p>
                </div>
                <div className="mb-4">
                  <h4>Principais comodidades do hotel</h4>
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                    <LabelCard
                      text="Wi-fi gratutio"
                      bsClass={'mt-1 me-1 me-sm-0'}
                    />
                    <LabelCard
                      text="Wi-fi no lobby"
                      bsClass={'mt-1 me-1 me-sm-0'}
                    />
                    <LabelCard text="Piscina" bsClass={'mt-1 me-1 me-sm-0'} />
                    <LabelCard
                      text="Area de lazer"
                      bsClass={'mt-1 me-1 me-sm-0'}
                    />
                    <LabelCard text="Sauna" bsClass={'mt-1 me-1 me-sm-0'} />
                  </div>
                </div>
                <div>
                  <h4>Preço</h4>
                  <div className="row justify-content-between align-items-center ">
                    <CardPrice
                      price={'350'}
                      per={'por pessoa'}
                      texts={[
                        { text: '3 adultos:', price: '1050' },
                        { text: 'Taxa de serviço:', price: '275' },
                      ]}
                      total={'1445'}
                      totalDescount={'1300,5'}
                      method={'No boleto ou Pix'}
                      bsClass={'col-12 col-md-6 col-lg-4'}
                      size={'small'}
                      seal={'plus'}
                    />
                    <CardPrice
                      price={'350'}
                      per={'por pessoa'}
                      texts={[
                        { text: '3 adultos:', price: '1050' },
                        { text: 'Taxa de serviço:', price: '275' },
                      ]}
                      total={'1445'}
                      totalDescount={'1300,5'}
                      method={'No boleto ou Pix'}
                      bsClass={'col-12 col-md-6 col-lg-4 mt-3 mt-md-0'}
                      size={'small'}
                      seal={'adventurer'}
                    />
                    <CardPrice
                      price={'350'}
                      per={'por pessoa'}
                      texts={[
                        { text: '3 adultos:', price: '1050' },
                        { text: 'Taxa de serviço:', price: '275' },
                      ]}
                      total={'1445'}
                      totalDescount={'1300,5'}
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
                        <h4>Localização</h4>
                        <p>Rua lá no rio, 250 - Rio de Janeiro - 00000-000</p>
                      </div>
                      <div className="mb-3">
                        <h4>Estado</h4>
                        <p>Rua lá no rio,</p>
                      </div>
                      <div className="mb-3">
                        <h4>Pais</h4>
                        <p>Rua lá no rio</p>
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
          ></div>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-3 px-3 w-100">
            <div className="d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-3 px-3">
              <h3>Aventura nas alturas</h3>
              <p>Rio de Janeiro</p>
              <LabelCard
                text={'Idade minima: 15 anos'}
                bsClass="mb-3 mb-lg-2 "
                stylesCss={{ color: '#87FAD1', fontSize: '.85rem' }}
              />
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-2">
                <LabelCard text={'20/20/2020'} bsClass={'me-2'} />
                <div
                  className={`${styles.separator} d-none d-lg-inline-block`}
                ></div>
                <LabelCard text={'21/20/2020'} />
              </div>
              <div className="d-none d-lg-flex justify-content-between align-items-center flex-wrap mt-3 mt-lg-2">
                <LabelCard text={'Paraquedismo'} />
                <LabelCard text={'Surf'} bsClass={'ms-1'} />
                <LabelCard text={'Bungue Jump'} bsClass={'ms-1'} />
                <LabelCard text={'Bungue Jump'} bsClass={'ms-1'} />
                <LabelCard text={'+3'} bsClass={'ms-1'} />
              </div>
              <div className="d-flex d-lg-none justify-content-between align-items-center flex-wrap mt-3 mt-lg-2">
                <LabelCard text={'Paraquedismo'} />
                <LabelCard text={'Bungue Jump'} bsClass={'ms-1'} />
                <LabelCard text={'+5'} bsClass={'ms-1'} />
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
                } flex-column justify-content-start align-items-start text-center text-sm-start`}
              >
                <div className="mb-4">
                  <h4>Sobre a aventura</h4>
                  <p className="mb-0">
                    Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di
                    mim que vai caçá sua turmis!Suco de cevadiss deixa as
                    pessoas mais interessantis.Cevadis im ampola pa arma uma
                    pindureta.Praesent malesuada urna nisi, quis volutpat erat
                    hendrerit non. Nam vulputate dapibus.
                  </p>
                </div>
                <div className="mb-4 mx-auto mx-sm-0">
                  <h4>Periodo</h4>
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
                  <h4>Modalidades da aventura</h4>
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center flex-wrap">
                    <LabelCard
                      text="Paraquedismo"
                      bsClass={'mt-1 me-1 me-sm-0'}
                    />
                    <LabelCard
                      text="Bungue Jump"
                      bsClass={'mt-1 me-1 me-sm-0'}
                    />
                    <LabelCard text="Surf" bsClass={'mt-1 me-1 me-sm-0'} />
                    <LabelCard text="Rafting" bsClass={'mt-1 me-1 me-sm-0'} />
                    <LabelCard text="SnowBoard" bsClass={'mt-1 me-1 me-sm-0'} />
                    <LabelCard text="Skating" bsClass={'mt-1 me-1 me-sm-0'} />
                  </div>
                </div>
                <div>
                  <h4>Preço</h4>
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
                  <h4>Guia turístico</h4>
                  <p>José ramos</p>
                  <div></div>
                </div>
                <div>
                  <div className="mb-4">
                    <h4>Sobre mim</h4>
                    <p className="mb-0">
                      Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta
                      di mim que vai caçá sua turmis!Suco de cevadiss deixa as
                      pessoas mais interessantis.Cevadis im ampola pa arma uma
                      pindureta.Praesent malesuada urna nisi, quis volutpat erat
                      hendrerit non. Nam vulputate dapibus.
                    </p>
                  </div>
                  <div className="mb-4">
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
                        <h4>Localização</h4>
                        <p>Rua lá no rio, 250 - Rio de Janeiro - 00000-000</p>
                      </div>
                      <div className="mb-3">
                        <h4>Estado</h4>
                        <p>Rua lá no rio,</p>
                      </div>
                      <div className="mb-3">
                        <h4>Pais</h4>
                        <p>Rua lá no rio</p>
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
};

export default AdventureCard;

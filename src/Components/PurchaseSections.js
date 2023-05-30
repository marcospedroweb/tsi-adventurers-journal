import React from 'react';
import styles from './PurchaseSections.module.css';
import { Accordion, Form } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import {
  BsChevronDown,
  BsChevronUp,
  BsFillCreditCardFill,
  BsQrCodeScan,
  BsUpc,
} from 'react-icons/bs';
import GetSimpleInputObj from '../Helpers/GetSimpleInputObj';
import { useNavigate } from 'react-router-dom';

const PurchaseSections = () => {
  const navigate = useNavigate();
  const [sectionCompleted, setSectionCompleted] = React.useState({
    identificacao: false,
    pagamento: false,
    resumo: false,
  });
  const [loading, setLoading] = React.useState(false);
  const [formPayment, setFormPayment] = React.useState(false);
  const [section, setSection] = React.useState('identificação');
  const numberCredit = GetSimpleInputObj();
  const [showMore, setShowMore] = React.useState(false);
  const checkPrivacy = React.useRef();

  async function handleSubmitId(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSectionCompleted({
        identificacao: true,
        pagamento: false,
        resumo: false,
      });
      setSection('pagamento');
    }, 3000);
  }
  async function handleSubmitPayment(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSectionCompleted({
        identificacao: true,
        pagamento: true,
        resumo: false,
      });
      setSection('resumo');
    }, 3000);
  }
  async function handleSubmitOrder(event) {
    event.preventDefault();
    navigate('/pedido-finalizado');
  }

  return (
    <div className={styles.section}>
      <div className="row justify-content-between align-items-start">
        <form
          onSubmit={handleSubmitId}
          className={`${styles.sectionPurchase} ${
            section === 'identificação' ? styles.active : ''
          } col-12 col-lg-4`}
        >
          <div className={styles.header}>
            <h2>1. Identificação</h2>
          </div>
          <div className={`${styles.body} p-4`}>
            <h3>Dados pessoais</h3>
            <div>
              <h4>Nome completo</h4>
              <p>Fulano de tal nome</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>Email@email.com</p>
            </div>
            <h3 className="mt-4">Política e privacidade</h3>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  id="checkPrivacy"
                  required
                />
                <label className="form-check-label" htmlFor="checkPrivacy">
                  Eu li e aceito os{' '}
                  <a href="#">Termos e Política Privacidade</a> do site.
                </label>
              </div>
              <small>
                Está compra será decretada nesta compra e será formalizada neste
                contrato, estabelecendo os termos acordados entre as partes.
              </small>
            </div>
            <div
              className={
                section === 'identificação' ? 'text-center mt-4' : 'd-none'
              }
            >
              <ButtonCustom type="submit" loading={loading}>
                {loading ? 'Carregando...' : 'Ir para pagamento'}
              </ButtonCustom>
            </div>
          </div>
        </form>
        <form
          onSubmit={handleSubmitPayment}
          className={`${styles.sectionPurchase} ${
            section === 'pagamento' ? styles.active : ''
          } col-12 col-lg-4`}
        >
          <div className={styles.header}>
            <h2>2. Pagamento</h2>
          </div>
          <div className={`${styles.body} p-4`}>
            <h3>Escolha a forma de pagamento</h3>
            <div className={formPayment ? 'd-none' : ''}>
              <div
                className={`${styles.formPayment} d-flex justify-content-start align-items-center`}
                onClick={() => {
                  setFormPayment('cartao');
                }}
              >
                <div className={styles.divIcon}>
                  <BsFillCreditCardFill />
                </div>
                <div className={styles.divText}>
                  <h4>Cartão de credito</h4>
                </div>
              </div>
              <div
                className={`${styles.formPayment} d-flex justify-content-start align-items-center`}
                onClick={() => {
                  setFormPayment('pix');
                }}
              >
                <div className={styles.divIcon}>
                  <img src="/imgs/pix_icone.png" alt="" />
                </div>
                <div className={styles.divText}>
                  <h4>Pix a vista</h4>
                </div>
              </div>
              <div
                className={`${styles.formPayment} d-flex justify-content-start align-items-center`}
                onClick={() => {
                  setFormPayment('boleto');
                }}
              >
                <div className={styles.divIcon}>
                  <BsUpc />
                </div>
                <div className={styles.divText}>
                  <h4>Boleto bancário á vista</h4>
                </div>
              </div>
            </div>
            <div
              className={`${formPayment === 'cartao' ? '' : 'd-none'} ${
                styles.divMainFormPayment
              }`}
            >
              <div className="text-center">
                <span
                  className="mb-4"
                  onClick={() => {
                    setFormPayment(false);
                  }}
                >
                  Mudar forma de pagamento
                </span>
              </div>
              <div className={styles.divFormPayment}>
                <h4 className="text-center mb-4 fw-bold d-flex justify-content-center">
                  <BsFillCreditCardFill className="me-2" /> Cartão de credito
                </h4>
                <Form.Group className="mb-3" controlId="numberCredit">
                  <Form.Label>
                    Número do cartão de credito{' '}
                    <span className="fw-bold text-danger border-0">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Número impresso no cartão"
                    onChange={(event) => {
                      const numberCredit = event.target.value.replace(
                        /[^0-9\s]/g,
                        '',
                      );
                      event.target.value = numberCredit;
                    }}
                    ref={numberCredit.ref}
                    minLength={11}
                    maxLength={19}
                    pattern={/^(?:\d{16}|\d{4} ?\d{4} ?\d{4} ?\d{4})$/}
                    name="cartao_numero"
                    required={formPayment === 'cartao'}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="numberCredit">
                  <Form.Label>
                    Nome impresso no cartão{' '}
                    <span className="fw-bold text-danger border-0">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome impresso no cartão"
                    onChange={(event) => {
                      const nameCredit = event.target.value.replace(
                        /[^A-Za-z\s]/g,
                        '',
                      );
                      event.target.value = nameCredit;
                    }}
                    name="cartao_nome"
                    required={formPayment === 'cartao'}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-end gap-2">
                  <Form.Group className="mb-3" controlId="numberCredit">
                    <Form.Label>
                      Validade{' '}
                      <span className="fw-bold text-danger border-0">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Mês"
                      min="1"
                      max="12"
                      minLength={1}
                      maxLength={2}
                      name="cartao_mes"
                      required={formPayment === 'cartao'}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="numberCredit">
                    <Form.Label className="visually-hidden">
                      Ano de validade
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ano"
                      min={new Date().getFullYear()}
                      minLength={4}
                      maxLength={4}
                      name="cartao_ano"
                      required={formPayment === 'cartao'}
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="numberCredit">
                  <Form.Label>
                    Código de segurança (CVV ou CVC)
                    <span className="fw-bold text-danger border-0">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Código de segurança (CVV ou CVC)"
                    onChange={(event) => {
                      const numberCredit = event.target.value.replace(
                        /[^0-9\s]/g,
                        '',
                      );
                      event.target.value = numberCredit;
                    }}
                    ref={numberCredit.ref}
                    minLength={11}
                    maxLength={19}
                    name="cartao_codigo"
                    required={formPayment === 'cartao'}
                  />
                </Form.Group>
                <Form.Label>
                  Parcelas
                  <span className="fw-bold text-danger border-0">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="cartao_parcela"
                  required={formPayment === 'cartao'}
                >
                  <option value="" selected>
                    Escolha uma parcela
                  </option>
                  <option value="1">
                    1x <span className="fw-bold">250,99</span> s/juros
                  </option>
                  <option value="1">
                    2x <span className="fw-bold">250,99</span> s/juros
                  </option>
                  <option value="1">
                    3x <span className="fw-bold">250,99</span> s/juros
                  </option>
                  <option value="1">
                    4x <span className="fw-bold">250,99</span> s/juros
                  </option>
                </Form.Select>
              </div>
            </div>
            <div
              className={`${formPayment === 'pix' ? '' : 'd-none'} ${
                styles.divMainFormPayment
              }`}
            >
              <div className="text-center">
                <span
                  className="mb-4"
                  onClick={() => {
                    setFormPayment(false);
                  }}
                >
                  Mudar forma de pagamento
                </span>
              </div>
              <div className={styles.divFormPayment}>
                <h4 className="text-center mb-4 fw-bold d-flex justify-content-center">
                  <img
                    src="/imgs/pix_icone.png"
                    className="me-2"
                    style={{ width: '16px' }}
                    alt=""
                  />
                  Pix
                </h4>
                <p className="fs-5 mb-4">
                  Valor do pedido: <p className="fw-bold d-inline">R$ 210,99</p>
                </p>
                <p
                  className="fw-semibold"
                  style={{ color: '#4AAE51', fontSize: '.9rem' }}
                >
                  Desconto de{' '}
                  <p className="fw-bold d-inline">10% para pagamento</p> á vista{' '}
                  <p className="fw-bold d-inline">já aplicado</p>
                </p>
                <ul className="ps-3" style={{ fontSize: '.7rem' }}>
                  <li className="fw-semibold">
                    Após a finalização da compra, um QR code será exibido e você
                    poderá pagar com o Pix do seu banco;
                  </li>
                  <li>
                    Não faça depósito ou transferência entre contas a não ser
                    via Pix;
                  </li>
                  <li>
                    QRCode válido por 30 minutos após a finalização de compra.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${formPayment === 'boleto' ? '' : 'd-none'} ${
                styles.divMainFormPayment
              }`}
            >
              <div className="text-center">
                <span
                  className="mb-4"
                  onClick={() => {
                    setFormPayment(false);
                  }}
                >
                  Mudar forma de pagamento
                </span>
              </div>
              <div className={styles.divFormPayment}>
                <h4 className="text-center mb-4 fw-bold d-flex justify-content-center">
                  <BsUpc className="me-2" /> Boleto bancário à vista
                </h4>
                <p className="fs-5 mb-4">
                  Valor do pedido: <p className="fw-bold d-inline">R$ 210,99</p>
                </p>
                <p
                  className="fw-semibold"
                  style={{ color: '#4AAE51', fontSize: '.9rem' }}
                >
                  Desconto de{' '}
                  <p className="fw-bold d-inline">10% para pagamento</p> á vista{' '}
                  <p className="fw-bold d-inline">já aplicado</p>
                </p>
                <ul className="ps-3" style={{ fontSize: '.7rem' }}>
                  <li className="fw-semibold">
                    Após a finalização da compra, um Boleto será exibido e você
                    poderá pagar com o seu banco;
                  </li>
                  <li>O prazo de validade do boleto é de 3 dia(s) úteis;</li>
                  <li>
                    Se o boleto não for pago até a data de vencimento (Nos casos
                    de vencimento em final de semana ou feriado, no próximo dia
                    útil), seu pedido será cancelado automaticamente;
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={
                section === 'pagamento' ? 'text-center mt-4' : 'd-none'
              }
            >
              <ButtonCustom type="submit" loading={loading}>
                {loading ? 'Carregando...' : 'Ir para resumo do pedido'}
              </ButtonCustom>
            </div>
          </div>
        </form>
        <form
          onSubmit={handleSubmitOrder}
          className={`${styles.sectionPurchase} ${
            section === 'resumo' ? styles.active : ''
          } col-12 col-lg-4`}
        >
          <div className={styles.header}>
            <h2>3. Resumo do pedido</h2>
          </div>
          <div className={`${styles.body} p-4`}>
            <div
              className={`${styles.product} d-flex justify-content-between align-items-center`}
            >
              <div className={styles.productImg}></div>
              <div>
                <h3>Aventura nas alturas</h3>
                <p>Aventureiros: 3 pessoas</p>
                <span>R$ 2.590,99</span>
              </div>
            </div>
            <div
              className={`${styles.product} d-flex justify-content-between align-items-center`}
            >
              <div className={styles.productImg}></div>
              <div>
                <h3>Aventura nas alturas</h3>
                <p>Aventureiros: 3 pessoas</p>
                <span>R$ 2.590,99</span>
              </div>
            </div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center w-100 mt-4`}
            >
              <div
                className={`${styles.divReceipt} p-3 d-none d-lg-flex flex-column justify-content-center align-items-center text-start rounded w-100`}
              >
                <div
                  className={`${styles.divReceiptSection} d-flex justify-content-between align-items-center w-100`}
                >
                  <span>Subtotal</span>
                  {section === 'resumo' ? (
                    <span>R$ 250</span>
                  ) : (
                    <span>Confirmando...</span>
                  )}
                </div>
                <div
                  className={`${styles.divReceiptSection} d-flex flex-column justify-content-center align-items-center w-100`}
                >
                  <div className="d-flex justify-content-between align-items-center w-100 pb-2">
                    <span
                      className={styles.divDescount}
                      onClick={() => {
                        if (section === 'resumo') setShowMore(!showMore);
                      }}
                      style={{
                        cursor:
                          section === 'resumo' ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Descontos {showMore ? <BsChevronUp /> : <BsChevronDown />}
                    </span>
                    {section === 'resumo' ? (
                      <span className={styles.discountSpan}>- R$ 250</span>
                    ) : (
                      <span>Confirmando...</span>
                    )}
                  </div>
                  <Accordion className="w-100" activeKey={showMore ? '0' : ''}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="visually-hidden">
                        Descontos
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <div
                            className={`${styles.discountSpan} d-flex justify-content-between align-items-center w-100 pb-2`}
                          >
                            <span>Descontos</span>
                            <span>- R$ 250</span>
                          </div>
                          <div
                            className={`${styles.discountSpan} d-flex justify-content-between align-items-center w-100 pb-2`}
                          >
                            <span>Descontos</span>
                            <span>- R$ 250</span>
                          </div>
                          <div
                            className={`${styles.discountSpan} d-flex justify-content-between align-items-center w-100 pb-2`}
                          >
                            <span>Descontos</span>
                            <span>- R$ 250</span>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div
                  className={`d-flex justify-content-between align-items-center w-100 pb-2 `}
                >
                  <span className={section === 'resumo' ? 'fw-bold fs-5' : ''}>
                    Total:
                  </span>
                  {section === 'resumo' ? (
                    <span
                      className={section === 'resumo' ? 'fw-bold fs-5' : ''}
                    >
                      R$ 2.500,99
                    </span>
                  ) : (
                    <span>Confirmando...</span>
                  )}
                </div>
              </div>
              <div
                className={`d-flex flex-column justify-content-center align-items-center w-100 d-none`}
              >
                <div
                  className={`d-flex justify-content-end align-items-end w-100`}
                >
                  <span
                    className="fw-semibold"
                    style={{
                      fontSize: '1rem',
                      textDecoration: 'line-through',
                      color: '#9B9B9B',
                    }}
                  >
                    R$ 2.000,99
                  </span>
                  <span
                    className={`${styles.discountSpan} ms-2 fw-bold`}
                    style={{ fontSize: '1.15rem' }}
                  >
                    R$ 1.850,99
                  </span>
                </div>
                <div className={`${styles.discountSpan} text-end mb-4`}>
                  <span style={{ fontSize: '.9rem' }}>
                    <span className="fw-bold">10% de desconto</span> ao pagar no
                    PIX ou boleto
                  </span>
                </div>
              </div>
            </div>

            <div
              className={section === 'resumo' ? 'text-center mt-4' : 'd-none'}
            >
              <ButtonCustom type="submit" loading={loading}>
                {loading ? 'Carregando...' : 'Finalizar pedido'}
              </ButtonCustom>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseSections;

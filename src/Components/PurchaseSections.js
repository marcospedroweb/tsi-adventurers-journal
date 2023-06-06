import React from 'react';
import styles from './PurchaseSections.module.css';
import { Accordion, Button, Form, Modal } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import {
  BsChevronDown,
  BsChevronUp,
  BsFillCreditCardFill,
  BsQrCodeScan,
  BsUpc,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { apiRoute, completeOrderRoute, optionsFetch } from '../DB/data';
import FormatPrice from '../Helpers/FormatPrice';
import useFetch from '../Hooks/useFetch';
import { GlobalContext } from '../Context/GlobalStorage';

const PurchaseSections = ({ cart }) => {
  const navigate = useNavigate();
  const { itensCart, session, setCompletedOrder } =
    React.useContext(GlobalContext);
  const date = new Date();
  const formattedDate = `${('0' + date.getDate()).slice(-2)}/${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()}`;
  const [sectionCompleted, setSectionCompleted] = React.useState({
    identificacao: false,
    pagamento: false,
    resumo: false,
  });
  const [loading, setLoading] = React.useState(false);
  const [formPayment, setFormPayment] = React.useState(false);
  const [formPaymentSelected, setFormPaymentSelected] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [discount, setDiscount] = React.useState([]);
  const [selectedInstallment, setSelectedInstallment] = React.useState(null);
  const [errorCheck, setErrorCheck] = React.useState('');
  const [section, setSection] = React.useState('identificação');
  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const nameRef = React.useRef();
  const monthRef = React.useRef();
  const yearRef = React.useRef();
  const codeRef = React.useRef();
  const selectRef = React.useRef();
  const [showMore, setShowMore] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const completeOrder = useFetch();

  const checkPrivacy = React.useRef();

  const formatCreditCardNumber = (event) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/[^0-9\s]/g, '')
      .replace(/\s/g, '') // Remove existing spaces
      .replace(/(\d{4})/g, '$1 '); // Add space after every four characters

    setCreditCardNumber(formattedValue.trim());
  };

  const calculateInstallment = (installments, price) => {
    let formatedPrice;
    if (price) {
      formatedPrice = parseFloat(
        price.replace('R$ ', '').replace('.', '').replace(',', '.'),
      );
    } else {
      return '';
    }
    const interestRate = 0.05;

    const totalAmount =
      formatedPrice * (1 + (installments > 6 ? interestRate : 0));

    const installmentAmount = totalAmount / installments;

    return FormatPrice(installmentAmount);
  };

  async function handleSubmitId() {
    if (checkPrivacy.current.checked) {
      setErrorCheck('');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSectionCompleted({
          identificacao: true,
          pagamento: false,
          resumo: false,
        });
        setSection('pagamento');
      }, 1500);
    } else {
      setErrorCheck('Para prosseguir é necessario aceitar os termos');
    }
  }
  async function handleSubmitPayment(event) {
    event.preventDefault();
    if (formPayment) {
      setErrorCheck('');
      setLoading(true);
      setTimeout(() => {
        setFormPayment(false);
        setCreditCardNumber('');
        nameRef.current.value = '';
        monthRef.current.value = '';
        yearRef.current.value = '';
        codeRef.current.value = '';
        selectRef.current.selectedIndex = 0;
        setLoading(false);
        setSectionCompleted({
          identificacao: true,
          pagamento: true,
          resumo: false,
        });
        if (formPaymentSelected === 'pix' || formPaymentSelected === 'boleto') {
          setDiscount([
            ...discount,
            {
              text: 'Pagamento á vista',
              price: FormatPrice(
                parseFloat(
                  total.replace('R$ ', '').replace('.', '').replace(',', '.'),
                ) * 0.1,
              ),
            },
          ]);
        }
        setSection('resumo');
      }, 1500);
    } else {
      setErrorCheck('Selecione uma forma de pagamento para prosseguir');
    }
  }
  async function handleSubmitOrder(event) {
    event.preventDefault();
    const FormaPag = formPaymentSelected;
    let totalPrice = '';
    if (formPaymentSelected === 'cartao' && selectedInstallment) {
      totalPrice =
        parseFloat(
          selectedInstallment
            .replace(' c/ Juros', '')
            .replace(' s/ Juros', '')
            .replace('R$ ', '')
            .replace('.', '')
            .replace(',', '.')
            .split('x - ')[1],
        ) *
        parseInt(
          selectedInstallment
            .replace(' c/ Juros', '')
            .replace(' s/ Juros', '')
            .replace('R$ ', '')
            .replace('.', '')
            .replace(',', '.')
            .split('x - ')[0],
        );
    } else {
      totalPrice =
        parseFloat(
          total.replace('R$ ', '').replace('.', '').replace(',', '.'),
        ) -
        parseFloat(
          total.replace('R$ ', '').replace('.', '').replace(',', '.'),
        ) *
          0.1;
    }

    const { json } = await completeOrder.request(
      `${apiRoute}${completeOrderRoute}`,
      optionsFetch({
        method: 'POST',
        token: session.user.token,
        body: {
          FormaPag,
          totalPrice,
          cart: itensCart.join(','),
        },
      }),
    );

    if (json) {
      setCompletedOrder(json['itens do pedido']);
      navigate('/pedido-finalizado');
    }
  }

  React.useEffect(() => {
    let totalPrice = 0;
    if (cart.length)
      cart.forEach(({ qtdPessoa, idAtividade }) => {
        totalPrice += Number.parseFloat(idAtividade.preco) * qtdPessoa;
      });

    setTotal(FormatPrice(totalPrice));
  }, [cart]);

  return (
    <div className={styles.section}>
      <div className="row justify-content-between align-items-start">
        <div
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
                  onChange={() => {
                    setErrorCheck('');
                  }}
                  ref={checkPrivacy}
                />
                <label className="form-check-label" htmlFor="checkPrivacy">
                  Eu li e aceito os{' '}
                  <a href="#" onClick={handleShow}>
                    Termos e Política Privacidade
                  </a>{' '}
                  do site.
                </label>
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  className={styles.modalTerms}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h2>Termos e Política de Privacidade</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h3>Introdução</h3>
                    <p>
                      Este documento estabelece os Termos e Política de
                      Privacidade para a plataforma online desenvolvida para
                      auxiliar viajantes aventureiros a encontrar guias
                      turísticos especializados em suas aventuras. A plataforma
                      oferece uma solução abrangente para a conexão entre
                      viajantes e guias turísticos qualificados, utilizando
                      tecnologias modernas e métodos ágeis de desenvolvimento de
                      software.
                    </p>
                    <p>
                      Ao utilizar a plataforma, os usuários concordam em cumprir
                      estes termos e fornecer informações pessoais, as quais
                      serão tratadas de acordo com a política de privacidade
                      descrita neste documento. Recomendamos que você leia
                      atentamente todos os termos e políticas antes de usar a
                      plataforma.
                    </p>
                    <h3>1. Coleta e Uso de Informações</h3>
                    <h4>1.1 Informações Pessoais</h4>
                    <p>
                      Durante o uso da plataforma, podemos solicitar e coletar
                      informações pessoais dos usuários, tais como nome,
                      endereço de e-mail, número de telefone e outras
                      informações relevantes para fornecer os serviços
                      oferecidos pela plataforma. Essas informações serão
                      utilizadas para melhorar a experiência do usuário,
                      fornecer serviços personalizados, processar pagamentos,
                      enviar comunicações relevantes e garantir a segurança do
                      sistema.
                    </p>
                    <h4>1.2 Informações de Pagamento</h4>
                    <p>
                      Para processar pagamentos e transações na plataforma,
                      poderemos coletar informações de pagamento, incluindo
                      detalhes de cartão de crédito, endereço de cobrança e
                      outras informações necessárias para realizar transações
                      seguras. Essas informações serão processadas por meio de
                      provedores de serviços de pagamento confiáveis e serão
                      protegidas de acordo com os mais altos padrões de
                      segurança.
                    </p>
                    <h4>1.3 Informações de Localização</h4>
                    <p>
                      A plataforma pode coletar informações de localização dos
                      usuários para fornecer serviços baseados em localização,
                      como busca por guias turísticos próximos ou recomendações
                      personalizadas de atividades turísticas. As informações de
                      localização serão coletadas apenas com o consentimento
                      expresso do usuário e poderão ser desativadas nas
                      configurações do dispositivo.
                    </p>
                    <h4>1.4 Cookies e Tecnologias de Rastreamento</h4>
                    <p>
                      A plataforma utiliza cookies e outras tecnologias de
                      rastreamento para coletar informações sobre o uso e
                      desempenho da plataforma. Essas informações são utilizadas
                      para melhorar a funcionalidade da plataforma, personalizar
                      a experiência do usuário e fornecer análises e métricas
                      relevantes. Os usuários têm a opção de aceitar ou recusar
                      o uso de cookies nas configurações do navegador.
                    </p>

                    <h3>2. Compartilhamento de Informações</h3>
                    <h4>2.1 Compartilhamento com Guias Turísticos</h4>
                    <p>
                      Para conectar viajantes e guias turísticos, as informações
                      fornecidas pelos usuários, como nome, preferências de
                      viagem e avaliações, podem ser compartilhadas com os guias
                      turísticos registrados na plataforma. Essas informações
                      são compartilhadas estritamente para fins de prestação de
                      serviços e não serão divulgadas a terceiros não
                      autorizados.
                    </p>
                    <h4>2.2 Terceiros e Parceiros</h4>
                    <p>
                      Esses terceiros estão sujeitos a acordos de
                      confidencialidade e obrigados a proteger as informações
                      pessoais dos usuários de acordo com esta política de
                      privacidade. Eles não estão autorizados a usar ou divulgar
                      as informações pessoais dos usuários para qualquer
                      finalidade que não esteja diretamente relacionada à
                      prestação de serviços à plataforma.
                    </p>
                    <h4>2.3 Requisitos Legais</h4>
                    <p>
                      Em certas circunstâncias, podemos ser obrigados a divulgar
                      informações pessoais dos usuários em resposta a uma
                      solicitação legal, como uma ordem judicial, intimação ou
                      outra solicitação governamental. Faremos esforços
                      razoáveis para notificar os usuários sobre a divulgação, a
                      menos que isso seja proibido por lei ou represente um
                      risco à segurança ou integridade da plataforma.
                    </p>
                    <h3>3. Segurança das Informações</h3>
                    <p>
                      Levamos a segurança das informações pessoais dos usuários
                      a sério e implementamos medidas técnicas, administrativas
                      e físicas para proteger essas informações contra acesso
                      não autorizado, uso indevido, divulgação ou destruição. No
                      entanto, nenhum método de transmissão pela Internet ou
                      sistema de armazenamento eletrônico é totalmente seguro.
                      Portanto, não podemos garantir a segurança absoluta das
                      informações pessoais dos usuários.
                    </p>
                    <h3>4. Acesso e Controle das Informações</h3>
                    <p>
                      Os usuários têm o direito de acessar, corrigir, atualizar
                      e excluir suas informações pessoais armazenadas na
                      plataforma. Eles podem fazer isso por meio das
                      configurações da conta ou entrando em contato conosco
                      diretamente. Faremos esforços razoáveis para atender a
                      essas solicitações no prazo estabelecido por lei.
                    </p>
                    <h3>5. Retenção de Informações</h3>
                    <p>
                      Manteremos as informações pessoais dos usuários pelo tempo
                      necessário para cumprir os propósitos descritos nesta
                      política de privacidade, a menos que um período de
                      retenção mais longo seja exigido ou permitido por lei.
                      Após o término do período de retenção, as informações
                      pessoais dos usuários serão excluídas ou anonimizadas.
                    </p>
                    <h3>6. Alterações na Política de Privacidade</h3>
                    <p>
                      Podemos atualizar esta política de privacidade
                      periodicamente para refletir alterações na forma como
                      coletamos, usamos ou protegemos as informações pessoais
                      dos usuários. Recomendamos que os usuários revisem
                      regularmente esta política para se manterem informados
                      sobre nossas práticas de privacidade. O uso contínuo da
                      plataforma após as alterações na política de privacidade
                      será considerado como aceitação das modificações.
                    </p>
                    <h3>7. Contato</h3>
                    <p>
                      Se os usuários tiverem alguma dúvida, preocupação ou
                      solicitação relacionada a esta política de privacidade,
                      podem entrar em contato conosco através dos meios de
                      contato fornecidos na plataforma.
                    </p>
                    <span className="fw-bold" style={{ fontSize: '.9rem' }}>
                      Última atualização: {formattedDate}
                    </span>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Fechar
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        checkPrivacy.current.checked = true;
                        handleSubmitId();
                        handleClose();
                      }}
                    >
                      Aceitar Termos e Política Privacidade do site.
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <small>
                Está compra será decretada nesta compra e será formalizada neste
                contrato, estabelecendo os termos acordados entre as partes.
              </small>
            </div>
            <div
              className={
                section === 'identificação'
                  ? 'text-center mt-4 text-center'
                  : 'd-none'
              }
            >
              <ButtonCustom
                type="submit"
                loading={loading}
                onClick={handleSubmitId}
                bsClass={
                  'd-flex justify-content-center align-items-center mx-auto '
                }
              >
                {loading ? 'Carregando...' : 'Ir para pagamento'}
              </ButtonCustom>
              {errorCheck ? (
                <span className="d-block error-mensage mt-2">{errorCheck}</span>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
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
            <h3>
              {['cartao', 'pix', 'boleto'].includes(formPaymentSelected) &&
              section === 'resumo'
                ? 'Forma de pagamento escolhido'
                : 'Escolha a forma de pagamento'}
            </h3>
            <div
              className={formPayment || section === 'resumo' ? 'd-none' : ''}
            >
              <div
                className={`${styles.formPayment} d-flex justify-content-start align-items-center`}
                onClick={() => {
                  setFormPayment('cartao');
                  setFormPaymentSelected('cartao');
                  setErrorCheck('');
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
                  setFormPaymentSelected('pix');
                  setErrorCheck('');
                }}
              >
                <div className={styles.divIcon}>
                  <img src="/imgs/pix_icone.png" alt="" />
                </div>
                <div className={styles.divText}>
                  <h4>Pix á vista</h4>
                </div>
              </div>
              <div
                className={`${styles.formPayment} d-flex justify-content-start align-items-center`}
                onClick={() => {
                  setFormPayment('boleto');
                  setFormPaymentSelected('boleto');
                  setErrorCheck('');
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
                    setFormPaymentSelected(false);
                    setCreditCardNumber('');
                    if (nameRef.current) nameRef.current.value = '';
                    if (monthRef.current) monthRef.current.value = '';
                    if (yearRef.current) yearRef.current.value = '';
                    if (codeRef.current) codeRef.current.value = '';
                    if (selectRef.current) selectRef.current.selectedIndex = 0;
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
                    value={formPayment === 'cartao' ? creditCardNumber : ''}
                    placeholder="Número impresso no cartão"
                    onChange={formatCreditCardNumber}
                    minLength={11}
                    maxLength={19}
                    pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
                    name="cartao_numero"
                    required={formPayment === 'cartao'}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nameCredit">
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
                    ref={nameRef}
                    required={formPayment === 'cartao'}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-end gap-2">
                  <Form.Group className="mb-3" controlId="monthCredit">
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
                      onChange={({ target }) => {
                        if (Number.parseInt(target.value) > 12) {
                          target.value = 12;
                        }
                        if (
                          Number.parseInt(target.value) === 0 ||
                          !target.value
                        ) {
                          target.value = 1;
                        }
                      }}
                      name="cartao_mes"
                      ref={monthRef}
                      required={formPayment === 'cartao'}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="yearCredit">
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
                      onChange={({ target }) => {
                        if (target.value > 3000) {
                          target.value = 3000;
                        }
                        if (
                          Number.parseInt(target.value) === 0 ||
                          !target.value
                        ) {
                          target.value = new Date().getFullYear();
                        }
                      }}
                      ref={yearRef}
                      required={formPayment === 'cartao'}
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="codeCredit">
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
                      if (event.target.value.length > 3)
                        event.target.value = numberCredit.slice(0, 3);
                      else event.target.value = numberCredit;
                    }}
                    minLength={11}
                    maxLength={19}
                    name="cartao_codigo"
                    ref={codeRef}
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
                  onChange={({ target }) => {
                    setSelectedInstallment(target.value);
                  }}
                  ref={selectRef}
                  defaultValue=""
                >
                  <option value="">Escolha uma parcela</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (installment) => {
                      return (
                        <option key={installment}>
                          {installment}x -{' '}
                          {calculateInstallment(installment, total)}
                          {installment > 6 ? 'c/ Juros' : 's/ Juros'}
                        </option>
                      );
                    },
                  )}
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
                    setFormPaymentSelected(false);
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
                  Valor do pedido:{' '}
                  <span
                    className={`${styles.discountSpanPayment} fw-bold d-inline`}
                  >
                    {total && formPayment === 'pix'
                      ? FormatPrice(
                          parseFloat(
                            total
                              .replace('R$ ', '')
                              .replace('.', '')
                              .replace(',', '.'),
                          ) -
                            parseFloat(
                              total
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.'),
                            ) *
                              0.1,
                        )
                      : ''}
                  </span>
                </p>
                <p
                  className="fw-semibold"
                  style={{ color: '#4AAE51', fontSize: '.9rem' }}
                >
                  Desconto de{' '}
                  <span className={`${styles.discountSpan} fw-bold d-inline`}>
                    10% para pagamento
                  </span>{' '}
                  á vista{' '}
                  <span className={`${styles.discountSpan} fw-bold d-inline`}>
                    já aplicado
                  </span>
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
                    setFormPaymentSelected(false);
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
                  Valor do pedido:{' '}
                  <span
                    className={`${styles.discountSpanPayment} fw-bold d-inline`}
                  >
                    {' '}
                    {total
                      ? FormatPrice(
                          parseFloat(
                            total
                              .replace(' c/ Juros', '')
                              .replace(' s/ Juros', '')
                              .replace('R$ ', '')
                              .replace('.', '')
                              .replace(',', '.'),
                          ) -
                            parseFloat(
                              total
                                .replace(' c/ Juros', '')
                                .replace(' s/ Juros', '')
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.'),
                            ) *
                              0.1,
                        )
                      : ''}
                  </span>
                </p>
                <p
                  className="fw-semibold"
                  style={{ color: '#4AAE51', fontSize: '.9rem' }}
                >
                  Desconto de{' '}
                  <span className={`${styles.discountSpan} fw-bold d-inline`}>
                    10% para pagamento
                  </span>{' '}
                  á vista{' '}
                  <span className={`${styles.discountSpan} fw-bold d-inline`}>
                    já aplicado
                  </span>
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

              {errorCheck ? (
                <span className="d-block error-mensage mt-2">{errorCheck}</span>
              ) : (
                ''
              )}
            </div>
            {formPaymentSelected === 'cartao' && section === 'resumo' ? (
              <div>
                <p>Cartão de credito, {selectedInstallment}</p>
              </div>
            ) : formPaymentSelected === 'pix' && section === 'resumo' ? (
              <div>
                <p>Pix á vista</p>
              </div>
            ) : formPaymentSelected === 'boleto' && section === 'resumo' ? (
              <div>
                <p>Boleto bancário á vista</p>
              </div>
            ) : (
              ''
            )}
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
            {section === 'resumo' ? (
              <div className={`${styles.divMainFormPayment} text-center mb-4`}>
                <span
                  onClick={() => {
                    setSectionCompleted({
                      identificacao: true,
                      pagamento: false,
                      resumo: false,
                    });
                    setDiscount([]);
                    setFormPaymentSelected(false);
                    setSection('pagamento');
                  }}
                >
                  Mudar forma de pagamento
                </span>
              </div>
            ) : (
              ''
            )}

            {cart &&
              cart.map((element) => {
                return (
                  <div
                    key={element.id}
                    className={`${styles.product} d-flex justify-content-between align-items-center`}
                  >
                    <div
                      className={styles.productImg}
                      style={{
                        backgroundImage: `url(${
                          element.idAtividade.foto_url
                            ? element.idAtividade.foto_url
                            : `${apiRoute}/storage/${element.idAtividade.modalidade[0].foto}`
                        })`,
                      }}
                    ></div>
                    <div>
                      <h3>{element.idAtividade.Titulo}</h3>
                      <p>
                        Aventureiros:{' '}
                        {element.qtdPessoa > 1
                          ? `${element.qtdPessoa} Pessoas`
                          : `${element.qtdPessoa} Pessoa`}
                      </p>
                      <span>
                        {element.qtdPessoa > 1
                          ? FormatPrice(
                              Number.parseFloat(element.idAtividade.preco) *
                                element.qtdPessoa,
                            )
                          : FormatPrice(element.idAtividade.preco)}
                      </span>
                    </div>
                  </div>
                );
              })}
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
                  {total ? <span>{total}</span> : <span>Calculando...</span>}
                </div>
                {discount && discount.length ? (
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
                        Descontos{' '}
                        {showMore ? <BsChevronUp /> : <BsChevronDown />}
                      </span>
                      {section === 'resumo' ? (
                        <span className={styles.discountSpan}>
                          -{' '}
                          {FormatPrice(
                            parseFloat(
                              total
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.'),
                            ) * 0.1,
                          )}
                        </span>
                      ) : (
                        <span>Confirmando...</span>
                      )}
                    </div>
                    <Accordion
                      className="w-100 border-0"
                      activeKey={showMore ? '0' : ''}
                    >
                      <Accordion.Item
                        eventKey="0"
                        className={showMore ? '' : 'border-0'}
                      >
                        <Accordion.Header className="visually-hidden">
                          Descontos
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            {discount.map(({ text, price }) => {
                              return (
                                <div
                                  key={text}
                                  className={`${styles.discountSpan} d-flex justify-content-between align-items-center w-100 pb-2`}
                                >
                                  <span>{text}</span>
                                  <span>- {price}</span>
                                </div>
                              );
                            })}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ) : (
                  <div
                    className={`${styles.divReceipt} p-3 d-none flex-column justify-content-center align-items-center text-start rounded w-100 `}
                  ></div>
                )}
                <div
                  className={`${styles.divReceiptSection} d-flex justify-content-between align-items-center w-100 mb-4`}
                >
                  <span>Método:</span>
                  {total ? (
                    <span>
                      {formPaymentSelected === 'cartao'
                        ? 'Cartão de credito'
                        : formPaymentSelected === 'pix'
                        ? 'Pix á vista'
                        : formPaymentSelected === 'boleto'
                        ? 'Boleto á vista'
                        : 'Não escolhido'}
                    </span>
                  ) : (
                    <span>Calculando...</span>
                  )}
                </div>
                <div
                  className={`d-flex justify-content-between align-items-center w-100 pb-2 `}
                >
                  <span className={section === 'resumo' ? 'fw-bold fs-5' : ''}>
                    Total:
                  </span>
                  {total ? (
                    <span
                      className={section === 'resumo' ? 'fw-bold fs-5' : ''}
                    >
                      {formPaymentSelected === 'cartao' && selectedInstallment
                        ? FormatPrice(
                            parseFloat(
                              selectedInstallment
                                .replace(' c/ Juros', '')
                                .replace(' s/ Juros', '')
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.')
                                .split('x - ')[1],
                            ) *
                              parseInt(
                                selectedInstallment
                                  .replace(' c/ Juros', '')
                                  .replace(' s/ Juros', '')
                                  .replace('R$ ', '')
                                  .replace('.', '')
                                  .replace(',', '.')
                                  .split('x - ')[0],
                              ),
                          )
                        : formPaymentSelected === 'pix'
                        ? FormatPrice(
                            parseFloat(
                              total
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.'),
                            ) -
                              parseFloat(
                                total
                                  .replace('R$ ', '')
                                  .replace('.', '')
                                  .replace(',', '.'),
                              ) *
                                0.1,
                          )
                        : formPaymentSelected === 'boleto'
                        ? FormatPrice(
                            parseFloat(
                              total
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.'),
                            ) -
                              parseFloat(
                                total
                                  .replace('R$ ', '')
                                  .replace('.', '')
                                  .replace(',', '.'),
                              ) *
                                0.1,
                          )
                        : 'Calculando...'}
                      {/* {total} */}
                    </span>
                  ) : (
                    <span>Calculando...</span>
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
                    {total}
                  </span>
                  <span
                    className={`${styles.discountSpan} ms-2 fw-bold`}
                    style={{ fontSize: '1.15rem' }}
                  >
                    {total
                      ? FormatPrice(
                          Number.parseFloat(
                            total
                              .replace('R$ ', '')
                              .replace(',', '.')
                              .replace('.', ''),
                          ) -
                            Number.parseFloat(
                              total
                                .replace('R$ ', '')
                                .replace(',', '.')
                                .replace('.', ''),
                            ) *
                              0.1,
                        )
                      : 'Calculando...'}
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
              <ButtonCustom
                type={completeOrder.loading ? 'button' : 'submit'}
                loading={completeOrder.loading}
              >
                {completeOrder.loading ? 'Carregando...' : 'Finalizar pedido'}
              </ButtonCustom>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseSections;

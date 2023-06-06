import React from 'react';
import styles from './UserCart.module.css';
import CheckboxCustom from './CheckboxCustom';
import { Accordion, Button, Modal } from 'react-bootstrap';
import { BsChevronDown, BsFillTrash3Fill } from 'react-icons/bs';
import CartAdventure from './CartAdventure';
import ButtonCustom from './ButtonCustom';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import {
  apiRoute,
  deleteAllCartRoute,
  deleteItemCartRoute,
  getCartRoute,
  optionsFetch,
} from '../DB/data';
import { GlobalContext } from '../Context/GlobalStorage';
import FormatPrice from '../Helpers/FormatPrice';

const UserCart = () => {
  const { session, itensCart, setItensCart } = React.useContext(GlobalContext);
  const { request, loading } = useFetch();
  const [cart, setCart] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [discount, setDiscount] = React.useState([]);
  const [summary, setSummary] = React.useState(0);
  const [modalInfo, setModalInfo] = React.useState('');
  const [showMore, setShowMore] = React.useState(false);
  const [cartError, setCartError] = React.useState('');

  // Checkboxcustom
  // const [selectedItens, setSelectedItens] = React.useState([]);
  const [itensId, setItensId] = React.useState([]);
  const [selectAll, setSelectAll] = React.useState(false);
  const navigate = useNavigate();

  async function getCart() {
    const { json } = await request(
      `${apiRoute}${getCartRoute}`,
      optionsFetch({ method: 'GET', token: session.user.token }),
    );
    setCart(json.carrinho);
    // console.log(json.carrinho);
  }

  const handleClose = () => {
    setModalInfo({});
    setShow(false);
  };
  const handleShow = (title, text, actionText, action) => {
    setModalInfo({ title, text, actionText, action });
    setShow(true);
  };

  React.useEffect(() => {
    getCart();
  }, []);

  React.useEffect(() => {
    let totalPrice = 0;
    if (cart.length)
      cart.forEach(({ qtdPessoa, idAtividade }) => {
        totalPrice += Number.parseFloat(idAtividade.preco) * qtdPessoa;
      });

    setTotal(FormatPrice(totalPrice));
  }, [cart]);

  React.useEffect(() => {
    let totalPrice = 0;

    if (selectAll && itensId.length === cart.length) {
      cart.forEach((item) => {
        totalPrice +=
          Number.parseFloat(item.idAtividade.preco) * item.qtdPessoa;
      });
    } else if (!selectAll && itensId.length) {
      cart.forEach((item) => {
        if (itensId.includes(item.id))
          totalPrice +=
            Number.parseFloat(item.idAtividade.preco) * item.qtdPessoa;
      });
    }

    if (itensId.length === cart.length) setSelectAll(true);
    else if (itensId.length !== cart.length) setSelectAll(false);

    setSummary(FormatPrice(totalPrice));
  }, [itensId]);

  React.useEffect(() => {
    if (itensId.length === cart.length) setSelectAll(true);
    else if (itensId.length !== cart.length) setSelectAll(false);
  }, [cart]);

  async function removeItemCart(id) {
    const removeItem = await request(
      `${apiRoute}${deleteItemCartRoute}${id}`,
      optionsFetch({ method: 'DELETE', token: session.user.token }),
    );

    if (removeItem) getCart();
  }

  async function removeAllCart() {
    const removeItem = await request(
      `${apiRoute}${deleteAllCartRoute}`,
      optionsFetch({ method: 'DELETE', token: session.user.token }),
    );

    if (removeItem) getCart();
  }

  if (loading) return <Loading />;
  else
    return (
      <section className={styles.section}>
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-lg-8">
            <div className="bg-white p-3 d-flex flex-column justify-content-start align-items-start text-start rounded">
              <h2>Carrinho de compras</h2>
              <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                <CheckboxCustom
                  text={'Selecionar todos os itens'}
                  cart={cart ? cart : []}
                  allCheck={true}
                  itensId={itensId}
                  setItensId={setItensId}
                  selectAll={selectAll}
                  setSelectAll={setSelectAll}
                />
                <div>
                  <span
                    onClick={() => {
                      handleShow(
                        'Remover todos os itens',
                        'Deseja remover todos os itens do carrinho?',
                        'Remover itens',
                        () => {
                          removeAllCart();
                        },
                      );
                    }}
                    className="fw-bold"
                    style={{ cursor: 'pointer' }}
                  >
                    Remover itens
                  </span>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{modalInfo.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                      <h2 className="fw-bold" style={{ fontSize: '1.5rem' }}>
                        {modalInfo.text}
                      </h2>
                      <p>
                        Essa ação é{' '}
                        <span className="fw-bold">irreversível</span>
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          modalInfo.action();
                          handleClose();
                        }}
                      >
                        {modalInfo.actionText}
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start text-start mt-4 w-100">
              {cart &&
                cart.map((element) => {
                  return (
                    <div
                      className="bg-white p-3 w-100 mt-4 rounded"
                      key={element.id}
                    >
                      <div className="d-flex flex-column justify-content-center align-items-center w-100 border-bottom">
                        <div className="d-flex justify-content-between align-items-center py-3 w-100 border-bottom mb-2">
                          <CheckboxCustom
                            text={'Aventura nas alturas'}
                            bsClass={'fw-bold'}
                            id={element.id}
                            itensId={itensId}
                            setItensId={setItensId}
                            selectAll={selectAll}
                            setSelectAll={setSelectAll}
                          />
                          <div style={{ cursor: 'pointer' }}>
                            <span
                              className="fw-bold"
                              onClick={() => {
                                handleShow(
                                  'Remove item do carrinho',
                                  'Deseja remover esse item do carrinho?',
                                  'Remover item',
                                  () => {
                                    removeItemCart(element.id);
                                  },
                                );
                              }}
                            >
                              <BsFillTrash3Fill
                                style={{
                                  fontSize: '1.25rem',
                                  color: '#B72424',
                                }}
                              />
                            </span>
                          </div>
                        </div>
                        <CartAdventure data={element} getCart={getCart} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-12 col-lg-4 sticky-top" style={{ top: '64px' }}>
            <div
              className={`${styles.divReceipt} bg-white p-3 d-none d-lg-flex flex-column justify-content-center align-items-center text-start rounded`}
            >
              <div className="text-center">
                <h3>Resumo do pedido</h3>
              </div>
              <div
                className={`${styles.divReceiptSection} d-flex justify-content-between align-items-center w-100`}
              >
                <span>Subtotal</span>
                <span>{total && summary ? summary : 'Calculando...'}</span>
              </div>

              {discount && discount.length ? (
                <div
                  className={`${styles.divReceiptSection} d-flex flex-column justify-content-center align-items-center w-100`}
                >
                  <div className="d-flex justify-content-between align-items-center w-100 pb-2">
                    <span
                      className={styles.divDescount}
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      Descontos <BsChevronDown />
                    </span>
                    <span className={styles.discountSpan}>- R$ 250</span>
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
              ) : (
                <div className={`${styles.divReceiptSection} w-100`}></div>
              )}
              <div
                className={`d-flex flex-column justify-content-center align-items-center w-100`}
              >
                <div
                  className={`d-flex justify-content-between align-items-center w-100 pb-2`}
                >
                  <span className="fw-bold fs-5">Total:</span>
                  <span className="fw-bold fs-5">
                    {total && summary ? summary : 'Calculando...'}
                  </span>
                </div>
              </div>

              {summary !== 'R$ 0,00' ? (
                <div
                  className={`d-flex flex-column justify-content-center align-items-center w-100`}
                >
                  <div
                    className={`d-flex justify-content-end align-items-end w-100 pb-2`}
                  >
                    <span
                      className="fw-semibold"
                      style={{
                        fontSize: '1rem',
                        textDecoration: 'line-through',
                        color: '#9B9B9B',
                      }}
                    >
                      {summary ? summary : 'Calculando...'}
                    </span>
                    <span
                      className={`${styles.discountSpan} ms-2 fw-bold`}
                      style={{ fontSize: '1.5rem' }}
                    >
                      {summary
                        ? FormatPrice(
                            parseFloat(
                              summary
                                .replace('R$ ', '')
                                .replace('.', '')
                                .replace(',', '.'),
                            ) -
                              parseFloat(
                                summary
                                  .replace('R$ ', '')
                                  .replace('.', '')
                                  .replace(',', '.'),
                              ) *
                                0.1,
                          )
                        : 'Calculando...'}
                    </span>
                  </div>
                  <div className={`${styles.discountSpan} text-end mb-4`}>
                    <span>
                      <span className="fw-bold">10% de desconto</span> ao pagar
                      no PIX ou boleto
                    </span>
                  </div>
                </div>
              ) : (
                ''
              )}

              {summary !== 'R$ 0,00' ? (
                <>
                  <div>
                    <ButtonCustom
                      onClick={() => {
                        if (!itensCart) {
                          setCartError('Selecione um item para continuar');
                          setTimeout(() => {
                            setCartError('');
                          }, 3000);
                        } else {
                          navigate('/processo-de-compra');
                        }
                      }}
                    >
                      Fechar pedido
                    </ButtonCustom>
                  </div>
                  {cartError ? (
                    <span className="error-mensage d-block text-center mt-2">
                      {cartError}
                    </span>
                  ) : (
                    ''
                  )}
                </>
              ) : (
                ''
              )}
            </div>
            <div
              className="position-fixed position-absolute start-50 translate-middle-x d-flex d-lg-none flex-column justify-content-start align-items-start text-start rounded text-center"
              style={{ bottom: '32px', width: '90vw' }}
            >
              <div className={styles.divReceiptMobile}>
                <h3 className="fw-bold">Resumo do pedido</h3>
                <div
                  className={`d-flex flex-column justify-content-center align-items-center w-100`}
                >
                  <div
                    className={`d-flex justify-content-between align-items-center w-100 pb-2 border-bottom border-top`}
                  >
                    <span className="fw-bold fs-5">Total:</span>
                    <span className="fw-bold fs-5">
                      {total ? total : 'Calculando...'}
                    </span>
                  </div>
                </div>
                <div
                  className={`d-flex flex-column justify-content-center align-items-center w-100`}
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
                      {total ? total : 'Calculando...'}
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
                      <span className="fw-bold">10% de desconto</span> ao pagar
                      no PIX ou boleto
                    </span>
                  </div>
                </div>

                <ButtonCustom
                  onClick={() => {
                    navigate('/processo-de-compra');
                  }}
                >
                  Fechar pedido
                </ButtonCustom>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default UserCart;

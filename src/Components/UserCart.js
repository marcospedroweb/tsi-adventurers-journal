import React from 'react';
import styles from './UserCart.module.css';
import CheckboxCustom from './CheckboxCustom';
import { Accordion, Button, Modal } from 'react-bootstrap';
import { BsChevronDown, BsFillTrash3Fill } from 'react-icons/bs';
import CartAdventure from './CartAdventure';
import ButtonCustom from './ButtonCustom';

const UserCart = () => {
  const [show, setShow] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState('');
  const [showMore, setShowMore] = React.useState(false);

  const handleClose = () => {
    setModalInfo({});
    setShow(false);
  };
  const handleShow = (title, text, actionText, action) => {
    setModalInfo({ title, text, actionText, action });
    setShow(true);
  };

  return (
    <section className={styles.section}>
      <div className="row justify-content-between align-items-start">
        <div className="col-12 col-lg-8">
          <div className="bg-white p-3 d-flex flex-column justify-content-start align-items-start text-start rounded">
            <h2>Carrinho de compras</h2>
            <div className="d-flex justify-content-between align-items-center w-100 mt-3">
              <CheckboxCustom text={'Selecionar todos os itens'} />
              <div>
                <span
                  onClick={() => {
                    handleShow(
                      'Remover todos os itens',
                      'Deseja remover todos os itens do carrinho?',
                      'Remover itens',
                      () => {
                        window.localStorage.setItem('cart', JSON.stringify([]));
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
                      Essa ação é <span className="fw-bold">irreversível</span>
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
          <div className="bg-white p-3 d-flex flex-column justify-content-start align-items-start text-start rounded mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center w-100 border-bottom">
              <div className="d-flex justify-content-between align-items-center py-3 w-100 border-bottom mb-2">
                <CheckboxCustom
                  text={'Aventura nas alturas'}
                  bsClass={'fw-bold'}
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
                          const newArray = JSON.parse(
                            window.localStorage.getItem('cart'),
                          ).filter((id) => id !== 3);
                          window.localStorage.setItem(
                            'cart',
                            JSON.stringify(newArray),
                          );
                        },
                      );
                    }}
                  >
                    <BsFillTrash3Fill
                      style={{ fontSize: '1.25rem', color: '#B72424' }}
                    />
                  </span>
                </div>
              </div>
              <CartAdventure />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
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
              <span>R$ 2.000,99</span>
            </div>
            <div
              className={`${styles.divReceiptSection} d-flex justify-content-between align-items-center w-100`}
            >
              <span>Taxas</span>
              <span>R$ 250</span>
            </div>
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
            <div
              className={`d-flex flex-column justify-content-center align-items-center w-100`}
            >
              <div
                className={`d-flex justify-content-between align-items-center w-100 pb-2`}
              >
                <span className="fw-bold fs-5">Total:</span>
                <span className="fw-bold fs-5">R$ 250</span>
              </div>
            </div>
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
                  R$ 2.000,99
                </span>
                <span
                  className={`${styles.discountSpan} ms-2 fw-bold`}
                  style={{ fontSize: '1.5rem' }}
                >
                  R$ 1.850,99
                </span>
              </div>
              <div className={`${styles.discountSpan} text-end mb-4`}>
                <span>
                  <span className="fw-bold">10% de desconto</span> ao pagar no
                  PIX ou boleto
                </span>
              </div>
            </div>
            <div>
              <ButtonCustom>Fechar pedido</ButtonCustom>
            </div>
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
                  <span className="fw-bold fs-5">R$ 250</span>
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
              <ButtonCustom>Fechar pedido</ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCart;

import React from 'react';
import styles from './UserCart.module.css';
import CheckboxCustom from './CheckboxCustom';
import { Button, Modal } from 'react-bootstrap';
import { BsFillTrash3Fill } from 'react-icons/bs';
import CartAdventure from './CartAdventure';

const UserCart = () => {
  const [show, setShow] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState('');

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
      <div className="row justify-content-between align-items-center">
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
              <div className="d-flex justify-content-between align-items-center py-3 w-100">
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
        <div className="col-12 col-lg-4"></div>
      </div>
    </section>
  );
};

export default UserCart;

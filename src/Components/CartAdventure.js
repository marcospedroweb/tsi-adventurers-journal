import React from 'react';
import styles from './CartAdventure.module.css';
import LabelCard from './LabelCard';
import LimitText from '../Helpers/LimitText';
import ModalShowMore from './ModalShowMore';
import FormatPrice from '../Helpers/FormatPrice';
import ModalEditAdventure from './ModalEditAdventure';
import { apiRoute } from '../DB/data';

const CartAdventure = ({ data, getCart, orders, bsClass }) => {
  const date = new Date(orders ? data.data : data.idAtividade.Data_e_Hora);
  const dateActivitie = new Date(
    orders ? data.idAtividade[0].Data_e_Hora : data.idAtividade.Data_e_Hora,
  );
  const modalitys = [
    orders
      ? data.idAtividade[0].modalidade.map(({ nome }) => nome)
      : data.idAtividade.modalidade.map(({ nome }) => nome),
  ];

  if (orders)
    return (
      <div
        className={`${bsClass} row justify-content-center justify-content-lg-between align-items-center w-100 mx-auto`}
      >
        <div className="col-12 col-lg-2">
          <div
            className={styles.divImg}
            style={{
              backgroundImage: `url(${
                data.idAtividade[0].foto_url
                  ? data.idAtividade[0].foto_url
                  : `${apiRoute}/storage/${data.idAtividade[0].modalidade[0].foto}`
              })`,
            }}
          ></div>
        </div>
        <div className="col-12 col-lg-10">
          <div
            className={`${styles.divInfo} d-flex flex-column flex-xl-row justify-content-between align-items-center rounded w-100`}
          >
            <div className="w-100">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <LabelCard
                  title={'Data da compra'}
                  text={`${date.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                  })}/${date.toLocaleDateString('pt-BR', {
                    month: '2-digit',
                  })}/${date.getFullYear()} - ${date.getHours()}:${date
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'me-0 me-sm-2 mb-2 w-100'}
                />
                <LabelCard
                  title={'Forma de pagamento'}
                  text={
                    data.FormPag === 'boleto'
                      ? 'Boleto bancario á vista'
                      : data.FormPag === 'pix'
                      ? 'Pix á vista'
                      : 'Cartão de credito'
                  }
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'me-0 me-sm-2 mb-2  w-100'}
                />
                <LabelCard
                  title={'Status do pedido'}
                  text={data.status}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'mb-2  w-100'}
                />
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <LabelCard
                  title={'Modalidades'}
                  text={LimitText(modalitys.join(', '))}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'me-2 mb-2  w-100'}
                />
                <LabelCard
                  title={'Data da atividade'}
                  text={`${dateActivitie.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                  })}/${dateActivitie.toLocaleDateString('pt-BR', {
                    month: '2-digit',
                  })}/${dateActivitie.getFullYear()} - ${dateActivitie.getHours()}:${dateActivitie
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'me-2 mb-2  w-100'}
                />
                <LabelCard
                  title={'Aventureiros'}
                  text={LimitText(
                    `${
                      data.qtdPessoa > 1
                        ? `${data.qtdPessoa} Pessoas`
                        : `${data.qtdPessoa} Pessoa`
                    }`,
                  )}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'mb-2  w-100'}
                />
              </div>
              <div className="w-100 mb-2 mb-xl-0">
                <ModalShowMore data={data} orders={true} />
              </div>
            </div>
            <div
              className={`${styles.divPrice} px-4 d-flex flex-column justify-content-center align-items-center`}
            >
              <h3 style={{ whiteSpace: 'nowrap' }}>Total da aventura</h3>
              <p
                style={
                  (data.qtdPessoa > 1
                    ? FormatPrice(
                        Number.parseFloat(data.idAtividade[0].preco) *
                          data.qtdPessoa,
                      )
                    : FormatPrice(data.idAtividade[0].preco)
                  ).length > 12
                    ? { fontSize: '1.25rem' }
                    : {}
                }
              >
                {FormatPrice(
                  Number.parseFloat(data.idAtividade[0].preco) * data.qtdPessoa,
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="row justify-content-between align-items-center w-100">
        <div className="col-12 col-lg-2">
          <div
            className={styles.divImg}
            style={{
              backgroundImage: `url(${
                data.foto_url
                  ? data.foto_url
                  : `${apiRoute}/storage/${data.idAtividade.modalidade[0].foto}`
              })`,
            }}
          ></div>
        </div>
        <div className="col-12 col-lg-10">
          <div
            className={`${styles.divInfo} d-flex flex-column flex-xl-row justify-content-between align-items-center rounded w-100`}
          >
            <div className="w-100">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <LabelCard
                  title={'Local'}
                  text={LimitText(
                    `${data.idAtividade.cidade.nome}, ${data.idAtividade.cidade.uf} - ${data.idAtividade.cidade.pais}`,
                  )}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'me-0 me-sm-2 mb-2 w-100'}
                />
                <LabelCard
                  title={'Data'}
                  text={`${date.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                  })}/${date.toLocaleDateString('pt-BR', {
                    month: '2-digit',
                  })}/${date.getFullYear()} - ${date.getHours()}:${date
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'mb-2  w-100'}
                />
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <LabelCard
                  title={'Modalidades'}
                  text={LimitText(modalitys.join(', '))}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'me-2 mb-2  w-100'}
                />
                <LabelCard
                  title={'Aventureiros'}
                  text={LimitText(
                    `${
                      data.qtdPessoa > 1
                        ? `${data.qtdPessoa} Pessoas`
                        : `${data.qtdPessoa} Pessoa`
                    }`,
                  )}
                  stylesCss={{ backgroundColor: '#283040' }}
                  bsClass={'mb-2  w-100'}
                />
              </div>
              <div className="w-100 mb-2 mb-xl-0">
                <ModalShowMore data={data} />
              </div>
            </div>
            <div className={styles.divPrice}>
              <h3>Total do pedido</h3>
              <p
                style={
                  (data.qtdPessoa > 1
                    ? FormatPrice(
                        Number.parseFloat(data.idAtividade.preco) *
                          data.qtdPessoa,
                      )
                    : FormatPrice(data.idAtividade.preco)
                  ).length > 12
                    ? { fontSize: '1.25rem' }
                    : {}
                }
              >
                {data.qtdPessoa > 1
                  ? FormatPrice(
                      Number.parseFloat(data.idAtividade.preco) *
                        data.qtdPessoa,
                    )
                  : FormatPrice(data.idAtividade.preco)}
              </p>
              <ModalEditAdventure
                passengersNum={data.qtdPessoa}
                id={data.id}
                getCart={getCart}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default CartAdventure;

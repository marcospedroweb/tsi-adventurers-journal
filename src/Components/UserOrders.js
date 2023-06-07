import React from 'react';
import styles from './UserOrders.module.css';
import CartAdventure from './CartAdventure';
import Loading from './Loading';
import { apiRoute, getOrdersRoute, optionsFetch } from '../DB/data';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';
import FormatPrice from '../Helpers/FormatPrice';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';

const UserOrders = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const [data, setData] = React.useState([]);
  const [dataGrouped, setDataGrouped] = React.useState([]);
  const navigate = useNavigate();
  const { loading, request } = useFetch();

  function juntarObjetosPorCodigo(array) {
    const objetosAgrupados = {};
    for (const objeto of array) {
      if (objeto.codigo) {
        if (objetosAgrupados[objeto.codigo]) {
          objetosAgrupados[objeto.codigo].push(objeto);
        } else {
          objetosAgrupados[objeto.codigo] = [objeto];
        }
      }
    }

    const resultado = [];
    for (const codigo in objetosAgrupados) {
      resultado.push(objetosAgrupados[codigo]);
    }

    return resultado;
  }

  async function getOrder() {
    const { json } = await request(
      `${apiRoute}${getOrdersRoute}`,
      optionsFetch({ method: 'GET', token: session.user.token }),
    );
    if (json.status === 200) {
      setDataGrouped(juntarObjetosPorCodigo(json.itens_do_pedido));
      setData(json.itens_do_pedido);
    }
  }

  React.useEffect(() => {
    getOrder();
  }, []);

  if (loading) return <Loading />;
  else
    return (
      <section className={styles.section}>
        <div className="container-xl">
          <h2
            className="fw-bold mb-4 text-center"
            style={{ fontSize: '2.5rem' }}
          >
            Seus pedidos
          </h2>
          <div className="row flex-column justify-content-center align-items-center">
            {data.length > 0 ? (
              <div className="col-12">
                {dataGrouped.map((group) => {
                  const date = new Date(group[0].data);

                  if (group.length < 2) {
                    return (
                      <div key={group[0].id} className={styles.divOrder}>
                        <div
                          className={`${styles.divAboutOrder} d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center`}
                        >
                          <div>
                            <h3>
                              Data da compra:{' '}
                              <span>{`${date.toLocaleDateString('pt-BR', {
                                day: '2-digit',
                              })}/${date.toLocaleDateString('pt-BR', {
                                month: '2-digit',
                              })}/${date.getFullYear()} - ${date.getHours()}:${date
                                .getMinutes()
                                .toString()
                                .padStart(2, '0')}`}</span>
                            </h3>
                          </div>
                          <div>
                            <h3>
                              Total do pedido:{' '}
                              <span className="fs-4">
                                {FormatPrice(group[0].TotalPedido)}
                              </span>
                            </h3>
                          </div>
                        </div>
                        <CartAdventure data={group[0]} orders={true} />
                      </div>
                    );
                  } else {
                    return (
                      <div key={group[0].id} className={styles.divOrder}>
                        <div
                          className={`${styles.divAboutOrder} d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center`}
                        >
                          <div>
                            <h3>
                              Data da compra:{' '}
                              <span>{`${date.toLocaleDateString('pt-BR', {
                                day: '2-digit',
                              })}/${date.toLocaleDateString('pt-BR', {
                                month: '2-digit',
                              })}/${date.getFullYear()} - ${date.getHours()}:${date
                                .getMinutes()
                                .toString()
                                .padStart(2, '0')}`}</span>
                            </h3>
                          </div>
                          <div>
                            <h3>
                              Total do pedido:{' '}
                              <span className="fs-4">
                                {FormatPrice(group[0].TotalPedido)}
                              </span>
                            </h3>
                          </div>
                        </div>
                        {group.map((element, index) => {
                          return (
                            <div key={element.id + index}>
                              <CartAdventure
                                data={element}
                                orders={true}
                                bsClass={'mt-4'}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              <div className="col-12 text-center mt-5">
                <h3>Você ainda não fez pedidos</h3>
                <ButtonCustom
                  onClick={() => {
                    navigate('/aventurar-se');
                  }}
                >
                  Procurar aventuras
                </ButtonCustom>
              </div>
            )}
          </div>
        </div>
      </section>
    );
};

export default UserOrders;

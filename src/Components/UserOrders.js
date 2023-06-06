import React from 'react';
import styles from './UserOrders.module.css';
import CartAdventure from './CartAdventure';
import Loading from './Loading';
import { apiRoute, getOrdersRoute, optionsFetch } from '../DB/data';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';

const UserOrders = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const [data, setData] = React.useState([]);
  const { loading, request } = useFetch();

  async function getOrder() {
    const { json } = await request(
      `${apiRoute}${getOrdersRoute}`,
      optionsFetch({ method: 'GET', token: session.user.token }),
    );
    if (json.status === 200) {
      console.log(json.itens_do_pedido);
      setData(json.itens_do_pedido);
    }
  }

  React.useEffect(() => {
    getOrder();
    console.log(data);
  }, []);

  if (loading) return <Loading />;
  else
    return (
      <section className={styles.section}>
        <div className="container-xl">
          <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
            Seus pedidos
          </h2>
          <div className="row flex-column justify-content-center align-items-center">
            <div className="col-12 ">
              {data.map((element) => {
                const date = new Date(element.data);
                const formatedDate = `${date.toLocaleDateString('pt-BR', {
                  day: '2-digit',
                })}/${date.toLocaleDateString('pt-BR', {
                  month: '2-digit',
                })}/${date.getFullYear()} - ${date.getHours()}:${date
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')}`;

                return (
                  <div key={element.id} className={styles.divOrder}>
                    {/* <div
                      className={`${styles.divAboutOrder} d-flex justify-content-between align-items-center`}
                    >
                      <div>
                        <h3>
                          Pedido feito em: <span>{formatedDate}</span>
                        </h3>
                      </div>
                      <div>
                        <h3>
                          ID do pedido: <span>{element.codigo}</span>
                        </h3>
                      </div>
                    </div> */}
                    <CartAdventure data={element} orders={true} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
};

export default UserOrders;

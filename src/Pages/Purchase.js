import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import {
  apiRoute,
  getCartRoute,
  optionsFetch,
  showUserRoute,
} from '../DB/data';
import PurchaseSections from '../Components/PurchaseSections';
import Loading from '../Components/Loading';

const Purchase = () => {
  const { session, setSession, itensCart } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { request, loading } = useFetch();
  const [user, setUser] = React.useState();
  const [cart, setCart] = React.useState('');

  async function getCart() {
    const { json } = await request(
      `${apiRoute}${getCartRoute}?cart=${itensCart.join(',')}`,
      optionsFetch({ method: 'GET', token: session.user.token }),
    );
    setCart(json.carrinho);
    // console.log(json.carrinho);
  }

  React.useEffect(() => {
    if (window.sessionStorage.getItem('user')) {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
      setSession({
        logged: true,
        user: user,
      });
    } else {
      navigate('/');
    }
    if (!itensCart.length) {
      navigate('/carrinho');
    }
    async function getUserData() {
      const { json } = await request(
        `${apiRoute}${showUserRoute}`,
        optionsFetch({ method: 'GET', token: session.user.token }),
      );
      setUser(json.data);
    }

    getUserData();
    getCart();
  }, []);

  if (true && !cart.length) return <Loading />;
  return (
    <main className="container-xl">
      <PurchaseSections cart={cart} />
    </main>
  );
};

export default Purchase;

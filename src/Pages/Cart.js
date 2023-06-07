import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import UserCart from '../Components/UserCart';
import Loading from '../Components/Loading';

const Cart = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const navigate = useNavigate();

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
    window.document.title = "Adventurer's Journal | Carrinho";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);

  if (!session.user) return <Loading />;
  return (
    <main className="container-xl">
      <UserCart />
    </main>
  );
};

export default Cart;

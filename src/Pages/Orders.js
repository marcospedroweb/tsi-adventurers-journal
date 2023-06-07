import React from 'react';
import UserOrders from '../Components/UserOrders';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const Orders = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (window.sessionStorage.getItem('user')) {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
      setSession({
        logged: true,
        user: user,
      });
    } else {
      navigate('/');
    }

    window.document.title = "Adventurer's Journal | Pedidos";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);

  if (!session.logged) return <Loading />;
  else
    return (
      <main>
        <UserOrders />
      </main>
    );
};

export default Orders;

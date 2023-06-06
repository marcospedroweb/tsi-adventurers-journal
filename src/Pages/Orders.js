import React from 'react';
import UserOrders from '../Components/UserOrders';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import {
  apiRoute,
  getOrdersRoute,
  optionsFetch,
  showUserRoute,
} from '../DB/data';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';

const Orders = () => {
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

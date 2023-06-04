import React from 'react';
import UserOrders from '../Components/UserOrders';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';

const Orders = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [user, setUser] = React.useState();
  const { loading, request } = useFetch();

  async function getUserData() {
    const { json } = await request(
      `${apiRoute}${showUserRoute}`,
      optionsFetch({ method: 'GET', token: session.user.token }),
    );

    setUser(json.data);
  }

  React.useEffect(() => {
    if (window.sessionStorage.getItem('user')) {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
      setSession({
        logged: true,
        user: user,
      });
      if (!user) navigate('/');
    }
  }, []);

  React.useEffect(() => {
    getUserData();
  }, [session]);

  if (loading) return <Loading />;
  else
    return (
      <main>
        <UserOrders />
      </main>
    );
};

export default Orders;

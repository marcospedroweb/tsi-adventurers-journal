import React from 'react';
import Loading from '../Components/Loading';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import ConfigUser from '../Components/ConfigUser';

const Config = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { request, loading } = useFetch();
  const [user, setUser] = React.useState();

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
    } else {
      navigate('/');
    }
  }, []);

  React.useEffect(() => {
    getUserData();
  }, [session]);

  if (loading) return <Loading />;
  else
    return (
      <main>
        <ConfigUser user={{ user, setUser, getUserData }} />
      </main>
    );
};

export default Config;

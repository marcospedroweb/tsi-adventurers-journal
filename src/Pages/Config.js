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

  React.useEffect(() => {
    async function getUserData() {
      const { json } = await request(
        `${apiRoute}${showUserRoute}`,
        optionsFetch({ method: 'GET', token: session.user.token }),
      );

      setUser(json.data);
    }

    if (!session.user) navigate('/');
    getUserData();
  }, [navigate, request, session]);

  if (loading) return <Loading />;
  else return <ConfigUser user={{ user, setUser }} />;
};

export default Config;

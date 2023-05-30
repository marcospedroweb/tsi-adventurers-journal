import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import PurchaseSections from '../Components/PurchaseSections';

const Purchase = () => {
  // const { session, setSession } = React.useContext(GlobalContext);
  // const navigate = useNavigate();
  // const { request, loading } = useFetch();
  // const [user, setUser] = React.useState();

  // React.useEffect(() => {
  //   async function getUserData() {
  //     const { json } = await request(
  //       `${apiRoute}${showUserRoute}`,
  //       optionsFetch({ method: 'GET', token: session.user.token }),
  //     );
  //     setUser(json.data);
  //   }

  //   if (!session.user) navigate('/');
  //   getUserData();
  // }, []);

  return (
    <main className="container-xl">
      <PurchaseSections />
    </main>
  );
};

export default Purchase;

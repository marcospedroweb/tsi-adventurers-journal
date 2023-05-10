import React from 'react';
import BannerProfile from '../Components/BannerProfile';
import ProfileUserSide from '../Components/ProfileUserSide';
import ProfileContentSide from '../Components/ProfileContentSide';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import {
  convertImageToBase64,
  convertImageToBase64Promise,
} from '../Helpers/convertImageToBase64';

const Profile = () => {
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
    if (!session.user) navigate('/');
    getUserData();
  }, [navigate, session]);
  // console.log(session.user);

  if (loading) return <Loading />;
  else if (user)
    return (
      <>
        {/* {console.log(user)} */}
        <BannerProfile img={user.banner_URL} />
        <div className="container-xl">
          <div className="row flex-column flex-lg-row justify-content-between align-items-start">
            <ProfileUserSide
              img={user.foto_URL}
              name={user.name}
              since={user.created}
              about={user.bio}
            />
            <ProfileContentSide />
          </div>
        </div>
      </>
    );
  else return <Loading />;
};

export default Profile;

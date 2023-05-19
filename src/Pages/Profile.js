import React from 'react';
import BannerProfile from '../Components/BannerProfile';
import ProfileUserSide from '../Components/ProfileUserSide';
import ProfileContentSide from '../Components/ProfileContentSide';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';
import { apiRoute, optionsFetch, showUserRoute } from '../DB/data';
import { noUserBannerBase64 } from '../Helpers/NoUserBanner64';

const Profile = () => {
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
  else if (user)
    return (
      <>
        {/* {console.log(user)} */}
        {user.banner_URL && <BannerProfile img={user.banner_URL} />}
        {!user.banner_URL && <BannerProfile img={noUserBannerBase64} />}

        <div className="container-xl">
          <div className="row flex-column flex-lg-row justify-content-between align-items-start">
            <ProfileUserSide user={user} context={{ session, setSession }} />
            <ProfileContentSide />
          </div>
        </div>
      </>
    );
  else return <Loading />;
};

export default Profile;

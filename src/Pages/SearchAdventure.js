import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
import { apiRoute, showUserRoute } from '../DB/data';
import ResearchedAdventures from '../Components/ResearchedAdventures';

const SearchAdventure = () => {
  const { searchAdventure, setSearchAdventure } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { loading, request } = useFetch();

  React.useEffect(() => {
    async function getAdventurers() {}

    // if (!searchAdventure) navigate('/aventurar-se');
    getAdventurers();
  }, [navigate, request, searchAdventure]);

  if (loading) return <Loading />;
  return (
    <main style={{ backgroundColor: '#283040', padding: '24px 0 92px 0' }}>
      <div className="container-xl">
        <h2
          style={{ fontSize: '3rem' }}
          className="text-center fw-bold mb-5 pt-5 text-white"
        >
          Aventurar-se
        </h2>
        <ResearchedAdventures />
      </div>
    </main>
  );
};

export default SearchAdventure;

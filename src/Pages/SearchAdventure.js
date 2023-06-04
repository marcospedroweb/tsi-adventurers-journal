import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
import { activitiesSearchRoute, apiRoute, optionsFetch } from '../DB/data';
import ResearchedAdventures from '../Components/ResearchedAdventures';
import BannerAdventure from '../Components/BannerAdventure';

const SearchAdventure = () => {
  const { searchAdventure, setSearchAdventure } =
    React.useContext(GlobalContext);
  const [adventurers, setAdventurers] = React.useState('');
  const navigate = useNavigate();
  const { loading, request } = useFetch();

  async function getAdventurers() {
    let query = '?';

    if (searchAdventure.modalitysIds.length)
      query = `${query}&modalidades=${searchAdventure.modalitysIds.join(',')}`;
    if (searchAdventure.location)
      query = `${query}&cidade=${searchAdventure.location}`;
    if (searchAdventure.location)
      query = `${query}&horario=${searchAdventure.date}`;
    if (searchAdventure.minPrice)
      query = `${query}&preco_minimo=${searchAdventure.minPrice}`;
    if (searchAdventure.maxPrice)
      query = `${query}&preco_maximo=${searchAdventure.maxPrice}`;
    if (searchAdventure.minAge)
      query = `${query}&idade_minima=${searchAdventure.minAge}`;

    const { json } = await request(
      `${apiRoute}${activitiesSearchRoute}${query}`,
      optionsFetch({ method: 'GET' }),
    );

    setAdventurers(json.data);
  }

  React.useEffect(() => {
    if (!searchAdventure) navigate('/aventurar-se');
    getAdventurers();
  }, []);

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
        <ResearchedAdventures
          adventurers={adventurers}
          getAdventurers={getAdventurers}
        />
      </div>
    </main>
  );
};

export default SearchAdventure;

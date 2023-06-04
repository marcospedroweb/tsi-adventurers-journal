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
    const body = {};

    if (searchAdventure.modalitysIds.length)
      body.modalidades = searchAdventure.modalitysIds;
    if (searchAdventure.location) body.cidade = searchAdventure.location;
    if (searchAdventure.location) body.horario = searchAdventure.date;
    if (searchAdventure.minPrice) body.preco_minimo = searchAdventure.minPrice;
    if (searchAdventure.maxPrice) body.preco_maximo = searchAdventure.maxPrice;
    if (searchAdventure.minAge) body.idade_minima = searchAdventure.minAge;

    const { json } = await request(
      `${apiRoute}${activitiesSearchRoute}`,
      optionsFetch({ method: 'GET', body }),
    );
    setAdventurers(json);
  }

  React.useEffect(() => {
    // console.log(searchAdventure);
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

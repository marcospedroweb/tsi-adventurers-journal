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
      query = `${query}&modalidade=${searchAdventure.modalitysIds.join(',')}`;
    if (searchAdventure.location.length)
      query = `${query}&cidade=${searchAdventure.location}`;
    if (searchAdventure.hour)
      query = `${query}&horario=${searchAdventure.hour}`;
    if (searchAdventure.day) query = `${query}&dia=${searchAdventure.day}`;
    if (searchAdventure.minPrice)
      query = `${query}&preco_min=${searchAdventure.minPrice}`;
    if (searchAdventure.maxPrice)
      query = `${query}&preco_max=${searchAdventure.maxPrice}`;
    if (searchAdventure.minAge)
      query = `${query}&idade_min=${searchAdventure.minAge}`;
    if (searchAdventure.orderPrice)
      query = `${query}&ordenar_preco=${searchAdventure.orderPrice}`;
    if (searchAdventure.orderAge)
      query = `${query}&ordenar_idade=${searchAdventure.orderAge}`;
    if (searchAdventure.orderTitle)
      query = `${query}&ordenar_titulo=${searchAdventure.orderTitle}`;

    const { json } = await request(
      `${apiRoute}${activitiesSearchRoute}${query}`,
      optionsFetch({ method: 'GET' }),
    );
    if (json && json.data) setAdventurers(json.data);
    else setAdventurers([]);
  }

  React.useEffect(() => {
    if (!searchAdventure) navigate('/aventurar-se');
    getAdventurers();

    window.document.title = "Adventurer's Journal | Aventuras";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
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

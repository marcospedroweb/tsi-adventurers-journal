import React from 'react';
import ThanksComponent from '../Components/ThanksComponent';
import UpSell from '../Components/UpSell';
import Loading from '../Components/Loading';
import { GlobalContext } from '../Context/GlobalStorage';
import { useNavigate } from 'react-router-dom';

const OrderCompleted = () => {
  const { completedOrder, setCompletedOrder } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!completedOrder) navigate('/');

    window.document.title = "Adventurer's Journal | Pedido realizado";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);

  if (!completedOrder) return <Loading />;
  else
    return (
      <main>
        <ThanksComponent data={completedOrder} />
        <UpSell />
      </main>
    );
};

export default OrderCompleted;

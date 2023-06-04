import React from 'react';
import styles from './AdventurePrice.module.css';
import LabelCard from './LabelCard';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import useFetch from '../Hooks/useFetch';
import { GlobalContext } from '../Context/GlobalStorage';
import { addInCartRoute, apiRoute, optionsFetch } from '../DB/data';

const AdventurePrice = ({
  best = false,
  price,
  per,
  idAdventure,
  data,
  isHotel,
  link,
}) => {
  const { session, searchAdventure, setSession } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { loading, request } = useFetch();

  async function addInCart() {
    if (!session.logged) {
      session.cartId = data.id;
      setSession(session);
      if (!window.sessionStorage.getItem('user')) navigate('/login');
      return;
    }
    const { json } = await request(
      `${apiRoute}${addInCartRoute}`,
      optionsFetch({ method: 'POST', token: session.user.token }),
    );
    console.log();
    // const cart = JSON.parse(window.localStorage.getItem('cart'));
    // if (cart) window.localStorage.setItem('cart', JSON.stringify([...cart, 2]));
    // else window.localStorage.setItem('cart', JSON.stringify([2]));
    // navigate('/carrinho');
  }

  return (
    <div className={`${styles.divMain} align-self-stretch`}>
      {best && (
        <LabelCard
          text="Menor preço"
          bsClass={'py-2 px-3 text-uppercase'}
          stylesCss={{
            color: '#87FAD1',
            backgroundColor: '#283040',
          }}
        />
      )}

      <div className={`d-flex justify-content-center align-items-end`}>
        <span className="text-white fw-bold me-2" style={{ fontSize: '2rem' }}>
          R$
        </span>
        <span
          className="text-white fw-bold"
          style={{ fontSize: '2.625rem', lineHeight: '60px' }}
        >
          {FormatPrice(data.preco, true)}
        </span>
      </div>
      <div>
        <span className="text-white" style={{ fontSize: '.9rem' }}>
          por pessoa
        </span>
      </div>
      <div>
        {!isHotel && loading && (
          <ButtonCustom bsClass={'mt-3'} onClick={addInCart} loading={true}>
            Carregando...
          </ButtonCustom>
        )}
        {!isHotel && !loading && (
          <ButtonCustom bsClass={'mt-3'} onClick={addInCart}>
            Escolher aventura
          </ButtonCustom>
        )}
        {isHotel && (
          <ButtonCustom type="link" bsClass={'mt-3'} link={'#'}>
            Saber mais
          </ButtonCustom>
        )}
      </div>
    </div>
  );
};

export default AdventurePrice;

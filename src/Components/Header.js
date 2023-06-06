import React from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalStorage';
import ModalLogin from './ModalLogin';
import { apiRoute, logoutRoute, optionsFetch } from '../DB/data';
import useFetch from '../Hooks/useFetch';

const Header = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { request } = useFetch();

  React.useEffect(() => {
    if (window.sessionStorage.getItem('user')) {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
      setSession({
        logged: true,
        user: user,
      });
    }
  }, []);

  async function handleLogout() {
    const { json } = await request(
      `${apiRoute}${logoutRoute}`,
      optionsFetch({ method: 'POST', token: session.user.token }),
    );
    const removeItem = window.sessionStorage.removeItem('user');
    if (json.message !== 'Logout realizado com sucesso!' && !removeItem)
      alert('ocorreu um erro');

    setSession({
      logged: false,
      user: '',
    });
    navigate('/');
  }

  return (
    <header className={styles.divHeader}>
      {/* <Alert  variant={'success'}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert> */}
      <div className="container-xl">
        <div
          className={`${styles.divInside} d-flex flex-column flex-sm-row justify-content-between align-items-center`}
        >
          <div className="mb-3 mb-sm-0">
            <Link to="/">
              <img src="/imgs/logo.svg" alt="Logo Adventurer's Journal" />
            </Link>
          </div>
          <nav className="mb-3 mb-sm-0">
            <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-betwenn align-items-center">
              <li>
                <Link to="/aventurar-se">Aventurar-se</Link>
              </li>
              <li>
                <Link to="/planos">Planos</Link>
              </li>
              <li>
                <Link to="/sobre-nos">Sobre nós</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          {session.logged ? (
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  className={styles.dropdown}
                  id="dropdown-basic"
                >
                  <span className="me-2" style={{ fontSize: '.9rem' }}>
                    {session.user.name}
                  </span>
                  <BsPersonCircle color="#fff" size={'24px'} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/perfil" className="dropdown-item text-start">
                    Meu perfil
                  </Link>
                  <Link to="/carrinho" className="dropdown-item text-start">
                    Meu carrinho
                  </Link>
                  <Link to="/meus-pedidos" className="dropdown-item text-start">
                    Meus pedidos
                  </Link>
                  <Link
                    to="/configurações"
                    className="dropdown-item text-start"
                  >
                    Configurações
                  </Link>
                  <Dropdown.Item onClick={handleLogout} className="text-danger">
                    Encerrar sessão
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <>
              <ModalLogin textBtn="Fazer Login" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

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

  async function handleLogout() {
    const { json } = await request(
      `${apiRoute}${logoutRoute}`,
      optionsFetch({ method: 'POST', token: session.user.token }),
    );

    if (json.message !== 'Logout realizado com sucesso!')
      alert('ocorreu um erro');

    setSession({
      logged: false,
      user: '',
    });
    navigate('/');
  }

  return (
    <header className={styles.divHeader}>
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
                <Link to="/">Calculo</Link>
              </li>
              <li>
                <Link to="/">Planos</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre nós</Link>
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
                  <Link to="/config" className="dropdown-item text-start">
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

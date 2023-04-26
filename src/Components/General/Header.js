import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { GlobalContext } from '../Helpers/GlobalStorage';
import ModalCustom from './ModalCustom';

const Header = () => {
  const { session, setSession } = React.useContext(GlobalContext);
  console.log(session);

  return (
    <header className={styles.divHeader}>
      <div className="container-xl">
        <div
          className={`${styles.divInside} d-flex justify-content-between align-items-center`}
        >
          <div>
            <img src="/imgs/logo.svg" alt="Logo Adventurer's Journal" />
          </div>
          <nav>
            <ul className="list-unstyled d-flex justify-content-betwenn align-items-center">
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
                  <BsPersonCircle color="#fff" size={'24px'} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Meu perfil</Dropdown.Item>
                  <Dropdown.Item>Login</Dropdown.Item>
                  <Dropdown.Item href="/">Encerrar sessão</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <>
              <ModalCustom textBtn="Login" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

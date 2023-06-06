import React from 'react';
import styles from './ResearchedAdventures.module.css';
import DesktopFilterAdventure from './DesktopFilterAdventure';
import AdventureCard from './AdventureCard';
import MobileFilterAdventure from './MobileFilterAdventure';
import { GlobalContext } from '../Context/GlobalStorage';
import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import {
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortDown,
  BsSortDownAlt,
} from 'react-icons/bs';

const ResearchedAdventures = ({ adventurers, getAdventurers }) => {
  const { searchAdventure, setSearchAdventure } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const totalItems = adventurers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const currentItems = adventurers.slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  function handleOrder(type, value) {
    searchAdventure.orderType = type;
    searchAdventure[type] = value;
    if (type !== 'orderPrice') searchAdventure.orderPrice = '';
    if (type !== 'orderTitle') searchAdventure.orderTitle = '';
    if (type !== 'orderAge') searchAdventure.orderAge = '';
    setSearchAdventure(searchAdventure);
    getAdventurers();
  }

  React.useEffect(() => {
    console.log(adventurers);
  }, []);

  return (
    <section className="row justify-content-between align-items-start">
      <div className="d-none d-lg-block col-12 col-lg-3">
        <DesktopFilterAdventure getAdventurers={getAdventurers} />
      </div>
      <div className="d-block d-lg-none col-12 col-lg-3">
        <MobileFilterAdventure getAdventurers={getAdventurers} />
      </div>
      <div className="col-12 col-lg-9 text-center">
        <div
          className="d-flex justify-content-between align-items-center mb-4 p-3 rounded"
          style={{ backgroundColor: '#1C2331' }}
        >
          <div className="d-flex justify-content-between align-items-center text-white">
            <p className="mb-3 mb-lg-0 me-3">
              Foi encontrado{' '}
              <span className="fw-bold">{adventurers.length} resultados.</span>
            </p>
            <p
              className="text-center mb-0 fw-semibold"
              style={{ color: '#00A3FF', cursor: 'pointer' }}
              onClick={() => {
                navigate('/aventurar-se');
              }}
            >
              Realizar nova busca
            </p>
          </div>
          <DropdownButton
            id="dropdown-orderby"
            title={
              <span style={{ fontSize: '.9rem' }}>
                Ordenar por:{' '}
                <span className="fw-bold">
                  {searchAdventure.orderPrice
                    ? 'Preço  '
                    : searchAdventure.orderTitle
                    ? 'Titulo  '
                    : searchAdventure.orderAge
                    ? 'Idade min. '
                    : 'Nenhum'}
                  {searchAdventure.orderType === 'orderPrice' ? (
                    searchAdventure.orderPrice === 'asc' ? (
                      <BsSortDownAlt style={{ fontSize: '1.5rem' }} />
                    ) : (
                      <BsSortDown style={{ fontSize: '1.5rem' }} />
                    )
                  ) : searchAdventure.orderType === 'orderTitle' ? (
                    searchAdventure.orderTitle === 'asc' ? (
                      <BsSortAlphaDown style={{ fontSize: '1.5rem' }} />
                    ) : (
                      <BsSortAlphaDownAlt style={{ fontSize: '1.5rem' }} />
                    )
                  ) : searchAdventure.orderType === 'orderAge' ? (
                    searchAdventure.orderAge === 'asc' ? (
                      <BsSortDownAlt style={{ fontSize: '1.5rem' }} />
                    ) : (
                      <BsSortDown style={{ fontSize: '1.5rem' }} />
                    )
                  ) : (
                    ''
                  )}
                </span>
              </span>
            }
          >
            <Dropdown.Item
              onClick={() => {
                handleOrder('orderPrice', 'asc');
              }}
            >
              Preço: Do menor para maior
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleOrder('orderPrice', 'desc');
              }}
            >
              Preço: Do maior para menor
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleOrder('orderTitle', 'asc');
              }}
            >
              Titulo: A a Z
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleOrder('orderTitle', 'desc');
              }}
            >
              Titulo: Z a A
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleOrder('orderAge', 'asc');
              }}
            >
              Idade min.: Do menor para maior
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleOrder('orderAge', 'desc');
              }}
            >
              Idade min.: Do maior para menor
            </Dropdown.Item>
          </DropdownButton>
        </div>

        {adventurers.length ? (
          <>
            {adventurers.slice(firstIndex, lastIndex).map((adventure) => {
              return (
                <div key={adventure.id}>
                  <AdventureCard data={adventure} />
                </div>
              );
            })}
            {totalPages > 1 ? (
              <div className="d-flex justify-content-center align-items-center">
                <Pagination>
                  <Pagination.First
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage(1);
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  />

                  <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Página Anterior
                  </Pagination.Prev>

                  {pageNumbers.map((pageNumber) => (
                    <Pagination.Item
                      key={pageNumber}
                      active={pageNumber === currentPage}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </Pagination.Item>
                  ))}

                  <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Próxima Página
                  </Pagination.Next>

                  <Pagination.Last
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage(totalPages);
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  />
                </Pagination>
              </div>
            ) : (
              ''
            )}
          </>
        ) : (
          <>
            <h3 className="text-white fw-bold">
              Não foi encontrado aventuras com suas preferências.
              <span className="d-block mt-2 fs-5 fw-normal">
                Experimente fazer outra busca
              </span>
            </h3>
            <ButtonCustom
              bsClass={'text-uppercase mt-3'}
              onClick={() => {
                navigate('/aventurar-se');
              }}
            >
              Realizar outra pesquisa
            </ButtonCustom>
          </>
        )}
      </div>
    </section>
  );
};

export default ResearchedAdventures;

import React from 'react';
import styles from './MobileFilterAdventure.module.css';
import ButtonCustom from './ButtonCustom';
import { Offcanvas } from 'react-bootstrap';
import { apiRoute, getModalitysRoute, optionsFetch } from '../DB/data';
import useFetch from '../Hooks/useFetch';
import { GlobalContext } from '../Context/GlobalStorage';
import Loading from './Loading';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Form } from 'react-router-dom';
import DesktopFilterAdventure from './DesktopFilterAdventure';

const MobileFilterAdventure = ({ getAdventurers }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.divMain}>
      <div
        className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3"
        style={{ maxWidth: '90vw' }}
      >
        <h3 className="text-white mb-0 fw-bold">Filtro</h3>
        <ButtonCustom variant="primary" onClick={handleShow}>
          Filtrar
        </ButtonCustom>
      </div>

      <Offcanvas show={show} onHide={handleClose} className={styles.offCanvas}>
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title className="w-100">
            <div className="d-flex justify-content-between align-items-center w-100">
              <span>Filtro</span>{' '}
              <ButtonCustom bsClass="me-4">Filtrar</ButtonCustom>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DesktopFilterAdventure
            mobile={true}
            getAdventurers={getAdventurers}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileFilterAdventure;

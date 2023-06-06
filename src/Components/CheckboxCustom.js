import React from 'react';
import styles from './CheckboxCustom.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { GlobalContext } from '../Context/GlobalStorage';

const CheckboxCustom = ({
  text,
  bsClass,
  id,
  cart,
  allCheck,
  itensId,
  setItensId,
  selectAll,
  setSelectAll,
}) => {
  const { itensCart, setItensCart } = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(false);

  const handleOptionSelect = (id) => {
    if (itensId.includes(id)) {
      setItensCart(itensCart.filter((value) => value !== id));
      setItensId(itensId.filter((value) => value !== id));
      if (active) setActive(false);
      if (selectAll) setSelectAll(false);
    } else {
      setItensCart([...itensCart, id]);
      setItensId([...itensId, id]);
      if (!active) setActive(true);
    }
  };

  const toggleAll = () => {
    if (active) {
      setItensCart([]);
      setItensId([]);
      setSelectAll(false);
      setActive(false);
    } else if (!active) {
      const newItens = cart.map(({ id }) => id);
      setItensCart(newItens);
      setItensId(newItens);
      setSelectAll(true);
      setActive(true);
    }
  };

  React.useEffect(() => {
    // if (!allCheck && !active && selectAll) handleOptionSelect(id);
    // else if (!allCheck && active && !selectAll) handleOptionSelect(id);
    if (allCheck && !active && selectAll) setActive(true);
    else if (allCheck && active && !selectAll) setActive(false);
    else if (!allCheck && !active && selectAll) setActive(true);
    else if (!allCheck && active && !selectAll) setActive(false);
  }, [selectAll]);

  React.useEffect(() => {
    if (!allCheck) {
      if (itensId.includes(id) && !active) setActive(true);
      else if (!itensId.includes(id) && active) setActive(false);
    } else if (allCheck) {
      if (itensId.length === cart.length) setActive(true);
      else if (itensId.length !== cart.length) setActive(false);
    }
  }, [active, allCheck, id, itensId]);

  if (allCheck)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        onClick={toggleAll}
        style={{ cursor: 'pointer' }}
      >
        <div className={`${styles.checkbox} ${active ? styles.active : ''}`}>
          {active ? <BsFillCheckCircleFill /> : ''}
        </div>

        <p className={`${bsClass} mb-0 ms-2`}>{text}</p>
      </div>
    );
  else
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        onClick={() => {
          if (id) {
            handleOptionSelect(id);
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className={`${styles.checkbox} ${active ? styles.active : ''}`}>
          {active ? <BsFillCheckCircleFill /> : ''}
        </div>

        <p className={`${bsClass} mb-0 ms-2`}>{text}</p>
      </div>
    );
};

export default CheckboxCustom;

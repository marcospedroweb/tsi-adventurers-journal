import React from 'react';
import styles from './CheckboxCustom.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { GlobalContext } from '../Context/GlobalStorage';

const CheckboxCustom = ({ text, bsClass, checked, id, selectAll, onClick }) => {
  const { itensCart, setItensCart } = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(checked);

  React.useEffect(() => {
    if (selectAll) setItensCart([...itensCart, id]);
    if (itensCart.includes(id)) setActive(true);
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (id) {
          if (!active) setItensCart([...itensCart, id]);
          else setItensCart(itensCart.filter((idCart) => idCart !== id));
        }

        setActive(!active);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div
        className={`${styles.checkbox} ${
          active || selectAll ? styles.active : ''
        }`}
      >
        {active || selectAll ? <BsFillCheckCircleFill /> : ''}
      </div>
      <p className={`${bsClass} mb-0 ms-2`}>{text}</p>
    </div>
  );
};

export default CheckboxCustom;

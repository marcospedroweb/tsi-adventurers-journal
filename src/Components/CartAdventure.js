import React from 'react';
import styles from './CartAdventure.module.css';
import LabelCard from './LabelCard';
import LimitText from '../Helpers/LimitText';
import ModalShowMore from './ModalShowMore';
import FormatPrice from '../Helpers/FormatPrice';
import ModalEditAdventure from './ModalEditAdventure';

const CartAdventure = () => {
  return (
    <div className="row justify-content-between align-items-center w-100">
      <div className="col-12 col-lg-2">
        <div className={styles.divImg}></div>
      </div>
      <div className="col-12 col-lg-10">
        <div
          className={`${styles.divInfo} d-flex flex-column flex-xl-row justify-content-between align-items-center rounded w-100`}
        >
          <div className="w-100">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
              <LabelCard
                title={'Local'}
                text={LimitText(
                  'Av. Francisco Bhering, Ipanema Rio de Janeiro ',
                )}
                stylesCss={{ backgroundColor: '#283040' }}
                bsClass={'me-0 me-sm-2 mb-2 w-100'}
              />
              <LabelCard
                title={'Data'}
                text={'20/12/2020 - 21/12/2020'}
                stylesCss={{ backgroundColor: '#283040' }}
                bsClass={'mb-2  w-100'}
              />
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
              <LabelCard
                title={'Modalidades'}
                text={LimitText('Paraquedismo, Surf, Bangue Jump')}
                stylesCss={{ backgroundColor: '#283040' }}
                bsClass={'me-2 mb-2  w-100'}
              />
              <LabelCard
                title={'Aventureiros'}
                text={LimitText('3 pessoas')}
                stylesCss={{ backgroundColor: '#283040' }}
                bsClass={'mb-2  w-100'}
              />
            </div>
            <div className="w-100 mb-2 mb-xl-0">
              <ModalShowMore />
            </div>
          </div>
          <div className={styles.divPrice}>
            <h3>Total do pedido</h3>
            <p>{FormatPrice('2595,99')}</p>
            <ModalEditAdventure passengersNum={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAdventure;

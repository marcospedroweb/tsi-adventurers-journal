import React from 'react';
import styles from './UserRatingCard.module.css';
import useFetch from '../Hooks/useFetch';

const UserRatingCard = ({ plan, text }) => {
  const [user, setUser] = React.useState('');
  const { loading, request } = useFetch();
  async function getRandomUser() {
    const { json } = await request('https://randomuser.me/api');
    setUser(json.results[0]);
  }

  React.useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <div className="col-12 col-md-6 col-lg-3 align-self-stretch mt-3">
      <div className={`${styles.divMain}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            className={`${
              plan === 'Adventurer Plus'
                ? styles.plus
                : plan === 'Adventurer'
                ? styles.adventurer
                : styles.free
            } ${styles.divBorder}`}
          >
            <img
              src={user ? user.picture.large : '/imgs/no_user_img.png'}
              alt=""
            />
          </div>

          <span
            className={
              plan === 'Adventurer Plus'
                ? 'text-green-blue'
                : plan === 'Adventurer'
                ? 'text-green'
                : 'text-gray'
            }
          >
            {plan}
          </span>
        </div>
        <div className={`${styles.divText} position-relative px-4`}>
          <img
            src="/imgs/mark_left_green.svg"
            className="position-absolute top-0 start-0"
            alt="Aspas"
          />
          <p className="px-2 px-lg-0">{text}</p>
          <img
            src="/imgs/mark_right_green.svg"
            className="position-absolute bottom-0 end-0"
            alt="Aspas"
          />
        </div>
        <div
          className={`${styles.divName} d-flex justify-content-end align-items-center gap-2`}
        >
          <div></div>
          <h3>{user ? `${user.name.first} ${user.name.last}` : 'Usuario'}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserRatingCard;

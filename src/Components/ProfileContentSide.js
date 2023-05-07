import React from 'react';
import styles from './ProfileContentSide.module.css';
import UserAdventurers from './UserAdventurers';

const ProfileContentSide = () => {
  return (
    <section className="col-12 col-lg-8 mt-5">
      <div className="px-3">
        <UserAdventurers />
      </div>
    </section>
  );
};

export default ProfileContentSide;

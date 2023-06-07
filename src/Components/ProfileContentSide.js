import React from 'react';
import UserAdventurers from './UserAdventurers';
import UserPreferences from './UserPreferences';

const ProfileContentSide = ({ user, modalitys }) => {
  return (
    <section className="col-12 col-lg-8 mt-5" style={{ marginBottom: '150px' }}>
      <div className="px-3">
        <UserAdventurers user={user} modalitys={modalitys} />
      </div>
      {/* <UserPreferences /> */}
    </section>
  );
};

export default ProfileContentSide;

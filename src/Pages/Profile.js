import React from 'react';
import BannerProfile from '../Components/BannerProfile';
import ProfileUserSide from '../Components/ProfileUserSide';
import ProfileContentSide from '../Components/ProfileContentSide';

const Profile = () => {
  return (
    <>
      <BannerProfile />
      <div className="container-xl">
        <div className="row justify-content-between align-items-center">
          <ProfileUserSide />
          <ProfileContentSide />
        </div>
      </div>
    </>
  );
};

export default Profile;

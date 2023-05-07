import React from 'react';
import BannerProfile from '../Components/BannerProfile';
import ProfileUserSide from '../Components/ProfileUserSide';
import ProfileContentSide from '../Components/ProfileContentSide';

const Profile = () => {
  return (
    <>
      <BannerProfile />
      <div className="container-xl">
        <div className="row flex-column flex-lg-row justify-content-between align-items-start">
          <ProfileUserSide />
          <ProfileContentSide />
        </div>
      </div>
    </>
  );
};

export default Profile;

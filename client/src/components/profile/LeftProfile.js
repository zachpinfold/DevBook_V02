import React from "react";
import PicUpload from "./PicUpload";

const LeftProfile = ({
  profile: {
    profilePic,
    location,
    website,
    user: { name }
  }
}) => {
  return (
    <div className='left-profile-div'>
      <PicUpload profilePic={profilePic} />
      <div className='profile-left-info'>
        <p className='profile-name'>{name}</p>
        <p className='profile-location'>{location}</p>
        {website && (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={website}
            className='btn-website'
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
};

LeftProfile.propTypes = {};

export default LeftProfile;

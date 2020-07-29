import React from "react";
import PropTypes from "prop-types";
import PicUpload from "./PicUpload";

const LeftProfile = ({
  user,
  profile: {
    profilePic,
    location,
    website,
    user: { name }
  }
}) => {
  console.log(user.name);

  return (
    <div className='left-profile-div'>
      <PicUpload profilePic={profilePic} />
      <div className='profile-left-info'>
        <p className='profile-name'>{user.name}</p>
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
        {/* <a href='' className='btn-CV'>
          CV
        </a> */}
      </div>
    </div>
  );
};

LeftProfile.propTypes = {};

export default LeftProfile;

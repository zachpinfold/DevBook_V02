import React from "react";
import PropTypes from "prop-types";
import PicUpload from "./PicUpload";

const LeftProfile = ({ profile }) => {
  return (
    <div className='left-profile-div'>
      <PicUpload profilePic={profile.profilePic} />
      <div className='profile-left-info'>
        <p className='profile-name'>Zach Pinfold</p>
        <p className='profile-location'>London</p>
        <a href='' className='btn-website'>
          Website
        </a>
        <a href='' className='btn-CV'>
          CV
        </a>
      </div>
    </div>
  );
};

LeftProfile.propTypes = {};

export default LeftProfile;

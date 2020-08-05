import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import black_pic from "../../Assets/green_blank_pic.jpg";

import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    location,
    skills,
    loading,
    profilePic,
    experiences
  }
}) => {
  // const sortedExp = sortEduArray(experiences);

  return (
    <Fragment>
      <div className='profiles'>
        <div className='left-profiles'>
          <Link to={`/profile/${_id}`}>
            <img
              className='profile-images'
              src={profilePic ? profilePic : black_pic}
              alt='my profile pic'
            />
          </Link>
        </div>
        <div className='right-profiles'>
          <div className='profile-copy-top'>
            <Link to={`/profile/${_id}`}>
              <h2 className='profiles-name profiles-link'>{name}</h2>
            </Link>
            {experiences.length > 0 && (
              <div style={{ textAlign: "right" }}>
                <h2 className='profiles-status'>{experiences[0].title}</h2>
                <h3 style={{ opacity: "0.7" }} className='profiles-status'>
                  at {experiences[0].company}
                </h3>
              </div>
            )}
          </div>
          <h2 className='profiles-status profiles-status-none'>{status}</h2>
          <h2 className='profiles-status opacity'>{location}</h2>
          <h2 className='profiles-status'>Tech Skills:</h2>
          <p className='profiles-copy'>{skills}</p>
          {/* <div class='line-break-red'></div>{" "} */}
        </div>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

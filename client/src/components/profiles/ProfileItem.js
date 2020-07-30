import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import black_pic from "../../Assets/green_blank_pic.jpg";
import sortEduArray from "../../utils/sortEdu";

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
  const sortedExp = sortEduArray(experiences);
  const { title } = experiences[0];
  const { company } = experiences[0];

  console.log(title);

  return (
    <Fragment>
      <div className='profiles'>
        <div className='left-profiles'>
          <Link to={`/profile/${_id}`}>
            <img
              class='profile-images'
              src={profilePic ? profilePic : black_pic}
              alt='Picture of me'
            />
          </Link>
        </div>
        <div className='right-profiles'>
          <div className='profile-copy-top'>
            <Link to={`/profile/${_id}`}>
              <h2 className='profiles-name profiles-link'>{name}</h2>
            </Link>
            <h2 className='profiles-status'>
              {title}
              <h2 style={{ opacity: "0.7" }} className='profiles-status'>
                at {company}
              </h2>
            </h2>
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

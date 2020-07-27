import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProfileEducation from "./ProfileEducation";

const RightProfile = ({ profile }) => {
  const { status, skills, bio } = profile;

  return (
    <div className='right-profile-div'>
      <div className='profile-right-info'>
        <h2 className='heading profile-H'>{status}</h2>
        <p className='profile-copy'>{skills}</p>
        <h3 className='profile-sub'>About me</h3>
        <p className='profile-copy'>{bio}</p>
        <h3 className='profile-sub'>Work Experience</h3>
        {profile.education.length > 0 ? (
          <Fragment>
            {profile.education.map(edu => (
              <ProfileEducation key={edu._id} education={edu} />
            ))}
          </Fragment>
        ) : (
          <a
            className='btn-primary btn-create btn-no-margin'
            href='profile.html'
          >
            Add Experience
          </a>
        )}

        <h3 className='profile-sub'>Education</h3>

        <h3 className='profile-sub'>GitHub Repos</h3>
        <h4 className='experience-company repo-title'>Repo1</h4>
        <p className='experience-time'>Last updated - Jan 2018</p>
        <p className='profile-copy repo-copy'>
          quidebi tatenienim dolupta quam eribus denimagni volorrumque
          invelesedia quam quodipsumqui repudi optur maio.
        </p>
        <a href='' className='btn-CV repo'>
          View Repo
        </a>
        <h4 className='experience-company repo-title'>Repo2</h4>
        <p className='experience-time'>Last updated - Jan 2018</p>
        <p className='profile-copy repo-copy'>
          quidebi tatenienim dolupta quam eribus denimagni volorrumque
          invelesedia quam quodipsumqui repudi optur maio.
        </p>
        <a href='' className='btn-CV repo'>
          View Repo
        </a>
      </div>
    </div>
  );
};

RightProfile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default RightProfile;

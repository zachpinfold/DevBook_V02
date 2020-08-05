import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ProfileExperiences from "./ProfileExperiences";
import ProfileEducation from "./ProfileEducation";
import NewExperience from "../forms/NewExperience";
import { connect } from "react-redux";
import NewEducation from "../forms/NewEducation";
import sortEduArray from "../../utils/sortEdu";
import GitHub from "./GitHub";

const MODAL_OPEN_CLASS = "modal-open";

const RightProfile = ({ user, profile: { profile } }) => {
  const [showExpForm, toggleShowExp] = useState(false);
  const [showEduForm, toggleShowEdu] = useState(false);
  // const { status, skills, bio } = profile;

  const toggleShowExpForm = hide => {
    document.body.classList.add(MODAL_OPEN_CLASS);
    toggleShowExp(true);
    if (hide === "hide") {
      document.body.classList.remove(MODAL_OPEN_CLASS);
      toggleShowExp(!true);
    }
  };

  const toggleShowEduForm = hide => {
    document.body.classList.add(MODAL_OPEN_CLASS);
    toggleShowEdu(true);
    if (hide === "hide") {
      document.body.classList.remove(MODAL_OPEN_CLASS);
      toggleShowEdu(!true);
    }
  };

  const sortedExp = sortEduArray(profile.experiences);
  const sortedArray = sortEduArray(profile.education);

  return (
    <Fragment>
      <div className='right-profile-div'>
        <div className='profile-right-info'>
          <h2 className='heading profile-H'>{profile.status}</h2>
          <p className='profile-copy'>{profile.skills.join(" / ")}</p>
          <h3 style={{ marginTop: "10px" }} className='profile-sub'>
            About me
          </h3>
          <div className='line-break-red'></div>

          <p className='profile-copy'>{profile.bio}</p>
          <h3 className='profile-sub'>Work Experience</h3>
          <div className='line-break-red'></div>

          {profile.experiences.length > 0 && (
            <Fragment>
              {profile.experiences.map(exp => (
                <ProfileExperiences key={exp._id} experience={exp} />
              ))}
            </Fragment>
          )}
          {user && profile.user._id === user._id && (
            <button
              className={
                sortedExp.length > 0
                  ? "btn-a-small btn-no-back"
                  : "btn-a btn-no-back"
              }
              onClick={toggleShowExpForm}
            >
              Add work experience..
            </button>
          )}

          {showExpForm && (
            <NewExperience toggleShowExpForm={toggleShowExpForm} />
          )}

          <h3 className='profile-sub'>Education</h3>
          <div className='line-break-red'></div>

          {sortedArray.length > 0 && (
            <Fragment>
              {sortedArray.map(edu => (
                <ProfileEducation key={edu._id} education={edu} />
              ))}
            </Fragment>
          )}

          {user && profile.user._id === user._id && (
            <button
              className={
                sortedArray.length > 0
                  ? "btn-a-small btn-no-back"
                  : "btn-a btn-no-back"
              }
              onClick={toggleShowEduForm}
            >
              Add education..
            </button>
          )}

          {showEduForm && (
            <NewEducation toggleShowEduForm={toggleShowEduForm} />
          )}

          {profile.githubusername && (
            <Fragment>
              <h3 className='profile-sub'>GitHub Repos</h3>
              <div className='line-break-red'></div>
              <GitHub username={profile.githubusername} />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

RightProfile.propTypes = {
  profile: PropTypes.object.isRequired
};

const MSTP = state => ({
  profile: state.profile
});

export default connect(MSTP)(RightProfile);

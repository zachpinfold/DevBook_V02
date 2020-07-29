import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProfileExperiences from "./ProfileExperiences";
import ProfileEducation from "./ProfileEducation";
import NewExperience from "../forms/NewExperience";
import { connect } from "react-redux";
import { getCurrentProfileExperience } from "../../actions/profile";
import NewEducation from "../forms/NewEducation";
import sortEduArray from "../../utils/sortEdu";
import GitHub from "./GitHub";

const MODAL_OPEN_CLASS = "modal-open";

const RightProfile = ({
  // profile,
  getCurrentProfileExperience,
  profile: { profile },
  experiences
}) => {
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

  useEffect(() => {
    getCurrentProfileExperience();
  }, [getCurrentProfileExperience]);

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
          <div class='line-break-red'></div>

          <p className='profile-copy'>{profile.bio}</p>
          <h3 className='profile-sub'>Work Experience</h3>
          <div class='line-break-red'></div>

          {sortedExp.length > 0 && (
            <Fragment>
              {sortedExp.map(exp => (
                <ProfileExperiences key={exp._id} experience={exp} />
              ))}
            </Fragment>
          )}
          {
            <a
              className={sortedExp.length > 0 ? "btn-a-small" : "btn-a"}
              onClick={toggleShowExpForm}
            >
              Add work experience..
            </a>
          }
          {showExpForm && (
            <NewExperience toggleShowExpForm={toggleShowExpForm} />
          )}

          <h3 className='profile-sub'>Education</h3>
          <div class='line-break-red'></div>

          {sortedArray.length > 0 && (
            <Fragment>
              {sortedArray.map(edu => (
                <ProfileEducation key={edu._id} education={edu} />
              ))}
            </Fragment>
          )}
          {
            <a
              className={sortedArray.length > 0 ? "btn-a-small" : "btn-a"}
              onClick={toggleShowEduForm}
            >
              Add education..
            </a>
          }
          {showEduForm && (
            <NewEducation toggleShowEduForm={toggleShowEduForm} />
          )}

          <h3 className='profile-sub'>GitHub Repos</h3>
          <div class='line-break-red'></div>
          {profile.githubusername && (
            <GitHub username={profile.githubusername} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

RightProfile.propTypes = {
  // profile: PropTypes.object.isRequired,
  getCurrentProfileExperience: PropTypes.func.isRequired
};

const MSTP = state => ({
  profile: state.profile,
  experiences: state.profile.experiences
});

export default connect(MSTP, { getCurrentProfileExperience })(RightProfile);

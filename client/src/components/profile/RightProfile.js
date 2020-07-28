import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProfileExperiences from "./ProfileExperiences";
import NewExperience from "../forms/NewExperience";
import { connect } from "react-redux";
import { getCurrentProfileExperience } from "../../actions/profile";

const MODAL_OPEN_CLASS = "modal-open";

const RightProfile = ({
  // profile,
  getCurrentProfileExperience,
  profile: { profile, experiences }
}) => {
  const [showForm, toggleShowExp] = useState(false);
  // const { status, skills, bio } = profile;

  const toggleShowForm = hide => {
    document.body.classList.add(MODAL_OPEN_CLASS);
    toggleShowExp(true);
    if (hide === "hide") {
      document.body.classList.remove(MODAL_OPEN_CLASS);
      toggleShowExp(!true);
    }
  };

  useEffect(() => {
    getCurrentProfileExperience();
  }, [getCurrentProfileExperience]);

  console.log(profile);

  return (
    <Fragment>
      <div className='right-profile-div'>
        <div className='profile-right-info'>
          <h2 className='heading profile-H'>{profile.status}</h2>
          <p className='profile-copy'>{profile.skills}</p>
          <h3 className='profile-sub'>About me</h3>
          <p className='profile-copy'>{profile.bio}</p>
          <h3 className='profile-sub'>Work Experience</h3>
          {experiences.length > 0 && (
            <Fragment>
              {experiences.map(exp => (
                <ProfileExperiences key={exp._id} experience={exp} />
              ))}
            </Fragment>
          )}
          {
            <a
              className={experiences.length > 0 ? "btn-a-small" : "btn-a"}
              onClick={toggleShowForm}
            >
              Add some work experience..
            </a>
          }
          {showForm && <NewExperience toggleShowForm={toggleShowForm} />}

          <h3 className='profile-sub'>Education</h3>
          {/* {profile.education.length > 0 ? (
            <Fragment>
              {profile.education.map(edu => (
              <ProfileEducation key={edu._id} education={edu} />
            ))}
            </Fragment>
          ) : (
            <a className='btn-a' href='profile.html'>
              Add some education..
            </a>
          )} */}

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
    </Fragment>
  );
};

RightProfile.propTypes = {
  // profile: PropTypes.object.isRequired,
  getCurrentProfileExperience: PropTypes.func.isRequired
};

const MSTP = state => ({
  profile: state.profile
});

export default connect(MSTP, { getCurrentProfileExperience })(RightProfile);

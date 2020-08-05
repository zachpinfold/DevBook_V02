import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import Alert from "../layout/Alert";

const CreateProfile = ({ createProfile, history, auth }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: ""
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, auth.user._id);
  };

  return (
    <Fragment>
      <section style={{ marginTop: "60px" }} className='main-section-3'>
        <h2 className='heading'>Basic Profile Setup</h2>
        <div className='line-break'></div>
        <Alert />
        <div className='new-profile-div'>
          <div className='left-profile'>
            <form action='' className='form' onSubmit={e => onSubmit(e)}>
              <select
                className='drop-down'
                name='status'
                value={status}
                id='title'
                onChange={e => onChange(e)}
              >
                <option value='0'>* Select Professional Status</option>
                <option value='Developer'>Developer</option>
                <option value='Junior Developer'>Junior Developer</option>
                <option value='Senior Developer'>Senior Developer</option>
                <option value='Manager'>Manager</option>
                <option value='Student or Learning'>Student or Learning</option>
                <option value='Instructor'>Instructor or Teacher</option>
                <option value='Intern'>Intern</option>
                <option value='Other'>Other</option>
              </select>
              <div className='form-group form-profile'>
                <div className='input-regular'>
                  <h4 className='form-headings'>Current Workplace</h4>
                  <input
                    type='text'
                    placeholder='Company'
                    name='company'
                    value={company}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group form-profile'>
                <div className='input-regular'>
                  <h4 className='form-headings'>Portfolio Website</h4>
                  <input
                    type='text'
                    placeholder='Website'
                    name='website'
                    value={website}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group form-profile'>
                <div className='input-regular'>
                  <h4 className='form-headings'>Location</h4>
                  <input
                    type='text'
                    placeholder='Location'
                    name='location'
                    value={location}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group form-profile'>
                <div className='input-regular'>
                  <h4 className='form-headings'>*Tech Stack</h4>
                  <input
                    type='text'
                    placeholder='* Skills'
                    name='skills'
                    value={skills}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group form-profile'>
                <div className='input-regular'>
                  <h4 className='form-headings'>A bit about me</h4>
                  <textarea
                    placeholder='A short bio of yourself'
                    name='bio'
                    value={bio}
                    onChange={e => onChange(e)}
                  ></textarea>
                </div>
              </div>
              <div className='form-group form-profile'>
                <div className='input-regular'>
                  <h4 className='form-headings'>GitHub Username</h4>
                  <input
                    type='text'
                    placeholder='Github Username'
                    name='githubusername'
                    value={githubusername}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <input type='submit' className='btn-primary btn-create btn-hid' />
            </form>
          </div>
          <div className='right-profile'>
            <div className='right-profile-top'>
              <div className='top-profile-mockup'>
                <div className='avatar-profile form-complete'></div>
              </div>
              <div className='top-right-profile-mockup'>
                <div
                  className={`position-profile ${
                    status.length > 1 ? "form-complete" : null
                  }`}
                >
                  Status
                </div>
                <div
                  className={`position-profile ${
                    company.length > 1 ? "form-complete" : null
                  }`}
                >
                  Company
                </div>
                <div
                  className={`position-profile ${
                    website.length > 1 ? "form-complete" : null
                  }`}
                >
                  Website
                </div>
                <div
                  className={`position-profile ${
                    location.length > 1 ? "form-complete" : null
                  }`}
                >
                  Location
                </div>
              </div>
            </div>
            <div
              style={{ height: "50px" }}
              className={`position-profile ${
                skills.length > 1 ? "form-complete" : null
              }`}
            >
              Tech Stack
            </div>
            <div className='bottom-profile-mockup'>
              <div
                style={{ height: "100px" }}
                className={`position-profile ${
                  bio.length > 1 ? "form-complete" : null
                }`}
              >
                Bio
              </div>

              <div
                style={{ height: "80px", marginTop: "20px" }}
                className={`position-profile ${
                  githubusername.length > 1 ? "form-complete" : null
                }`}
              >
                GitHub
              </div>
            </div>
          </div>

          <input
            type='submit'
            className='btn-primary btn-create btn-hide-mob'
          />
        </div>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mstp = state => ({
  auth: state.auth
});

export default connect(mstp, { createProfile })(withRouter(CreateProfile));

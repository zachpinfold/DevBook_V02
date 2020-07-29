import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const NewExperience = ({ addExperience, history, toggleShowForm }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div>
      <Fragment>
        <div className='cropAddExp'>
          <form
            class='form'
            onSubmit={e => {
              e.preventDefault();
              addExperience(formData);
              toggleShowForm("hide");
            }}
          >
            <div className='exp-top'>
              <button
                type='button'
                className='btn-no-back'
                onClick={() => toggleShowForm("hide")}
              >
                <i className='fas fa-times exp-hide'></i>
              </button>
            </div>
            <div className='title-centre'>
              <h2 class='large text-primary'>Add An Experience</h2>
            </div>
            <div className='form-group exp-form'>
              <div className='input-half'>
                <h4 className='form-headings'>*Job Title</h4>
                <input
                  type='text'
                  name='title'
                  value={title}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='input-half-right'>
                <h4 className='form-headings'>*Company</h4>
                <input
                  type='text'
                  name='company'
                  value={company}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-regular'>
                <h4 className='form-headings'>Location</h4>

                <input
                  type='text'
                  placeholder='Location'
                  value={location}
                  onChange={e => onChange(e)}
                  name='location'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-half'>
                <h4 className='form-headings'>*First Name</h4>
                <input
                  type='date'
                  name='from'
                  value={from}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='input-half-right'>
                <h4 className='form-headings'>*Last Name</h4>
                <input
                  type='date'
                  name='to'
                  value={to}
                  onChange={e => onChange(e)}
                  disabled={toDateDisabled ? "diabled" : ""}
                />
              </div>
            </div>
            <div class='form-group'>
              <p style={{ color: "white" }}>
                <input
                  type='checkbox'
                  name='current'
                  value={current}
                  checked={current}
                  onChange={e => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                  }}
                />{" "}
                Current Job
              </p>
            </div>

            <div class='form-group'>
              <textarea
                style={{ height: "100px" }}
                name='description'
                cols='30'
                rows='5'
                placeholder='Job Description'
                value={description}
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <input type='submit' class='btn btn-primary my-1' />
            <a class='btn-a-back' onClick={() => toggleShowForm("hide")}>
              Go Back
            </a>
          </form>
        </div>
      </Fragment>
    </div>
  );
};

NewExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  toggleShowForm: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(NewExperience));

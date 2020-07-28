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
          <h2 class='large text-primary'>Add An Experience</h2>
          <form
            class='form'
            onSubmit={e => {
              e.preventDefault();
              addExperience(formData);
              toggleShowForm("hide");
            }}
          >
            <div className='form-group exp-form'>
              <div className='input-half'>
                <h4 className='form-headings'>*First Name</h4>
                <input
                  type='text'
                  placeholder='* Job Title'
                  name='title'
                  value={title}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='input-half-right'>
                <h4 className='form-headings'>*Last Name</h4>
                <input
                  type='text'
                  placeholder='* Company'
                  name='company'
                  value={company}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>
            <div class='form-group'>
              <input
                type='text'
                placeholder='Location'
                value={location}
                onChange={e => onChange(e)}
                name='location'
              />
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
              <p>
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

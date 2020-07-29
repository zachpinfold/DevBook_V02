import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const NewEducation = ({ addEducation, history, toggleShowEduForm }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    from,
    to,
    fieldofstudy,
    description,
    current
  } = formData;

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
              addEducation(formData);
              toggleShowEduForm("hide");
            }}
          >
            <div className='exp-top'>
              <button
                type='button'
                className='btn-no-back'
                onClick={() => toggleShowEduForm("hide")}
              >
                <i className='fas fa-times exp-hide'></i>
              </button>
            </div>
            <div className='title-centre'>
              <h2 class='large text-primary'>Add An Experience</h2>
            </div>
            <div className='form-group exp-form'>
              <div className='input-half'>
                <h4 className='form-headings'>* School or bootcamp</h4>
                <input
                  type='text'
                  name='school'
                  value={school}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='input-half-right'>
                <h4 className='form-headings'>* Degree or Certificate</h4>
                <input
                  type='text'
                  name='degree'
                  value={degree}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-regular'>
                <h4 className='form-headings'>Field of Study</h4>

                <input
                  type='text'
                  value={fieldofstudy}
                  onChange={e => onChange(e)}
                  name='fieldofstudy'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-half'>
                <h4 className='form-headings'>*From</h4>
                <input
                  type='date'
                  name='from'
                  value={from}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='input-half-right'>
                <h4 className='form-headings'>*To</h4>
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
            <a class='btn-a-back' onClick={() => toggleShowEduForm("hide")}>
              Go Back
            </a>
          </form>
        </div>
      </Fragment>
    </div>
  );
};

NewEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  toggleShowEduForm: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(NewEducation));

import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Uhoh, passwords don't match", "danger");
    } else {
      setAlert(null, "danger", "remove");
    }
  };

  return (
    <Fragment>
      <section className='main-section-2'>
        <h2 className='heading'>Register an Account</h2>
        <div className='line-break'></div>
        <form onSubmit={onSubmit} action='' className='form'>
          <div className='form-break'>
            <div className='form-group'>
              <div className='input-half'>
                <h4 className='form-headings'>*First Name</h4>
                <input
                  name='firstName'
                  value={firstName}
                  onChange={e => onChange(e)}
                  type='text'
                />
              </div>
              <div className='input-half-right'>
                <h4 className='form-headings'>*Last Name</h4>
                <input
                  name='lastName'
                  value={lastName}
                  onChange={e => onChange(e)}
                  type='text'
                />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <div className='input-regular'>
              <h4 className='form-headings'>*Email</h4>
              <input
                name='email'
                value={email}
                onChange={e => onChange(e)}
                type='text'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-regular'>
              <h4 className='form-headings'>*Password</h4>
              <input
                name='password'
                value={password}
                onChange={e => onChange(e)}
                type='password'
              />
            </div>
          </div>
          {<Alert />}
          <div className='form-group'>
            <div className='input-regular'>
              <h4 className='form-headings'>*Confirm Password</h4>
              <input
                name='password2'
                value={password2}
                onChange={e => onChange(e)}
                type='password'
              />
            </div>
          </div>
          <input type='submit' className='btn-primary' value='Register' />
        </form>
      </section>
    </Fragment>
  );
};

Register.protoTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);

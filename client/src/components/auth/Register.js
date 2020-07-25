import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";

/* eslint-disable */

const Register = ({ setAlert, register, isAuthenticated }) => {
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
    const name = firstName + lastName;
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  // Redirect

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='main-section-2'>
        <h2 className='heading'>Register an Account</h2>
        <div className='line-break'></div>
        <form onSubmit={onSubmit} action='' className='form'>
          <div className='form-break'>
            <Alert />
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
          {/* {alertMessage.map(msg => {
            return msg.msg !== "Include a valid email" &&
              msg.msg !==
                "PPlease enter a password that is a minimum of 6 characters" &&
              msg.msg !== "Name is required" ? (
              <Alert directAlert={"Name is required"} />
            ) : null;
          })} */}
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
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register);

import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../layout/Alert";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='main-section-2'>
        <h2 className='heading'>Login</h2>
        <div className='line-break'></div>
        <form onSubmit={onSubmit} action='' className='form'>
          <Alert />
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
          <div className='login-buttons'>
            <input type='submit' className='btn-primary' value='Login' />
            <h4 style={{ marginTop: "20px" }}>Don't have an account?</h4>
            <Link to='/register'>
              <button
                style={{ marginTop: "10px" }}
                className='btn-primary btn-secondary'
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

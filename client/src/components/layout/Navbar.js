import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";

const Navbar = ({
  getCurrentProfile,
  profile,
  auth: { isAuthenticated, loading, user },
  logout
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const authLinks = (
    <ul>
      <li>
        <Link style={{ cursor: "pointer" }} onClick={logout} to='/login'>
          Logout
        </Link>
      </li>
      <li>
        <Link to='/profiles'>Profiles</Link>
      </li>
      {user && (
        <Link to={`/profile/${user._id}`}>
          <div className='navbar-image-div'>
            <img className='nav-profile-image' src={user.profilePic} alt='' />
            <div className='profile-image-nav-overlay'></div>
          </div>
        </Link>
      )}
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Profiles</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <div>
        <Link to='/'>
          <div style={{ marginTop: "20px", marginLeft: "20px" }}>
            <h1 className='h1-top-nav'>{"< Dev"}</h1>
            <h1
              className='h1-top-nav'
              style={{ marginLeft: "29px", marginTop: "-10px" }}
            >
              {"Book >"}
            </h1>
          </div>
        </Link>
      </div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(Navbar);

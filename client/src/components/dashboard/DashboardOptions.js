import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

const DashboardOptions = ({ profile: { profile, loading } }) => {
  return (
    <div className='dashboard-right'>
      <a className='dash-name'>Zach Pinfold</a>
      {profile !== null && (
        <Fragment>
          <Link to='/edit-profile'>
            <a style={{ marginTop: "10px" }} className='btn-edit-profile'>
              Edit Profile
            </a>
          </Link>
          <Link to='/profile-me'>
            <a style={{ marginTop: "10px" }} className='btn-edit-profile'>
              View Profile
            </a>
          </Link>
        </Fragment>
      )}

      {profile && profile === null && (
        <Link to='/create-profile'>
          <button style={{ marginTop: "10px" }} className='btn-CV'>
            Create Profile
          </button>
        </Link>
      )}
    </div>
  );
};

DashboardOptions.propTypes = {};

export default DashboardOptions;

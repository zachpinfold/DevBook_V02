import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DashboardOptions = ({ profile: { profile, loading } }) => {
  return (
    <div className='dashboard-right'>
      <p className='dash-name'>Zach Pinfold</p>
      {profile !== null && (
        <Fragment>
          <Link
            style={{ marginTop: "10px" }}
            className='btn-edit-profile'
            to='/edit-profile'
          >
            Edit Profile
          </Link>
          <Link
            // style={{ marginTop: "10px" }}
            className='btn-edit-profile'
            to='/profile-me'
          >
            View Profile
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

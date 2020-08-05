import React from "react";
import { Link } from "react-router-dom";

const CreateProfileLink = props => {
  return (
    <div className='btn-centre-div'>
      <Link to='/create-profile'>
        <h2> You need to create a basic profile to access this content:</h2>
        <button
          style={{ marginTop: "10px" }}
          className='btn-primary btn-secondary'
        >
          Create Profile
        </button>
      </Link>
    </div>
  );
};

CreateProfileLink.propTypes = {};

export default CreateProfileLink;

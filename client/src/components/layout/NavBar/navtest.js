import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { getCurrentProfile } from "../../../actions/profile";
import { logout } from "../../../actions/auth";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({
  open,
  getCurrentProfile,
  profile,
  auth: { isAuthenticated, loading, user },
  logout
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <Ul open={open}>
      <li>
        <Link style={{ cursor: "pointer" }} to='/posts'>
          Posts
        </Link>
      </li>
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
    </Ul>
  );
};

RightNav.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(
  RightNav
);

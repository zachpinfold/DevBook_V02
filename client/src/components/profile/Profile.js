import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { getProfileById } from "../../actions/profile";

import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";
import Alert from "../layout/Alert";

// const MODAL_OPEN_CLASS = "body--modal-open";

const Profile = ({
  match,
  getProfileById,
  profile: { profile },
  auth: { user }
}) => {
  useEffect(() => {
    console.log("hello");
    getProfileById(match.params.id);
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth"
      },
      500
    );
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {!profile ? (
        <div>hello</div>
      ) : (
        <section className='main-section-4'>
          <Alert />
          <div className='profile-div'>
            <LeftProfile user={user} profile={profile} />
            <RightProfile user={user} profile={profile} />
          </div>
        </section>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, getProfileById })(
  Profile
);

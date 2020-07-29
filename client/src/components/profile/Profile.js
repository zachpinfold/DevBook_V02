import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import PicUpload from "./PicUpload";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";
import CreateProfileLink from "./CreateProfileLink";
import Alert from "../layout/Alert";

const MODAL_OPEN_CLASS = "body--modal-open";

const Profile = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user }
}) => {
  useEffect(() => {
    getCurrentProfile();
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth"
      },
      500
    );
  }, [getCurrentProfile]);

  return loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      {profile === null ? (
        <CreateProfileLink />
      ) : (
        <Fragment>
          <section className='main-section-4'>
            <Alert />
            <div className='profile-div'>
              <LeftProfile user={user} profile={profile} />
              <RightProfile profile={profile} />
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);

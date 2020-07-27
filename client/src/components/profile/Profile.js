import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import PicUpload from "./PicUpload";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

const Profile = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  // const {
  // status,
  // skills,
  // bio,
  //   experiences,
  //   education,
  //   user,
  //   location,
  //   website
  // } = profile;

  return (
    <Fragment>
      {profile === null || loading ? (
        <div>Loading</div>
      ) : (
        <Fragment>
          <section className='main-section-4'>
            <div className='profile-div'>
              <LeftProfile profile={profile} />
              <RightProfile profile={profile} />
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);

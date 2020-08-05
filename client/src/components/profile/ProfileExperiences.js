import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const ProfileExperiences = ({
  profile,
  auth,
  experience: { company, title, location, current, to, from, description, _id },
  deleteExperience
}) => {
  return (
    <Fragment>
      <div>
        <div className='exp-top-div'>
          <h4 className='experience-company'>
            {company} - {title}
          </h4>
          {!auth.loading &&
            auth.user &&
            profile.profile.user._id === auth.user._id && (
              <button
                className='btn-no-back'
                onClick={() => {
                  deleteExperience(_id);
                }}
              >
                <i className='fas fa-times exp-del'></i>
              </button>
            )}
        </div>
        <p className='experience-time'>
          <Moment format='MMM YYYY'>{from}</Moment> -{" "}
          {to === null ? " Now" : <Moment format='MMM YYYY'>{to}</Moment>}
        </p>
        <p className='profile-copy'>{description}</p>
        {/* <div class='line-break'></div> */}
      </div>
    </Fragment>
  );
};

ProfileExperiences.propTypes = {
  experience: PropTypes.object.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { deleteExperience })(
  ProfileExperiences
);

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const ProfileEducation = ({
  deleteEducation,

  education: {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current,
    _id
  }
}) => {
  return (
    <Fragment>
      <div>
        <div className='exp-top-div'>
          <h4 className='experience-company'>{school}</h4>
          <button
            className='btn-no-back'
            onClick={() => {
              deleteEducation(_id);
            }}
          >
            <i className='fas fa-times exp-del'></i>
          </button>
        </div>
        <p className='experience-time'>
          <Moment format='MMM YYYY'>{from}</Moment> -{" "}
          {to === null ? " Now" : <Moment format='MMM YYYY'>{to}</Moment>}
        </p>
        <p className='profile-copy'>{description}</p>
        <div class='line-break'></div>
      </div>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  edu: PropTypes.array.isRequired,
  experience: PropTypes.object.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(ProfileEducation);

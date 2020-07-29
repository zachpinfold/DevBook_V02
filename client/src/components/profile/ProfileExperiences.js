import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const ProfileEducation = ({
  experience: { company, title, location, current, to, from, description, _id },
  deleteExperience
}) => {
  // console.log(company);

  return (
    <Fragment>
      <div>
        <div className='exp-top-div'>
          <h4 className='experience-company'>
            {company} - {title}
          </h4>
          <button
            className='btn-no-back'
            onClick={() => {
              deleteExperience(_id);
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
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(ProfileEducation);

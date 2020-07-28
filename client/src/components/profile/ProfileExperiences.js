import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  experience: { company, title, location, current, to, from, description }
}) => {
  return (
    <Fragment>
      <h4 className='experience-company'>
        {company} - {title}
      </h4>
      <p className='experience-time'>
        <Moment format='MMM YYYY'>{from}</Moment> -{" "}
        {to === null ? " Now" : <Moment format='MMM YYYY'>{to}</Moment>}
      </p>
      <p className='profile-copy'>{description}</p>
      <div class='line-break'></div>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  edu: PropTypes.array.isRequired
};

export default ProfileEducation;

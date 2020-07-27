import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileEducation = ({ edu }) => {
  return (
    <Fragment>
      <h4 className='experience-company'>Microsoft - Senior Developer</h4>
      <p className='experience-time'>Jan 2012 - Jan 2018</p>
      <p className='profile-copy'>
        quidebi tatenienim dolupta quam eribus denimagni volorrumque invelesedia
        quam quodipsumqui repudi optur maio. Aceptur magnatur, simolorent
        quuntior re remporerum nonsed que arum in et ma dolore, officit aborerf
        erspedio omnihillabo. Et et mo
      </p>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  edu: PropTypes.array.isRequired
};

export default ProfileEducation;

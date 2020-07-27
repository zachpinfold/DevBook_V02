import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import PicUpload from "./PicUpload";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Profile = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  console.log(profile);

  return (
    <Fragment>
      {profile === null || loading ? (
        <div>Loading</div>
      ) : (
        <Fragment>
          <section class='main-section-4'>
            <div class='profile-div'>
              <div class='left-profile-div'>
                <PicUpload profilePic={profile.profilePic} />
                <div class='profile-left-info'>
                  <p class='profile-name'>Zach Pinfold</p>
                  <p class='profile-location'>London</p>
                  <a href='' class='btn-website'>
                    Website
                  </a>
                  <a href='' class='btn-CV'>
                    CV
                  </a>
                </div>
              </div>
              <div class='right-profile-div'>
                <div class='profile-right-info'>
                  <h2 class='heading profile-H'>Front End Developer</h2>
                  <p class='profile-copy'>
                    React, React Redux, React Native, MongoDB, PSQL, HTML, CSS,
                    WordPress, PHP
                  </p>
                  <h3 class='profile-sub'>About me</h3>
                  <p class='profile-copy'>
                    quidebi tatenienim dolupta quam eribus denimagni volorrumque
                    invelesedia quam quodipsumqui repudi optur maio.
                  </p>
                  <h3 class='profile-sub'>Work Experience</h3>
                  <h4 class='experience-company'>
                    Microsoft - Senior Developer
                  </h4>
                  <p class='experience-time'>Jan 2012 - Jan 2018</p>
                  <p class='profile-copy'>
                    quidebi tatenienim dolupta quam eribus denimagni volorrumque
                    invelesedia quam quodipsumqui repudi optur maio. Aceptur
                    magnatur, simolorent quuntior re remporerum nonsed que arum
                    in et ma dolore, officit aborerf erspedio omnihillabo. Et et
                    mo
                  </p>
                  <p class='profile-copy'></p>
                  <h3 class='profile-sub'>Education</h3>
                  <a
                    class='btn-primary btn-create btn-no-margin'
                    href='profile.html'
                  >
                    Add Education
                  </a>
                  <h3 class='profile-sub'>GitHub Repos</h3>
                  <h4 class='experience-company repo-title'>Repo1</h4>
                  <p class='experience-time'>Last updated - Jan 2018</p>
                  <p class='profile-copy repo-copy'>
                    quidebi tatenienim dolupta quam eribus denimagni volorrumque
                    invelesedia quam quodipsumqui repudi optur maio.
                  </p>
                  <a href='' class='btn-CV repo'>
                    View Repo
                  </a>
                  <h4 class='experience-company repo-title'>Repo2</h4>
                  <p class='experience-time'>Last updated - Jan 2018</p>
                  <p class='profile-copy repo-copy'>
                    quidebi tatenienim dolupta quam eribus denimagni volorrumque
                    invelesedia quam quodipsumqui repudi optur maio.
                  </p>
                  <a href='' class='btn-CV repo'>
                    View Repo
                  </a>
                </div>
              </div>
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

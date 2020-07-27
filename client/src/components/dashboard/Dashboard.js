import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../config/config";
import NewsCard from "../dashboard/NewsCard";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = ({ isAuthenticated, getCurrentProfile, profile }) => {
  // console.log(profile.loading);

  useEffect(() => {
    getCurrentProfile();
    console.log(profile.profile);
  }, [getCurrentProfile]);

  return profile.loading ? (
    <div>Hello</div>
  ) : (
    <section class='main-section-2'>
      {profile.profile === null && <Redirect to='create-profile' />}
      <h2 class='heading'>Contol Centre</h2>
      <div class='line-break'></div>
      <div class='dashboard'>
        <div class='dashboard-left'>
          <h4 class='news-top'>Latest Tech News</h4>
          <NewsCard />
        </div>
        <div class='dashboard-right'>
          <a class='dash-name'>Zach Pinfold</a>
          <Link to='/edit-profile'>
            <a style={{ marginTop: "10px" }} className='btn-edit-profile'>
              Edit Profile
            </a>
          </Link>
          <Link to='/profile-me'>
            <a style={{ marginTop: "10px" }} className='btn-edit-profile'>
              View Profile
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

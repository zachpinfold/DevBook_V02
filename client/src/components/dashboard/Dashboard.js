import React, { useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../config/config";
import NewsCard from "../dashboard/NewsCard";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import DashboardOptions from "./DashboardOptions";
import CreateProfileLink from "../profile/CreateProfileLink";

const Dashboard = ({ isAuthenticated, getCurrentProfile, profile }) => {
  // console.log(profile.loading);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile.profile && profile.loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <section class='main-section-2'>
        {/* {profile.profile === null && <Redirect to='create-profile' />} */}
        <h2 class='heading'>Contol Centre</h2>
        <div class='line-break'></div>
        {!profile.loading && profile.profile !== null ? (
          <Fragment>
            <div class='dashboard'>
              <div class='dashboard-left'>
                <h4 class='news-top'>Latest Tech News</h4>
                <NewsCard />
              </div>
              <DashboardOptions profile={profile} />
            </div>
          </Fragment>
        ) : !profile.loading && profile.profile === null ? (
          <Fragment>
            <div className='dash-profile-create'>
              <CreateProfileLink />
            </div>
          </Fragment>
        ) : null}
      </section>
    </Fragment>
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

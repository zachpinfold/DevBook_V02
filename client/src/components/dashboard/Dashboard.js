import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import NewsCard from "../dashboard/NewsCard";
import PostCard from "../dashboard/PostCard";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import DashboardOptions from "./DashboardOptions";
import CreateProfileLink from "../profile/CreateProfileLink";

const Dashboard = ({ getCurrentProfile, profile }) => {
  // console.log(profile.loading);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile.profile && profile.loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <section className='main-section-2'>
        {/* {profile.profile === null && <Redirect to='create-profile' />} */}
        <h2 className='heading'>Contol Centre</h2>
        <div className='line-break'></div>
        {!profile.loading && profile.profile !== null ? (
          <Fragment>
            <div className='dashboard'>
              <div className='dashboard-left'>
                <h4 className='news-top'>Latest Tech News</h4>
                <NewsCard />
                <h4 className='news-top'>Latest Dev Post</h4>
                <PostCard />
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
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

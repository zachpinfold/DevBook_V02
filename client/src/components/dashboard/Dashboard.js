import React, { useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../config/config";

const Dashboard = props => {
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=developer", {
      headers: {
        "X-API-KEY": API.private.news
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.articles[0]);
      });
  }, []);

  return (
    <section class='main-section-2'>
      <h2 class='heading'>Contol Centre</h2>
      <div class='line-break'></div>
      <div class='dashboard'>
        <div class='dashboard-left'>
          <h4 class='news-top'>Latest News</h4>
          <div class='dashboard-card'>
            <h2 class='card-title'>No-one likes React Redux</h2>
            <h4 class='news-top-from'>BBC</h4>
            <p>
              Some thing ois Et que od qui is volenia dolesecata qui volessi
              doluptate nusdae volent. Asint lam nus sequia plignate opta
              velitat essequi ut rendae porupta necae...
            </p>
          </div>
        </div>
        <div class='dashboard-right'>
          <a class='dash-name'>Zach Pinfold</a>
          <a class='dash-link'>View Profile</a>
          <a class='btn-primary btn-hidden-large' href='new-profile.html'>
            View profile
          </a>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

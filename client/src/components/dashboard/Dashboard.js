import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../config/config";
import NewsCard from "../dashboard/NewsCard";

const Dashboard = props => {
  // useEffect(() => {
  //   fetch("https://newsapi.org/v2/everything?q=developer", {
  //     headers: {
  //       "X-API-KEY": API.API.news
  //     }
  //   })
  //     .then(response => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(json => {
  //       console.log(json.articles[0]);
  //     });
  // }, []);

  return (
    <section class='main-section-2'>
      <h2 class='heading'>Contol Centre</h2>
      <div class='line-break'></div>
      <div class='dashboard'>
        <div class='dashboard-left'>
          <h4 class='news-top'>Latest Tech News</h4>
          <NewsCard />
        </div>
        <div class='dashboard-right'>
          <a class='dash-name'>Zach Pinfold</a>
          <a class='dash-link'>View Profile</a>
          <Link to='/create-profile'>Edit Profile</Link>
          <Link to='/profile-me'>Edit Profile</Link>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

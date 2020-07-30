import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";

const NewsCard = ({ getNews, news: { loading, news } }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return loading || news === null ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <div class='dashboard-card'>
        <a target='_blank' className='card-title-link' href={news.url}>
          <h2 class='card-title'>{news.title}</h2>
        </a>
        <h4 class='news-top-from'>{news.source.name}</h4>
        <p className='dash-description'>{news.description}</p>
      </div>
    </Fragment>
  );
};

NewsCard.propTypes = {
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, { getNews })(NewsCard);

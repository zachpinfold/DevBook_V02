import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";

const PostCard = ({ getPosts, post: { loading, posts } }) => {
  useEffect(() => {
    getPosts(1);
  }, [getPosts]);

  return loading || posts.length === 0 ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <div className='dashboard-card'>
        <Link
          to={`posts/${posts[0]._id}`}
          className='card-title-link'
          href={""}
        >
          <h2 className='card-title'>{posts[0].title}</h2>
        </Link>
        <h4 className='news-top-from'>{posts[0].name}</h4>
        <p className='dash-description'>{posts[0].text}</p>
      </div>
    </Fragment>
  );
};

PostCard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(PostCard);

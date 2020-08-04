import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deletePost } from "../../actions/post";

const PostItem = ({
  deletePost,
  auth,
  post: {
    _id,
    profilePic,
    title,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date,
    loading
  }
}) => {
  return loading || auth.loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <div class='dashboard-card posts'>
        <div className='profile-card-top'>
          {!auth.loading && user === auth.user._id && (
            <button
              className='btn-no-back'
              onClick={() => {
                deletePost(_id);
              }}
            >
              <i className='fas fa-times exp-del'></i>
            </button>
          )}
        </div>
        <Link to={`/posts/${_id}`} className='card-title-link'>
          <h2 class='card-title'>{title}</h2>
        </Link>

        <div className='posts-profile'>
          <img className='nav-profile-image' src={profilePic} alt='' />
          <Link to={`/profile/${auth.user._id}`} className='card-title-link'>
            <h4 class='news-top-from'>{name}</h4>
          </Link>
        </div>

        <p className='dash-description'>{text}</p>
        <div className='likes-div'>
          {" "}
          <i className='fas fa-heart like-icon'></i>
          <p className='posts-likes'>{likes.length}</p>
        </div>
      </div>
    </Fragment>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  profile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  deletePost
})(PostItem);

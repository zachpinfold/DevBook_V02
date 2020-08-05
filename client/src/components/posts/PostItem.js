import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../actions/post";

const PostItem = ({
  deletePost,
  auth,
  post: { _id, profilePic, title, text, name, user, likes, loading }
}) => {
  return loading || auth.loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <div className='dashboard-card posts'>
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
          <h2 className='card-title'>{title}</h2>
        </Link>

        <div className='posts-profile'>
          <img className='nav-profile-image' src={profilePic} alt='' />
          <Link to={`/profile/${auth.user._id}`} className='card-title-link'>
            <h4 className='news-top-from'>{name}</h4>
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
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  deletePost
})(PostItem);

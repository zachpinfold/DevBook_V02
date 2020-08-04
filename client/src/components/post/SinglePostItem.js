import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { connect } from "react-redux";

const SinglePostItem = ({ post, removeLike, addLike, auth }) => {
  const isItLiked = post.likes.map(like => {
    return like.user === auth.user._id;
  });

  return !post ? (
    <div>yoyo</div>
  ) : (
    <div>
      <h1 className='post-title'>{post.title}</h1>
      <div className='post-profile-area'>
        <div className='post-left-area'>
          <img class='nav-profile-image' src={post.profilePic} alt='' />
          <div className='post-date-div'>
            <h4 className='post-top-from'>{post.name}</h4>
            <Moment className='post-date' format='DD MMM YYYY'>
              {post.date}
            </Moment>
          </div>
        </div>
        <div className='post-right-area'>
          {" "}
          <div className='likes-div'>
            {" "}
            {isItLiked.includes(true) === true ? (
              <button
                type='button'
                className='btn-no-back'
                onClick={e => removeLike(post._id)}
              >
                {" "}
                <i className='fas fa-heart like-icon'></i>
              </button>
            ) : (
              <button
                type='button'
                className='btn-no-back'
                onClick={e => addLike(post._id)}
              >
                {" "}
                <i className='far fa-heart like-icon'></i>
              </button>
            )}
            <p className='posts-likes'>{post.likes.length}</p>
          </div>
        </div>
      </div>
      <div className='line-break'></div>
      <p className='post-copy'>{post.text}</p>
    </div>
  );
};

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default connect(null, { addLike, removeLike })(SinglePostItem);

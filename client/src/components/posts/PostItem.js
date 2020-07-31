import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { getProfileById } from "../../actions/profile";

const PostItem = ({
  deletePost,
  getProfileById,
  addLike,
  removeLike,
  auth,
  post: { _id, title, text, name, avatar, user, likes, comments, date },
  showActions,
  profile: { loading, profile }
}) => {
  const [showProfilePic, setProfilePic] = useState(false);

  useEffect(() => {
    getProfileById(user).then(() => {
      setProfilePic(true);
    });
  }, [getProfileById]);

  return loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <div class='dashboard-card posts'>
        <Link to={`/posts/${_id}`} className='card-title-link'>
          <h2 class='card-title'>{title}</h2>
        </Link>

        <div className='posts-profile'>
          {showProfilePic && (
            <img
              className='nav-profile-image'
              src={profile.profilePic}
              alt=''
            />
          )}
          <h4 class='news-top-from'>{name}</h4>
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
  getProfileById,
  addLike,
  removeLike,
  deletePost
})(PostItem);

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { getProfileById } from "../../actions/profile";

const PostItem = ({
  deletePost,
  addLike,
  removeLike,
  auth,
  post: { _id, title, text, name, avatar, user, likes, comments, date },
  showActions,
  profile: { loading, profile }
}) => {
  useEffect(() => {
    if (auth.user.id !== null) {
      getProfileById(auth.user.id);
    }
  }, [getProfileById]);

  console.log(profile);

  return loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <div class='dashboard-card'>
        <to to={`/posts/${_id}`} className='card-title-link'>
          <h2 class='card-title'>{title}</h2>
        </to>
        <div className='posts-profile'>
          <img className='nav-profile-image' src={profile.profilePic} alt='' />
          <h4 class='news-top-from'>{name}</h4>
        </div>
        <p className='dash-description'>{text}</p>
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

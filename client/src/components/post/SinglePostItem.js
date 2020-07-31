import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const SinglePostItem = ({ post }) => {
  console.log(post);
  return post ? (
    <div>
      <h1 className='post-title'>{post.title}</h1>
      <div className='post-profile-area'>
        <img class='nav-profile-image' src={post.profilePic} alt='' />
        <div className='post-date-div'>
          <h4 className='post-top-from'>{post.name}</h4>
          <Moment className='post-date' format='DD MMM YYYY'>
            {post.date}
          </Moment>
        </div>
      </div>
      <div className='line-break'></div>
    </div>
  ) : (
    <div>yoyo</div>
  );
};

SinglePostItem.propTypes = {};

export default SinglePostItem;

import React, { useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../config/config";
import PostItem from "../posts/PostItem";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import CreateProfileLink from "../profile/CreateProfileLink";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  // console.log(profile.loading);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <section class='main-section-2'>
        <h2 class='heading'>Dev Posts</h2>
        <div class='line-break'></div>
        <div className='posts'>
          {posts.map(post => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);

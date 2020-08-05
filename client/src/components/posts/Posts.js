import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <div>Hell</div>
  ) : (
    <Fragment>
      <section className='main-section-2'>
        <h2 className='heading'>Dev Posts</h2>
        <div className='line-break'></div>
        <Link to='/new-post'>
          <button
            style={{ marginTop: "10px" }}
            className='btn-primary btn-secondary'
          >
            New Post
          </button>
        </Link>
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

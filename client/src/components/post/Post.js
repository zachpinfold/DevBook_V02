import React, { useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../config/config";
import { getPost } from "../../actions/post";
import { connect } from "react-redux";
import SinglePostItem from "./SinglePostItem";

const Post = ({ auth, match, getPost, post: { post, loading } }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return post === null || auth.loading ? (
    <div>Hello</div>
  ) : (
    <Fragment>
      <section class='main-section-2'>
        <SinglePostItem auth={auth} post={post} />
      </section>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost })(Post);

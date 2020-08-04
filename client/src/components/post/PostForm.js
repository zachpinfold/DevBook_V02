import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPost } from "../../actions/post";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";

/* eslint-disable */

const PostForm = ({ history, addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: ""
  });

  const { title, text } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    addPost(formData, history);
    setFormData({ title: "", text: "" });
  };

  return (
    <Fragment>
      <section className='main-section-2'>
        <h2 className='heading'>Add a New Post</h2>
        <div className='line-break'></div>
        <form onSubmit={onSubmit} action='' className='form post-form'>
          <div className='form-break'>
            <Alert />
          </div>
          <div className='form-group'>
            <div className='input-regular'>
              <h4 className='form-headings'>*Title</h4>
              <input
                name='title'
                value={title}
                onChange={e => onChange(e)}
                type='text'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-regular'>
              <h4 className='form-headings'>*Text</h4>
              <textarea
                name='text'
                value={text}
                onChange={e => onChange(e)}
                type='text'
                style={{ height: "400px" }}
              />
            </div>
          </div>

          <input type='submit' className='btn-primary' value='Register' />
        </form>
      </section>
    </Fragment>
  );
};

PostForm.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { addPost })(withRouter(PostForm));

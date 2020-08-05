import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {repos === null ? (
        <div>hello</div>
      ) : (
        repos.map(repo => (
          <Fragment key={repo.id}>
            <h4 className='experience-company repo-title'>{repo.name}</h4>
            <p className='profile-copy repo-copy'>{repo.description}</p>
            <a
              href={repo.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-CV repo'
            >
              View Repo
            </a>
          </Fragment>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);

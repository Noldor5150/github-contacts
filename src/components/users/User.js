import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    created_at,
    html_url,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className=" btn btn-light">
          Back to finder
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-image"
              alt={`pic of ${name}`}
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
            <p>Using Github since {created_at}</p>
            <p>
              {company && (
                <Fragment>
                  <p>working {company}</p>
                </Fragment>
              )}
            </p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Biography</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-light">
              Visit my GitHub
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <p>
                      Nickname:<strong> {login}</strong>
                    </p>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <p>
                      my Page:
                      <a href={blog}>
                        <strong> {blog}</strong>
                      </a>
                    </p>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary"> Followers : {followers}</div>
          <div className="badge badge-success"> Following : {following}</div>
          <div className="badge badge-light"> Public Repos : {public_repos}</div>
          <div className="badge badge-dark"> Public Gists : {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;

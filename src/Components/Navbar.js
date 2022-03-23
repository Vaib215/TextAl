import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === 'light' ? 'dark' : 'light'
        } fixed`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p
                  className="nav-link active home"
                  onClick={props.setHome}
                  style={{ cursor: 'pointer' }}
                >
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link about"
                  onClick={props.setAbout}
                  style={{ cursor: 'pointer' }}
                >
                  {props.aboutText}
                </p>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                aria-checked
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={props.toggleMode}
              />
              <p>Toggle Mode</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Your title here',
  aboutText: 'About',
};

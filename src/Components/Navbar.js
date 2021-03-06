import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === 'light' ? 'dark' : 'light'
        } fixed`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/TextAl">
            {props.title}
          </Link>
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
                <Link className="nav-link home" to="/TextAl">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link about" to="/TextAl/about">
                  About
                </Link>
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

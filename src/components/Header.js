import * as React from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const { userToken, dispatch } = React.useContext(AppContext);

  // Logout
  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("react_auth_token");
    dispatch({
      type: "LOGOUT_USER",
      payload: {},
    });
  };

  return (
    <header
      className="navbar is-light p-4"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ml-3 pr-6" style={{ paddingLeft: "12rem" }}>
        <Link className="navbar-item" to="/">
          <h1 className="title is-3">{title}</h1>
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="projectsTrackerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu is-active" id="projectsTrackerMenu">
        <div className="navbar-start">
          <Link className="navbar-item has-text-weight-semibold" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/">
            About
          </Link>
        </div>
        <div className="navbar-end pr-6">
          <div className="navbar-item">
            <div className="buttons">
              {userToken ? (
                <Link to="" onClick={logout} className="button is-link">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="button is-link">
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Projects Tracker App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

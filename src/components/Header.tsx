import * as React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../state/context";
import { LogoutUser } from "../state/actions";

type HeaderProps = { title?: string };

const Header = ({ title }: HeaderProps): React.ReactElement => {
  const {
    state: { userToken },
    dispatch,
  } = React.useContext(AppContext);

  const logout = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      sessionStorage.removeItem("react_data");
      dispatch(LogoutUser());
    },
    [dispatch]
  );

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
          href="#projectsTrackerMenu"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="projectsTrackerMenu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
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
                <button
                  type="button"
                  onClick={logout}
                  className="button is-link"
                >
                  Logout
                </button>
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
export default Header;

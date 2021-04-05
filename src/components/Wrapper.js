import Header from "./Header";
import PropTypes from "prop-types";

const Wrapper = ({ children, token, logout }) => {
  return (
    <>
      <Header title="Projects Tracker App" token={token} logout={logout} />
      <div className="container is-max-widescreen">{children}</div>
    </>
  );
};

Wrapper.defaultProps = {
  token: "",
};

Wrapper.propTypes = {
  token: PropTypes.string,
  logout: PropTypes.func,
  children: PropTypes.object,
};

export default Wrapper;

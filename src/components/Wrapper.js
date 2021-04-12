import Header from "./Header";
import PropTypes from "prop-types";

const Wrapper = ({ children, token }) => {
  return (
    <>
      <Header title="Projects Tracker App" />
      <div className="container is-max-widescreen">{children}</div>
    </>
  );
};

Wrapper.defaultProps = {
  token: "",
};

Wrapper.propTypes = {
  token: PropTypes.string,
  children: PropTypes.object,
};

export default Wrapper;

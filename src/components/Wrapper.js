import Header from "./Header";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  margin: 0;
`;

const Wrapper = ({ children, token, logout }) => {
  return (
    <>
      <Header title="Projects Tracker App" token={token} logout={logout} />
      <Main>{children}</Main>
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

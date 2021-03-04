import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  padding: 0 3rem;
  text-align: center;
  background-color: #fbfff5;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 15rem;
  ul {
    list-style-type: none;
    list-style: none;
  }
  ul li {
    display: inline;
    margin-right: 1rem;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 2.5rem;
  padding-left: 21rem;
`;

const NavItem = styled.li`
  text-align: right;
  a {
    text-decoration: none;
    color: black;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  a.active-link {
    font-weight: 700;
  }
`;

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Nav>
        <ul className="">
          <NavItem>
            <a className="active-link" aria-current="page" href="#">
              Home
            </a>
          </NavItem>
          <NavItem>
            <a className="" href="#">
              Sign in
            </a>
          </NavItem>
          <NavItem>
            <a className="" href="#">
              Sign up
            </a>
          </NavItem>
        </ul>
      </Nav>
    </Container>
  );
};

Header.defaultProps = {
  title: "Projects Tracker App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

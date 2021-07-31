import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    background-color: rgba(51, 51, 51, 1);
    color: #ffffff;
    padding: 0.5em;
  }
`;
const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go Home</Link>
    </Container>
  );
}

export default NotFound;

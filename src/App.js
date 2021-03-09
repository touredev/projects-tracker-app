import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

import styled from "styled-components";

const Main = styled.div`
  margin: 0;
`;

function App() {
  const [user, setUser] = useState({});
  const [authToken, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("react_auth_token");
    if (token) {
      const username = localStorage.getItem("react_auth_user");
      setToken(token);
      setUser({ username });
    }
  }, []);

  // Login
  const authenticateUser = ({ username, password }) => {
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem("react_auth_token", token);
    localStorage.setItem("react_auth_user", username);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("react_auth_token");
    localStorage.removeItem("react_auth_user");
    setToken(null);
    setUser(null);
  };

  return (
    <Router>
      <>
        <Switch>
          <Route path="/login">
            <Login authenticate={authenticateUser} authToken={authToken} />
          </Route>
          <Route path="/home">
            <Header title="Projects Tracker App" user={user} logout={logout} />
            <Main>
              <Home authToken={authToken} />
            </Main>
          </Route>
          <Route path="/" exact>
            <Header title="Projects Tracker App" user={user} logout={logout} />
            <Main>
              <Home authToken={authToken} />
            </Main>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  // Logout
  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("react_auth_token");
    setToken("");
  };

  return (
    <Router>
      <>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken} token={token} />
          </Route>
          <Route path="/home">
            <Wrapper token={token} logout={logout}>
              <Home />
            </Wrapper>
          </Route>
          <Route path="/" exact>
            <Wrapper token={token} logout={logout}>
              <Home />
            </Wrapper>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

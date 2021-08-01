import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { AppProvider } from "./state/context";

function App(): React.ReactElement {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Wrapper>
              <Home />
            </Wrapper>
          </Route>
          <Route path="/projects/:projectId">
            <Wrapper>
              <ProjectDetails />
            </Wrapper>
          </Route>
          <Route path="/" exact>
            <Wrapper>
              <Home />
            </Wrapper>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;

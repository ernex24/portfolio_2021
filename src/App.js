import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';

import Home from "./pages/home"
import Project from "./pages/project"

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
          <PageTransition
              preset="fall"
              transitionKey={location.pathname}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
            </Switch>
          </PageTransition>
          );
        }}
      />
    </Router>
  );
}

export default App;

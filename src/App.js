import React, { Component } from "react";
import routes from "../src/routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

//import style
import "./assets/css/pe-icon-7.css";

import "./assets/scss/themes.scss";
import { Suspense } from "react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer />
          <Router>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                />
              ))}
            </Switch>
          </Router>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(App);

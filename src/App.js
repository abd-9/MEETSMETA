import React, { Component } from "react";
import routes from "../src/routes";
import { withRouter, Route, Switch, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./app.css";
//import style
import "./assets/css/pe-icon-7.css";

import "./assets/scss/themes.scss";

import { Suspense } from "react";
import xHistory from "./utilities/history";
import {
  AP,
  RouteAnimation,
  SectionAnimation,
} from "./component/Shared/Animation";

class App extends Component {
  render() {
    return (
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer />
          <Router history={xHistory}>
            <AP>
              <Switch>
                {routes.map((route, idx) => (
                  <Route
                    path={route.path}
                    render={({ ...res }) => (
                      <RouteAnimation>
                        {<route.component {...res} />}
                      </RouteAnimation>
                    )}
                    key={idx}
                  />
                ))}
              </Switch>
            </AP>
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);

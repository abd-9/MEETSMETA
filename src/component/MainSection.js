import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "../component/Theme";
import ViewProfile from "../component/Profile/View";
export default class MainSection extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/setting/theme"} component={Theme} key={"theme"} />
        <Route
          path={"/profile/view"}
          component={ViewProfile}
          key={"profile-view"}
        />
      </Switch>
    );
  }
}

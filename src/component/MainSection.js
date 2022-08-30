import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "../component/Theme";
import ViewProfile from "../component/Profile/View";
import EditProfile from "../component/Profile/Edit";
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
        <Route
          path={"/profile/edit"}
          component={EditProfile}
          key={"profile-edit"}
        />
      </Switch>
    );
  }
}

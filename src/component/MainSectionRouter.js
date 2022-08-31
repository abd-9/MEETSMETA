import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "./Settings/Theme";
import Billing from "./Settings/Billing";
import ViewProfile from "./Profile/View";
import EditProfile from "./Profile/Edit";
import AddContract from "./Contract/Add";
export default class MainSection extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/setting/theme"} component={Theme} key={"theme"} />
        <Route path={"/setting/billing"} component={Billing} key={"billing"} />
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
        <Route
          path={"/contract/add"}
          component={AddContract}
          key={"contract-edit"}
        />
      </Switch>
    );
  }
}

import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "../component/Theme";
export default class MainSection extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/setting/theme"} component={Theme} key={"theme"} />
      </Switch>
    );
  }
}

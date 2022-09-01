import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "./Settings/Theme";
import Billing from "./Settings/Billing";
import ViewProfile from "./Profile/View";
import CollectionsList from "./Collaction/List";
import EditProfile from "./Profile/Edit";
import AddContract from "./Contract/Add";
import { AnimatePresence } from "framer-motion";
import { SectionAnimation } from "./Shared/Animation";
export default class MainSection extends Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route
            path={"/setting/theme"}
            component={() => <Theme />}
            key={"theme"}
          ></Route>
          <Route
            path={"/setting/billing"}
            component={Billing}
            key={"billing"}
          />
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
          <Route
            path={"/collection"}
            component={CollectionsList}
            key={"collection"}
          />
        </Switch>
      </AnimatePresence>
    );
  }
}

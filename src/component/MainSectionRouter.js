import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "./Settings/Theme";
import Billing from "./Settings/Billing";
import ViewProfile from "./Profile/View";
import CollectionsList from "./Collaction/List";
import EditProfile from "./Profile/Edit";
import AddContract from "./Contract/Add";
import ContractList from "./Contract/List";
import { AnimatePresence } from "framer-motion";
import { SectionAnimation } from "./Shared/Animation";
import { SECTIONS_ROUTE } from "../routes";
export default class MainSection extends Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route
            path={SECTIONS_ROUTE.settings.theme}
            component={Theme}
            key={"theme"}
          ></Route>
          <Route
            path={SECTIONS_ROUTE.settings.billing}
            component={Billing}
            key={"billing"}
          />
          <Route
            path={SECTIONS_ROUTE.profile.view}
            component={ViewProfile}
            key={"profile-view"}
          />
          <Route
            path={SECTIONS_ROUTE.profile.edit}
            component={EditProfile}
            key={"profile-edit"}
          />
          <Route
            path={SECTIONS_ROUTE.contract.add}
            component={AddContract}
            key={"contract-view"}
          />
          <Route
            path={SECTIONS_ROUTE.contract.list}
            component={ContractList}
            key={"contract-edit"}
          />
          <Route
            path={SECTIONS_ROUTE.collection.list}
            component={CollectionsList}
            key={"collection"}
          />
        </Switch>
      </AnimatePresence>
    );
  }
}

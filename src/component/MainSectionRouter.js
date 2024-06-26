import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Theme from "./Settings/Theme";
import Payment from "./Settings/Payment";
import ViewProfile from "./Profile/View";
import CollectionsList from "./Collaction/List";
import EditProfile from "./Profile/Edit";
import AddContract from "./Contract/Add";
import Status from "./Status/index";
import ContractList from "./Contract/List";
import { AnimatePresence } from "framer-motion";
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
            path={SECTIONS_ROUTE.settings.payment}
            component={Payment}
            key={"payment"}
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
          <Route
            path={SECTIONS_ROUTE.status}
            component={Status}
            key={"status"}
          />
        </Switch>
      </AnimatePresence>
    );
  }
}

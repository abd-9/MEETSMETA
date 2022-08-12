import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Theme from "../component/Theme";
const Contact = React.lazy(() => import("../component/Contact"));
const Footer = React.lazy(() => import("../component/Footer/Footer"));
export default class Services extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route path={"/setting/theme"} component={Theme} key={"theme"} />
        </Switch>
      </Container>
    );
  }
}

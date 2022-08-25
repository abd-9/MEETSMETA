import React from "react";
import { Col, Container, Row } from "reactstrap";
import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";

const SidebarHeader = ({ title }) => {
  return (
    <>
      <Container className="p-2 px-3">
        <Row className="flexEnd">
          <Col xs="auto">
            <span className="svg-icon">
              <NotificationIcon width="23px" className="mx-2 svg-icon" />
            </span>
            <span className="svg-icon">
              <HomeIcon width="30px" />
            </span>
          </Col>
        </Row>
        <Row className="flexStart">
          <h5 className="mb-0 titles-color font-weight-bold mx-5">{title}</h5>
        </Row>
        <Divider
          style={{
            left: "-40px",
            width: "110%",
            position: "absolute",
          }}
          className="position-absolute my-2  "
        />
      </Container>
    </>
  );
};

export default SidebarHeader;

import React from "react";

import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";
import { Container, Grid } from "@mui/material";

const SidebarHeader = ({ title }) => {
  return (
    <Container className="p-2 px-3">
      <Grid container className="flexEnd">
        <Grid item xs="auto" className="flexCenter">
          <span className="svg-icon">
            <NotificationIcon width="23px" className="mx-2 svg-icon" />
          </span>
          <span className="svg-icon">
            <HomeIcon width="30px" />
          </span>
        </Grid>
      </Grid>
      <Grid className="flexStart">
        <h5 className="mb-0 titles-color font-weight-bold mx-5">{title}</h5>
      </Grid>
      <Divider
        style={{
          left: "-40px",
          width: "110%",
          position: "absolute",
        }}
        className="absolute my-2  "
      />
    </Container>
  );
};

export default SidebarHeader;

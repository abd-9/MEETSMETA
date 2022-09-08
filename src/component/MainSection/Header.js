import React from "react";

import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";
import { Container, Grid } from "@mui/material";

const SidebarHeader = ({ title, className, endComponent }) => {
  return (
    <Container className={className + " p-2 px-3 pb-5 "}>
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
      <Grid className="flexBetween">
        <div>
          <h3 className="mb-0 titles-color text-bold mx-5">{title}</h3>
        </div>
        <div>{endComponent}</div>
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

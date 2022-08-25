import React from "react";
import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";
import { Button, Container, Grid } from "@mui/material";

const MainSectionFooter = ({ title, onSaveClick }) => {
  return (
    <Container className="p-2 px-3 main-section-footer z-1">
      <Grid container className="flexEnd">
        <Grid item xs className="mr-4">
          <Button onClick={onSaveClick} className="logout-button my-2  p ">
            Save changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSectionFooter;

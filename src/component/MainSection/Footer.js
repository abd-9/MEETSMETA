import React from "react";
import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";
import { Container, Grid } from "@mui/material";
import ButtonGradient from "../Shared/Buttons";

const MainSectionFooter = ({ title, onSaveClick }) => {
  return (
    <Container className="p-2 w-full px-3 main-section-footer z-1">
      <Grid container className="flexEnd mr-5 mb-3">
        <ButtonGradient
          onClick={onSaveClick}
          color="secondaryDark"
          className="   my-2  "
        >
          Save changes
        </ButtonGradient>
      </Grid>
    </Container>
  );
};

export default MainSectionFooter;

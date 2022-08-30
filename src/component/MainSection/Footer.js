import React from "react";
import { Container, Grid } from "@mui/material";
import ButtonGradient from "../Shared/Buttons";

const MainSectionFooter = ({
  onEditClick,
  onSaveClick,
  editLable = "Edit",
}) => {
  return (
    <Container className="p-2 w-full px-3 main-section-footer z-1">
      <Grid container className="flexEnd mr-5 mb-3">
        {onEditClick && (
          <ButtonGradient
            onClick={onEditClick}
            color="secondaryDark"
            customPadding=" px-2"
            className=" my-2 mx-5  "
          >
            {editLable}
          </ButtonGradient>
        )}
        <ButtonGradient
          onClick={onSaveClick}
          color="secondaryDark"
          className=" my-2  "
        >
          Save changes
        </ButtonGradient>
      </Grid>
    </Container>
  );
};

export default MainSectionFooter;

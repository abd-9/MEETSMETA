import { Grid } from "@mui/material";
import React from "react";

export const StatusFilters = () => {
  return (
    <Grid
      item
      container
      justifyContent={"flex-end"}
      alignContent="center"
      alignItems={"center"}
    >
      <Grid item> Drop down last seen</Grid>
    </Grid>
  );
};

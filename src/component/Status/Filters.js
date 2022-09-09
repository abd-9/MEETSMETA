import { Grid } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { SORT_BY_DATE_TYPES } from "../../utilities/constants";
import XSelect from "../Shared/XSelect";

export const StatusFilters = () => {
  return (
    <Grid
      item
      container
      justifyContent={"flex-end"}
      alignContent="center"
      alignItems={"center"}
    >
      <Formik initialValues={{ sortType: null }}>
        {(formikApi) => {
          return (
            <Grid item xs={4}>
              <XSelect
                formikApi={formikApi}
                name="sortType"
                className="pr-8 w-full"
                size="small"
                options={SORT_BY_DATE_TYPES.list}
              />
            </Grid>
          );
        }}
      </Formik>
    </Grid>
  );
};

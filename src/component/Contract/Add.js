import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/Footer";
import SidebarHeader from "../MainSection/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import { Form, useFormik } from "formik";
import { Label } from "../Shared/Lable";
import { validHex } from "@uiw/react-color";
import { useHistory } from "react-router-dom";
import AddContractStepper from "./Stepper";

// Import client   Image

const AddContract = ({ Settings, UpdateUserThemeSettings }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fromApi = useFormik({
    onSubmit: handleSubmit,
    initialValues: { name: "", country: "", address: "" },
  });
  const { values } = fromApi;

  return (
    <>
      <SettingsContainer>
        <SidebarHeader title="Add contract"></SidebarHeader>

        <form onSubmit={fromApi.handleSubmit} className="w-full h-100 my-5">
          <Container>
            <Grid
              container
              rowSpacing={1}
              justifyContent={"flex-start"}
              justifyItems="flex-start"
              className=" px-2 "
            >
              <Grid item xs={12}>
                {/* <AddContractStepper></AddContractStepper> */}
              </Grid>
            </Grid>
          </Container>
          <button type="submit" className="d-none" id="themeForm"></button>
        </form>
      </SettingsContainer>
    </>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch
  );
}
function mapStateToProps({ Settings }) {
  return { Settings };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContract);

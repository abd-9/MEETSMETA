import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/SettingsFooter";
import SidebarHeader from "../MainSection/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined, InputStandard } from "../Shared/Input/Input";
import ButtonGradient from "../Shared/Buttons";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import { Form, useFormik } from "formik";
import { Label } from "../Shared/Lable";
import { validHex } from "@uiw/react-color";
import { useHistory } from "react-router-dom";

// Import client   Image

const Billing = ({ Settings, UpdateUserThemeSettings }) => {
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
        <SidebarHeader title="Profile Information"></SidebarHeader>

        <form onSubmit={fromApi.handleSubmit} className="w-full h-100 my-5">
          <Container>
            <Grid
              container
              rowSpacing={1}
              justifyContent={"flex-start"}
              // direction="column"
              justifyItems="flex-start"
              // alignItems={"flex-start"}
              className=" px-2 "
            >
              <Grid item xs={10}>
                <Label className={"my-3 font-semibold"}> Company name</Label>
                <InputOutlined
                  name="name"
                  value={values.name}
                  onChange={fromApi.handleChange}
                ></InputOutlined>
              </Grid>{" "}
              <Grid item xs={10}>
                <Label className={"my-3 font-semibold"}>
                  Email (where invoices are sent)
                </Label>
                <InputOutlined
                  name="email"
                  value={values.email}
                  onChange={fromApi.handleChange}
                ></InputOutlined>
              </Grid>
              <Grid item xs={10}>
                <Label className={"my-3 font-semibold"}> Address line 1</Label>
                <InputOutlined
                  name="name"
                  value={values.country}
                  onChange={fromApi.handleChange}
                ></InputOutlined>
              </Grid>{" "}
              <Grid item xs={10}>
                <Label className={"my-3 font-semibold"}> Address line 2</Label>
                <InputOutlined
                  name="name"
                  value={values.country}
                  onChange={fromApi.handleChange}
                ></InputOutlined>
              </Grid>{" "}
              <Grid item xs={10}>
                <Label className={"my-3 font-semibold"}> City</Label>
                <InputOutlined
                  name="name"
                  value={values.country}
                  onChange={fromApi.handleChange}
                ></InputOutlined>
              </Grid>{" "}
              <Grid item xs={10}>
                <Label className={"my-3 font-semibold"}> Country</Label>
                <InputOutlined
                  name="name"
                  value={values.country}
                  onChange={fromApi.handleChange}
                ></InputOutlined>
              </Grid>{" "}
            </Grid>
          </Container>
          <button type="submit" className="d-none" id="themeForm"></button>
        </form>
      </SettingsContainer>
      <MainSectionFooter
        onEditClick={() => {
          history.goBack();
        }}
        editLable="Back"
        onSaveClick={() => {
          document.getElementById("themeForm").click();
        }}
      ></MainSectionFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Billing);

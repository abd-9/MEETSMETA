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
import { SectionAnimation } from "../Shared/Animation";

// Import client   Image

const EditProfile = ({ Settings, UpdateUserThemeSettings }) => {
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
        <SectionAnimation>
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
                <Grid
                  container
                  alignItems={"flex-end"}
                  justifyContent={"flex-end"}
                  item
                  xs={12}
                >
                  <Grid item xs={10}>
                    <Label className={"my-3 font-semibold"}>
                      {" "}
                      Company logo
                    </Label>
                    <div className="flexCenter ">
                      <InputOutlined
                        label={null}
                        placeholder=" "
                        startButton={
                          <ButtonGradient
                            customPadding="px-3"
                            className={"text-black  "}
                            color="secondary"
                          >
                            Choose file{" "}
                          </ButtonGradient>
                        }
                      ></InputOutlined>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <ButtonGradient className={"mx-2 my-1 "} color="primary">
                      Upload
                    </ButtonGradient>
                  </Grid>
                </Grid>
                <Grid item xs={10}>
                  <Label className={"my-3 font-semibold"}> Country</Label>
                  <InputOutlined
                    name="name"
                    value={values.country}
                    onChange={fromApi.handleChange}
                  ></InputOutlined>
                </Grid>{" "}
                <Grid item xs={10}>
                  <InputStandard
                    // error={fromApi.errors}
                    name="address"
                    label={"Address"}
                    value={values.address}
                    placeholder="Enter the address"
                    onChange={fromApi.handleChange}
                  ></InputStandard>
                </Grid>{" "}
                <Grid item xs={10}>
                  <Label className={"my-3 font-semibold"}>
                    {" "}
                    Primary Contract{" "}
                  </Label>
                  <InputStandard
                    // error={fromApi.errors}
                    name="contactName"
                    label={"Contact name "}
                    // value={value}
                    placeholder="Enter contact name"
                    onChange={fromApi.handleChange}
                  ></InputStandard>
                </Grid>{" "}
                <Grid item xs={10}>
                  <InputStandard
                    // error={fromApi.errors}
                    name="phoneNumber"
                    label={"Phone number"}
                    value={values.address}
                    placeholder="Enter the phone number (optinal)"
                    onChange={fromApi.handleChange}
                  ></InputStandard>
                </Grid>{" "}
                <Grid item xs={10}>
                  <InputStandard
                    // error={fromApi.errors}
                    name="email"
                    label={"Email"}
                    type="email"
                    value={values.address}
                    placeholder="ex: abd@meetsmeta.com"
                    onChange={fromApi.handleChange}
                  ></InputStandard>
                </Grid>{" "}
              </Grid>
            </Container>
            <button type="submit" className="d-none" id="themeForm"></button>
          </form>
        </SectionAnimation>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

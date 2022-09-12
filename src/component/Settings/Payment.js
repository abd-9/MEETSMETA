import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/SettingsFooter";
import SidebarHeader from "../MainSection/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined } from "../Shared/Input/Input";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import { useFormik } from "formik";
import { Label } from "../Shared/Lable";
import { useHistory } from "react-router-dom";
import { SectionAnimation } from "../Shared/Animation";
import PaymentCard from "../Shared/Card/PaymentCard";

// Import client   Image

const Payment = ({ Settings, UpdateUserThemeSettings }) => {
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
        <SidebarHeader title="Settings - Payment"></SidebarHeader>
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
                <PaymentCard
                  title="White Sands Parcel Pass"
                  desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
                  imageUrl={"/images/test/pro1.png"}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
